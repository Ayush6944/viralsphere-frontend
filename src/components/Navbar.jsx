import React from 'react'

const Navbar = () => {
  return (
    <div>
         <div className='w-4/5 flex  m-auto mt-8 h-20 p-2 rounded-full bg-white'>
        <h1 className='font-serif text-2xl justify-start p-4 font-black'>ViralSphere</h1>

        <input type="search" className='border-black border rounded-2xl max-sm:hidden   p-2  items-center m-auto' placeholder='Search Friends' />
        <div className=' flex justify-end font-serif max-md:hidden ' style={{
          maxWidth: '1077px',
        }}>

    <div><button className=' border-black border  uppercase  m-3 p-2 px-4 rounded-2xl  text-slate-950 bg-green-300 hover:bg-green-600 hover:text-gray-50 ' onClick={()=>{window.location.href='/myprofile' }} >QR</button></div> 
    <div><button className='border-black border  uppercase lg:block m-3 p-2 rounded-2xl text-slate-950 bg-green-300 hover:bg-green-600 hover:text-gray-50' onClick={()=>{window.location.href='/signup' }} >signup</button></div>
    <div><button className='border-black border uppercase m-3 p-2 rounded-2xl text-slate-950 bg-green-300 hover:bg-green-600 hover:text-gray-50 sm:block' onClick={()=>{window.location.href='/login' }} >Login</button></div>
    <div><button className='border-black border uppercase m-3 p-2 rounded-2xl text-slate-950 bg-green-300 hover:bg-green-600 hover:text-gray-50' onClick={()=>{window.location.href='/allusers' }} >All Users</button></div>
    {/* import DehazeIcon from '@mui/icons-material/Dehaze */}
    
</div>
<button className='m-auto bg-gray-300 p-2 lg:hidden'>LOGIN</button>
{/* <button className='m-auto bg-gray-300 p-2 max-lg:hidden'>SIGNUP</button> */}
<div className='m-auto xl:hidden lg:hidden '> <DehazeIcon/> </div>

        </div>
    </div>
  )
}

export default Navbar