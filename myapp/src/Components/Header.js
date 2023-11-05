import React from 'react'
import logo from "../images/logo.jpg"
import { Link } from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa"
import { BsFillCartFill } from "react-icons/bs"
function Header() {
  return (
    <header className='fixed shadow-md w-full h-17 px-2 md-px-4' >
      <div className='flex items-center h-full justify-between'>
        <Link to={""}>
          <div className='h-16'>
            <img src={logo} className='h-full' />
          </div>
        </Link>

        <div className='flex items-center gap-5 md:gap-7'>
          <nav className='flex gap-4 md:gap-7 text-base md:text-lg'>
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link></nav>
          <div className='text-2xl bg-text-600'><BsFillCartFill /></div>
          <div className='text-2xl bg-text-600'><FaUserAlt /></div>
        </div>



      </div >

    </header >
  )
}

export default Header
