import React from 'react'
import { useState } from 'react'
import logo from '../images/logo.jpg';
import { BiShow, BiSolidHide } from "react-icons/bi"

import { Link } from 'react-router-dom';
function Login() {
  const [showPassword, setshowPassword] = useState(false)

  const [data, setData] = useState({
    email: "",
    password: "",
  })
  console.log(data)

  const handleshowPassword = () => {
    setshowPassword(preve => !preve)
  }


  const handleOnchange = (e) => {
    const { name, value } = e.target
    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }
  //not to get page refresh
  const handleSubmit = (e) => {
    e.preventDefault();
    //to all proper fields
    const { email, password } = data
    if (email && password) {
      if (password) {
        alert("successful")
      }
      else {
        alert("Recheck Password");
      }
    }
    else {
      alert("Please Enter fields")
    }
  }
  return (
    <div className='p-3 md:p-4'>
      <div className='w-full max-w-sm p-2 bg-white m-auto flex-col flex items-center'>

        <div className='w-20 overflow-hidden rounded-full drop-shadow-md'>
          <img src={logo} className='w-full' />
        </div>
        <form className='w-full py-3 flex flex-col ' onSubmit={handleSubmit}>


          <label htmlFor='email '>Email</label>
          <input type='email' id='email' name='email' className='mt-1 mb-2 w-full rounded bg-slate-200 px-2 py-1 focus-within:outline-violet-700' value={data.email} onChange={handleOnchange} />

          <label htmlFor='password' >Password</label>
          <div className='flex w-full mt-1 mb-2'>
            <input
              type={showPassword ? "text" : "password"}
              id='password'
              name='password'
              className='px-2 py-1 w-full border-none mt-1 mb-2 bg-slate-200 rounded focus-within:outline-violet-700'
              value={data.password} onChange={handleOnchange}

            />
            <span className='cursor-pointer flex items-center text-xl' onClick={handleshowPassword}>
              {showPassword ? <BiShow /> : <BiSolidHide />}
            </span>
          </div>



          <button type='submit' className='max-w-[150px] rounded-full w-full m-auto text-white cursor-pointer  hover:bg-violet-500 bg-violet-700'>Login</button>
        </form>
        <p className='text-sm '>Not Registered Yet ? <Link to={"/signup"} className='underline text-violet-700'>Signup</Link></p>
      </div >
    </div >
  )
}

export default Login
