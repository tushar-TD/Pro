const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json({ limit: '10mb' }));

const PORT = process.env.PORT || 8080;

// MongoDB connection
console.log(process.env.MONGODB_URL);
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the application if MongoDB connection fails
  });

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  profilpic: String,
});

const userModel = mongoose.model('user', userSchema);

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.post('/signup', async (req, res) => {
  try {
    const { firstname, lastname, email, password, confirmpassword, profilpic } = req.body;

    // Basic input validation
    if (!firstname || !lastname || !email || !password || !confirmpassword) {
      return res.status(400).send({ message: 'All fields are required' });
    }

    if (password !== confirmpassword) {
      return res.status(400).send({ message: 'Passwords do not match' });
    }

    // Check if the email is already registered
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.status(409).send({ message: 'Email is already registered' });
    }

    // Create a new user
    const newUser = new userModel({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password, // Hash the password before saving it to the database for security reasons
      profilpic: profilpic,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email } = req.body;

    // Basic input validation
    if (!email) {
      return res.status(400).send({ message: 'Email is required' });
    }

    // Find the user by email
    const user = await userModel.findOne({ email: email }).exec();

    if (user) {
      const dataSend = {
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        profilpic: user.profilpic
      };
      console.log(dataSend);
      return res.send({
        message: 'Login Successful',
        alert: true,
        data: dataSend
      });
    } else {
      // User not found, send an error response
      return res.status(401).send({ message: 'Invalid email or password', alert: false });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send({ message: 'Internal Server Error', alert: false });
  }
});



app.listen(PORT, () => console.log('Server is running at PORT:' + PORT))
