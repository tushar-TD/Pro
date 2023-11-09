import React from 'react'
import logo from "../images/logo.jpg"
import { Link } from 'react-router-dom'
import { BiSolidUser } from "react-icons/bi"
import { BsFillCartFill } from "react-icons/bs"
import { useState } from 'react'
import Login from '../Pages/Login'
function Header() {

  const [showMenu, setShowMenu] = useState(false)
  const handleShowMenu = () => {
    setShowMenu(preve => !preve)
  }


  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
      <div className='flex items-center h-full justify-between'>
        <Link to={""} ><div className='h-12'><img src={logo} className=' h-full' /></div></Link>
        <div className='flex items-center gap-4 md:gap-7'>
          <nav className='flex gap-4 md:gap-6 text-base md:text-lg'>
            <Link to={""}>Home</Link>
            <Link to={"about"}>About</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className='text-2xl top-0 right-0 relative text-slate-400'><BsFillCartFill /><div className='absolute text-white bg-white-500 h-4 text-xs text-center w-4 p-0'>0</div></div>
          <div className='text-2xl text-slate-600' onClick={handleShowMenu}><div className='border-2 border-solid rounded-full p-2 border-slate-400 cursor-pointer' ><BiSolidUser /></div>
            {
              showMenu && <div className='absolute right-0 bg-white py-2 px-2 drop-shadow-sm'><Link to={"newproduct"} className='whitespace-nowrap cursor-pointer'>New Product</Link><br></br><Link to={"login"} className='whitespace-nowrap cursor-pointer' > Login</Link></div>
            }
          </div>
        </div>

      </div>

    </header >
  )
}

export default Header
