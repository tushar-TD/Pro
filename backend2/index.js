const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;

// mongodb connection
console.log(process.env.MONGODB_URL);
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Error connecting to database:", err));

// schema
const userSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmpassword: String,
  profilepic: String,
});

// model
const userModel = mongoose.model("user", userSchema);

app.get("/", (req, res) => {
  res.send("Server is running");
});



app.post("/signup", async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  try {
    const existingUser = await userModel.findOne({ email: email });

    if (existingUser) {
      res.send({ message: "Already Registered", alert: false });
    } else {
      const newUser = new userModel(req.body);
      await newUser.save();
      res.send({ message: "Registered successfully", alert: true });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  const { email } = req.body;

  try {
    const result = await userModel.findOne({ email: email });

    if (result) {
      const dataSend = {
        _id: result._id,
        firstname: result.firstname,
        lastname: result.lastname,
        email: result.email, // Fix: Change result.lastname to result.email
        profilepic: result.profilepic,
      };

      console.log(dataSend);
      res.send({ message: "Login successfully", alert: true });
    } else {
      res.send({ message: "User not found", alert: false });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: "Internal Server Error", alert: false, data: dataSend
    });
  }
});





app.listen(PORT, () => console.log("Server is running on port:", PORT));
