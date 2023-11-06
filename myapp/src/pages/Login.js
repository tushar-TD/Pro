import React from 'react'
import pic from "../images/tush.jpg";
import { BiHide, BiShow } from "react-icons/bi";
import { useState } from 'react';
import { Link } from 'react-router-dom';



const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(preve => !preve);
  };

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  console.log(data);

  const handleOnchange = (e) => {
    const { name, value } = e.target
    setData((preve) => {
      return {
        ...preve,
        [name]: value

      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = data
    if (email && password) {
      if (password) {
        alert("Done!")
      }
    }
    else {
      alert("Please enter data");
    }
  }

  return (
    <div className='p-3 md:p-4 '>
      <div className='w-full max-w-md bg-white m-auto flex items-center flex-col p-4'>
        <h5 className='text-center font-bold'>Login</h5> <br />
        <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md' >
          <img src={pic} className='w-full' />
        </div>
        <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit} >


          <lable htmlFor='email' >Email</lable>
          <input type='email' id='email' name='email' className='mt-1 w-full bg-slate-300 p-1 px-2 py-1 rounded  focus-within:outline-blue-400' value={data.email} onChange={handleOnchange}></input>

          <lable htmlFor="password" >Password</lable>
          <div className='flex px-2 py-1 bg-slate-300 rounded mt-1  focus-within:outline-blue-400'>
            <input type={showPassword ? 'text' : 'password'} id='password' name='password' className=' w-full bg-slate-300 p-1 border-none   focus-within:outline-blue-400' value={data.password} onChange={handleOnchange}></input>
            <span className='flex text-xl cursor-pointer mt-2' onClick={handleShowPassword}>{showPassword ? < BiShow /> : <BiHide />}</span>
          </div >


          <button type='submit' className='w-full max-w-[150px] m-auto bg-blue-500 cursor-pointer hover:bg-red-300 text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Login</button>
        </form >
        <p className='text-sm'>Don't have Account <Link className='text-blue-500 &nbsp underline' to={"/signup"}>Signup</Link></p>
      </div >
    </div >
  )
}

export default Login
