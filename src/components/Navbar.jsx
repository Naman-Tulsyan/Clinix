import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

const Navbar = () => {
  return(
    <div className="sticky top-0 flex justify-between items-center bg-white">
        <Link to = "/" ><img src={logo} alt="img" width={'150px'} /></Link>
        <ul className="flex space-x-7">
            <li className="font-semibold text-xl hover:underline hover:cursor-pointer"><Link to = "/" >Home</Link></li>
            <li className="font-semibold text-xl hover:underline hover:cursor-pointer"><Link to = "/slot-book" >Book your Slot</Link></li>
            <li className="font-semibold text-xl hover:underline hover:cursor-pointer"><Link to = "/contact" >Contact Us</Link></li>
        </ul>
        <div className="space-x-1">
            <Link to = "/log-in" ><button className="px-4 py-2 font-bold rounded-2xl border-solid border-2 border-blue-600 hover:cursor-pointer hover:underline">Log In</button></Link>
            <Link to = "/register" ><button className="px-4 py-2 bg-blue-600 text-white font-bold rounded-xl hover:cursor-pointer hover:underline">Register</button></Link>
        </div>
    </div>
  )
};

export default Navbar;

