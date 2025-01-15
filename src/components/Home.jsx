import React from 'react'
import background from '../assets/background.png'
import doctor from '../assets/doctor.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <div className='relative mt-10'>
            <img src={background} alt="" className='absolute top-0 left-0 h-[700px]'/>
            <img src={doctor} alt="" className='absolute top-[200px] left-10 h-[500px]'/>
            <div className='absolute top-[300px] right-2 flex flex-col gap-3 items-center'>
                <Link to= "/slot-book"><h1 className='text-5xl font-semibold'>Book Your Appointment</h1></Link>
                <Link to= "/register"><button className="px-4 py-2 bg-blue-600 text-white text-2xl font-bold rounded-xl mt-6 hover:cursor-pointer hover:underline" >Get Started</button></Link>
                <p> Already a user? <Link to= "/log-in" className='text-blue-800 underline hover:cursor-pointer'>log In</Link></p>
            </div>
        </div>
    </>
  )
}
 
export default Home
