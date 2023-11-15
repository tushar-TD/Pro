import React from 'react';
import logo from "../images/logo.jpg";
import { Link, Navigate } from 'react-router-dom';
import { BiSolidUser } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRedux } from '../redux/userSlice';
import toast from "react-hot-toast"
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch()
  console.log(userData.email);

  const handleShowMenu = () => {
    setShowMenu(prev => !prev);
  };
  const handleLogout = () => {
    dispatch(logoutRedux())
    setTimeout(() => {
      toast("Logout Successfully")
    }, 1000);

  }

  console.log(process.env.REACT_APP_ADMIN_EMAIL)
  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
      <div className='flex items-center h-full justify-between'>
        <Link to=""><div className='h-12'><img src={logo} alt="Logo" className='h-full' /></div></Link>

        <div className='flex items-center gap-4 md:gap-7 hidden md:flex'>
          <nav className='flex gap-4 md:gap-6 text-base md:text-lg'>
            <Link to="">Home</Link>
            <Link to="about">About</Link>
            <Link to="menu/65522a7c73e6a6d766a78349">Menu</Link>
            <Link to="contact">Contact</Link>
          </nav>
          <div className="text-2xl text-slate-600 relative">
            <BsFillCartFill />
            <div className='absolute text-white bg-white-500 h-4 text-xs text-center w-4 p-0'>0</div>
          </div>
          <div className='text-2xl w-12 h-12   text-slate-600 ' onClick={handleShowMenu}>
            <div className='border-2 border-solid rounded-full p-2 border-slate-400 cursor-pointer'>  {userData.profilepic ? <img src={userData.profilepic} alt="User" className='h-full w-full' /> : <BiSolidUser />}</div>
            {showMenu && (
              <div className='absolute right-0 bg-white py-2 px-2 drop-shadow-sm justify-center items-center min-w-[120px]'>
                {userData.profilepic ? <p className='cursor-pointer px-1' onClick={handleLogout}> Logout({userData.firstname})</p> : <Link to="login" className='whitespace-nowrap cursor-pointer'>Login</Link>}
                <br />
                {
                  userData.email === process.env.REACT_APP_ADMIN_EMAIL &&
                  <Link to="newproduct" className='whitespace-nowrap cursor-pointer'>New Product</Link>
                }
                {
                  // userData.image ? <p className='cursor-pointer text-white px-2 bg-violet-600 ' onClick={handleLogout}></p>
                }
                <nav className='text-base md:text-lg flex flex-col md:hidden'>
                  <Link to={""} className='px-2 py-1'>Home</Link>
                  <Link to={"about"} className='px-2 py-1'> About</Link>
                  <Link to={"menu/65522a7c73e6a6d766a78349"} className='px-2 py-1'>Menu</Link>
                  <Link to={"contact"} className='px-2 py-1'>Contact</Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header >
  );
}

export default Header;
