import React, { useState } from 'react';
import logo from '../images/logo.jpg';
import { BiShow, BiSolidHide } from "react-icons/bi"
import Login from './Login';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ImagetoBase64 } from '../utility/ImagetoBase64';
const Signup = () => {

  const navigate = useNavigate();
  const [showPassword, setshowPassword] = useState(false)
  const [confirmshowPassword, setconfirmshowPassword] = useState(false)
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    profilepic: "",
  })
  console.log(data)
  const handleshowPassword = () => {
    setshowPassword(preve => !preve)
  }

  const handleconfirmshowPassword = () => {
    setconfirmshowPassword(preve => !preve)
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
    const { firstname, email, password, confirmpassword } = data
    if (firstname && email && password && confirmpassword) {
      if (password == confirmpassword) {
        alert("successful")
        navigate("/login");
      }
      else {
        alert("Recheck Password");
      }
    }
    else {
      alert("Please Enter fields")
    }
  }


  const handleUploadProfilepic = async (e) => {

    const data = await ImagetoBase64(e.target.files[0])
    console.log(data)
    setData((preve) => {
      return {
        ...preve,
        profilepic: data
      }
    })
  }

  return (
    <div className='p-3 md:p-4'>
      <div className='w-full max-w-sm p-2 bg-white m-auto flex-col flex items-center'>

        <div className='w-20 overflow-hidden relative rounded-full drop-shadow-md cursor-pointer'>
          <img src={data.profilepic ? data.profilepic : logo} className='w-full' />

          <label htmlFor='profilepic'>
            <div className='absolute bottom-0 h-1/2 cursor-pointer text-center w-full'><p className='text-sm p-1 text-blue-800'>upload</p></div>
            <input type={"file"} id="profilepic" className='hidden' accept='image/*' onChange={handleUploadProfilepic} />
          </label>
        </div>
        <form className='w-full py-3 flex flex-col ' onSubmit={handleSubmit}>
          <label htmlFor='firstname '>First Name</label>
          <input type='text' id='firstname' name='firstname' className='mt-1 mb-2 w-full rounded bg-slate-200 px-2 py-1 focus-within:outline-violet-700  ' value={data.firstname} onChange={handleOnchange} />

          <label htmlFor='lastname '>Last Name</label>
          <input type='text' id='lastname' name='lastname' className='mt-1 mb-2 w-full rounded bg-slate-200 px-2 py-1 focus-within:outline-violet-700 ' value={data.lastname} onChange={handleOnchange} />

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


          <label htmlFor='confirmpassword' >
            Confirm Password
          </label>
          <div className='flex w-full mt-1 mb-2'>
            <input
              type={confirmshowPassword ? "text" : "password"}
              id='confirmpassword'
              name='confirmpassword'
              className='px-2 py-1 w-full border-none mt-1 mb-2 bg-slate-200 rounded focus-within:outline-violet-700'
              value={data.confirmpassword} onChange={handleOnchange}

            />
            <span className='cursor-pointer flex items-center text-xl' onClick={handleconfirmshowPassword}>
              {confirmshowPassword ? <BiShow /> : <BiSolidHide />}
            </span>
          </div>
          <button type='submit' className='max-w-[150px] rounded-full w-full m-auto text-white cursor-pointer  hover:bg-violet-500 bg-violet-700'>Sign Up</button>
        </form>
        <p className='text-sm '>Already Registered ? <Link to={"/login"} className='underline text-violet-700'>Login</Link></p>
      </div >
    </div >
  );
};

export default Signup;
