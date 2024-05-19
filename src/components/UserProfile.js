import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QRCodeGenerator from './QRcodeGenerator';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('1234');
  const navigate = useNavigate();

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  useEffect(() => {
    if (phoneNumber) {
      axios.get(`https://viralapp-2.onrender.com/users/${phoneNumber}`)
        .then(response => setUser(response.data))
        .catch(error => console.error(error));
    }
  }, [phoneNumber]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      navigate(`/users/${phoneNumber}`);
      console.log('User found:', user);
    } else {
      console.log('User not found with phone number:', phoneNumber);
    }
  };

  return (
    <div className=' items-center justify-center'>
<div className=' flex items-center justify-center'>
<button className= " mt-8 bg-blue-400  hover:bg-gray-400 hover:text-white py-2 px-4 rounded-full"onClick={()=>{window.location.href='/home' }}>Home</button>
     </div>   
      <div className='h-20 items-center justify-center m-3 p-1'>
        <form onSubmit={handleSubmit} className='rounded-2xl border-2 border-black'>
          <label className='p-3  m-auto'>Confirm Your Mobile no.:</label>
          <input
            className='w-3/4 h-20'
            type="tel"
            placeholder='Enter your no.'
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
          />
          {/* <button type='submit'>Submit</button> */}
        </form>
      </div>

      {user ? (
        <div className=' h-20 items-center justify-center m-3 p-3 '>
        <div className='flex flex-col gap-8 text-2xl items-center justify-center'>
          <h1>User Name: {user.name}</h1>
          <p>User Phone: {user.phone}</p></div>
          <div className='flex items-center justify-center m-3 p-3'>
          <div className= 'border border-black rounded-xl items-center justify-center m-3 p-3'>
            
            <QRCodeGenerator 
            size={200}
            value={JSON.stringify(user)} />
          </div>

        </div>
        <h3 className='text-center'> You can try : 123, 0000, 99999, 6659659 already saved in database</h3>
        </div>
      ) : (
        <div>Please Enter Correct no / User NOT found ... </div>
      )}
    </div>
  );
};

export default UserProfile;
