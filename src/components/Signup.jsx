// src/components/SignupForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { database } from '../firebaseconfiguration';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';

import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
// const  [login,setLogin] = React.useState(false)
const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profilePhoto: null,
    coverPhoto: null,
    gender: '',
    password: '',
    phone:'',
  });

  const handleGoogle = () => {
    signInWithPopup(database, new GoogleAuthProvider())
    .then((data)=>{
        console.log(data,"authdata")
        history('/home')}).catch(err=>{alert(err.message)})
}

  const history = useNavigate()
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(formData.password.length >= 6){
      createUserWithEmailAndPassword(database,formData.email,formData.password)
      
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('profilePhoto', formData.profilePhoto);
      formDataToSend.append('coverPhoto', formData.coverPhoto);
      formDataToSend.append('gender', formData.gender);

      const response = await axios.post('http://localhost:5000/signup', formDataToSend);
      console.log('User created:', response.data);
      // setLogin(true)
      alert('User created successfully')
      history('/home')}
      else{
        alert('Password should be at least 6 characters')
      }


      // Handle successful signup, e.g., redirect to login page
      // ...

      // Optionally, navigate to a different page or update UI
    } catch (error) {
      console.error(error);
    }
  };

  return (

    <div className='m-auto font-serif flex flex-col items-center justify-center  bg-white'>
<h1 className='mb-5 mt-5 text-3xl font-bold text-gray-700'>Signup Details</h1>

<button className='bg-blue-400 w-2/5 text-xl mt-2 p-1 items-center' onClick={handleGoogle} > <GoogleIcon/> | Login with Google</button>
    <form onSubmit={handleSubmit} className='flex flex-col w-2/5 p-2 shadow-xl mt-5 bg-gray-00 rounded-md'>
      <div className=' mb-4  flex flex-col items-center '>
<h2 className='mb-2 font-serif' >---OR---</h2>
{/* Name */}
      <label  className='mb-2 mt-2 text-gray-700'>Name</label>
      <input required className='border  w-full rounded-2xl h-10 mb-3 p-2 border-black' type="text" name="name"  onChange={handleChange} />
{/* email */}
      <label  className='mb-2 text-gray-700'>Email</label>
      <input required className=' w-full rounded-2xl h-10 mb-3 p-2 border border-black' type="emaail" name="email"  onChange={handleChange} />

{/* password */}
      <label  className='mb-2 text-gray-700'>Password</label>
      <input required type="password" className=' w-full rounded-2xl h-10 mb-3 p border border-black' name="password"  onChange={handleChange} />
{/* password */}
      <label  className='mb-2 text-gray-700'>Phone</label>
      <input required type="tel" className=' w-full rounded-2xl h-10 mb-3 p border border-black' name="phone"  onChange={handleChange} />
{/* photo */}
      <label  className='mb-2 text-gray-700'>Profile Photo</label>
      <input required type="file" className=' w-full  mb-3 p-2 rounded-2xl border border-black' name="profilePhoto" onChange={handleFileChange} />

      <label  className='mb-2 text-gray-700'>Cover Photo</label>
      <input required type="file" className='w-full  mb-3 p-2 rounded-2xl border border-black' name="coverPhoto" onChange={handleFileChange} />

      <label  className='mb-2 text-gray-700'>Gender.</label>
      <select required name="gender" className='w-1/2 h-8  rounded-2xl mb-5 border border-black' onChange={handleChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      
 

      
      <button type="submit" className=' m-auto border border-black p-3 px-4 rounded-xl bg-blue-500 text-white hover:bg-blue-200 hover:text-black'>Submit</button></div>
     <a href="/login"><h2  className='text-center mt-2 uppercase font-serif text-gray-700 hover:text-blue-800'>already have account go to <span className='text-blue-800 underline'>LogIn</span> </h2></a>
     </form>
   
    </div>
  );
};

export default SignupForm;
