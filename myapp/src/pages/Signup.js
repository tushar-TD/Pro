import React from 'react'
import pic from "../images/tush.jpg";
import { BiHide, BiShow } from "react-icons/bi";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { toast } from "react-hot-toast"
import { useNavigate } from 'react-router-dom';
import { imagetoBase64 } from '../Utility/ImagetoBase64';
const Signup = () => {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [showconfirmpassword, setShowconfirmpassword] = useState(false)
  const handleShowPassword = () => {
    setShowPassword(preve => !preve);
  };
  const handleShowConfirmPassword = () => {
    setShowconfirmpassword(preve => !preve);
  }
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    profilpic: ""
  });
  console.log(data);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUploadProfilePic = async (e) => {
    console.log(e.target.files[0]);
    const data = await imagetoBase64(e.target.files[0])
    console.log(data);

    setData((preve) => {
      return {
        ...preve,
        profilpic: data

      }
    })
  }
  console.log(process.env.REACT_APP_SERVER_DOMAIN);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstname, email, password, confirmpassword } = data;
    if (firstname && email && password && confirmpassword) {
      if (password === confirmpassword) {
        try {
          const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json" // Fixed typo: "content-type" to "Content-Type"
            },
            body: JSON.stringify(data)
          });

          const dataRes = await fetchData.json();
          console.log(dataRes);
          //alert(dataRes.message);
          toast(dataRes.message);
          // Redirect to the login page after successful signup
          // Example: navigate("/login");
        } catch (error) {
          console.error("Error during signup:", error);
          alert("Error during signup. Please try again later.");
        }
      } else {
        alert("Passwords do not match. Please check again.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };


  return (
    <div className='p-3 md:p-4 '>
      <div className='w-full max-w-md bg-white m-auto flex items-center flex-col p-4'>
        <h5 className='text-center font-bold '>Signup</h5>
        <div className='&nbsp relative w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md &nbsp' >
          <img src={data.profilpic ? data.profilpic : pic} className='w-full h-full' />
          <label htmlFor='profilpic'>
            <div className=' cursor-pointer absolute bottom-1 h-1/5 bg-slate-100 bg-opacity-50 w-full text-center'><p className='text-sm '>Upload</p></div>
            <input type='file' id='profilpic' accept='images' className='hidden cursor-pointer' onChange={handleUploadProfilePic} />
          </label>
        </div>



        <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit} >
          <lable htmlFor='firstname' className=''>First Name</lable>
          <input type='text' id='firstname' name='firstname' className='mt-1 w-full bg-slate-300 p-1 px-2 py-1 rounded focus-within:outline-blue-400 ' value={data.firstname} onChange={handleOnChange} ></input>

          <lable htmlFor='lastname' className=''>Last Name</lable>
          <input type='text' id='lastname' name='lastname' className='mt-1 w-full bg-slate-300 p-1 px-2 py-1 rounded  focus-within:outline-blue-400' value={data.lastname} onChange={handleOnChange} ></input>

          <lable htmlFor='email' >Email</lable>
          <input type='email' id='email' name='email' className='mt-1 w-full bg-slate-300 p-1 px-2 py-1 rounded  focus-within:outline-blue-400' value={data.email} onChange={handleOnChange}></input>

          <lable htmlFor="password" >Password</lable>
          <div className='flex px-2 py-1 bg-slate-300 rounded mt-1  focus-within:outline-blue-400'>
            <input type={showPassword ? 'text' : 'password'} id='password' name='password' className=' w-full bg-slate-300 p-1 border-none   focus-within:outline-blue-400' value={data.password} onChange={handleOnChange}></input>
            <span className='flex text-xl cursor-pointer mt-2' onClick={handleShowPassword}>{showPassword ? < BiShow /> : <BiHide />}</span>
          </div >

          <lable htmlFor="confirmpassword" >Confirm Password</lable>
          <div className='flex px-2 py-1 bg-slate-300 rounded mt-1  focus-within:outline-blue-400'>
            <input type={showconfirmpassword ? 'text' : 'password'} id='confirmpassword' name='confirmpassword' className=' w-full bg-slate-300 p-1 border-none   focus-within:outline-blue-400' value={data.confirmpassword} onChange={handleOnChange} ></input>
            <span className='flex text-xl cursor-pointer mt-2' onClick={handleShowConfirmPassword}>{showconfirmpassword ? < BiShow /> : <BiHide />}</span>
          </div >

          <button type='submit' className='w-full max-w-[150px] m-auto bg-blue-500 cursor-pointer hover:bg-red-300 text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Sign Up</button>
        </form >
        <p className='text-sm'>Registered Already?<Link className='text-blue-500' to={"/login"}>Login</Link></p>
      </div >
    </div >
  )
}

export default Signup
