import React from 'react';
import Effect from './Image/ImageEffect';
import { Navigate, useNavigate } from 'react-router-dom';

const Page = () => {
  const navigate= useNavigate();
  return (
    <div className="w-screen h-screen bg-cyan-300 text font-sans">
      <div className="flex justify-between items-center p-6">
        <div className="text-3xl font-bold">ViralSphere</div>
        <div className="space-x-6">
          <a href="/users" className="hover:underline">Qr Generator</a>
          <a href="/myprofile" className="hover:underline">My Profile</a>
          <a href="#" className="hover:underline">Find Freind</a>
          <a href="#" className="hover:underline">Pricing</a>
          <a href="/image" className="hover:underline">Image-Animation</a>
        </div>
        <div className="space-x-4">
          <button className="bg-gray-200 text-gray-800 hover:bg-gray-400 hover:text-white py-2 px-4 rounded-full"onClick={()=>{window.location.href='/login' }}>Log in</button>
          <button className="bg-black text-white hover:bg-gray-700 py-2 px-4 rounded-full" onClick={()=>{window.location.href='/signup' }}>Sign up free</button>
        </div>
      </div>
      
      <div className="flex text-blue-700 flex-col items-center mt-16 text-center px-4">
        <h1 className="text-5xl font-bold mb-6">Everything you are. In one, simple link in bio.</h1>
        <p className="text-2xl p-3 mb-6">Join 40M+ people using ViralSphere for their link in bio. 
        One link to help you share everything you create, curate and sell from your Instagram, 
        TikTok, Twitter, YouTube, and other social media profiles.</p>
        <div className="flex space-x-2 mb-12">
          <input type="text" className="p-3 rounded-l-full border-none w-64 text-gray-800" placeholder="Search New Freinds.." />
          <button className="bg-purple-500 text-white py-3 px-6 rounded-r-full">Find</button>
        </div>
      </div>
      
      {/* <div className="flex justify-center mt-16">
        <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
          <img className="rounded-full w-24 h-24 mr-6" src="https://imgs.search.brave.com/ddOc8KbzsJzDFFx2L-mHihXTUpjjfbEoAUWRBv5rWKw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtZ2xvYmFsLndl/YnNpdGUtZmlsZXMu/Y29tLzYzODk0ZjBl/MjUxZTU2MjhhNDQ0/M2JjZC82NTdjZWYw/MDYyNzZlYThiZDFk/ZDdjMWZfT25seSUy/MCYlMjBTb25zLndl/YnA" alt="Nikole Brake" />
          <div>
            <h2 className="text-2xl font-bold">Nikole Brake</h2>
            <p className="text-gray-600">Founder of Shape Shifters</p>
            <div className="mt-4 space-y-2">
              <button className="bg-yellow-500 text-white py-2 px-4 rounded-full w-full">Slow flow</button>
              <button className="bg-yellow-500 text-white py-2 px-4 rounded-full w-full">Online courses</button>
              <button className="bg-yellow-500 text-white py-2 px-4 rounded-full w-full">Wellness retreats</button>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">Pinterest</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Shop</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Instagram</a>
            </div>
          </div>
        </div>
      </div> */}
<div className='flex  bg-cyan-300 mt-4'>
  <img className='h-1/4 -mt-12 w-2/5' src="https://linktr.ee/_gatsby/image/03335fe1f336ba337ca299a3e271936f/cc54043b2117b5409a6c02f20301929d/Linktree-various-content.png?u=https%3A%2F%2Fapi.blog.production.linktr.ee%2Fwp-content%2Fuploads%2F2022%2F06%2FLinktree-various-content.png&a=w%3D1280%26h%3D1347%26fm%3Dpng%26q%3D75&cd=49c0468356df05b1454cce4c9b99fa62" alt="loading" />
  <div>
  <h1 className='text-4xl font-bold mt-12'>Share limitless content in limitless ways</h1>
<h3 className='text-xl mt-4'>Connect your content in all its forms and help followers find more of what they’re looking for. Your TikToks, Tweets, YouTube videos, music, articles, recipes, podcasts and more… It all comes together in one powerful place</h3>
  <button onClick={() => navigate('/signup') } className='rounded-full font-serif text-3xl bg-gray-200 hover:bg-gray-400 p-4 mt-12'>Get Started</button>
  </div>
</div>
<div className='item-center justify-center'>
  <h2 className='text-3xl font-bold mt-12 justify-center uppercase'>this is a prototype website , dont share sensitive information</h2>
</div>
  

    </div>
  );
};

export default Page;
