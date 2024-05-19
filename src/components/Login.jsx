import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { database } from '../firebaseconfiguration'
import Google from '@mui/icons-material/Google'



const Login = () => {

    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')
    const history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email,'done3333')
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };

     const handlePassChange = (event) => {
         setPassword(event.target.value);
     }
    const handleLogin = () => {
    try {
        signInWithEmailAndPassword(database, email, password)
        .then((data)=>{
            console.log(data,"authdata")
            history('/home')}).catch(err=>{alert(err.message)})
    } catch (error) {
        alert("Invalid Credentials")
    }
}
    const handleGoogle = () => {
        signInWithPopup(database, new GoogleAuthProvider())
        .then((data)=>{
            console.log(data,"authdata")
            history('/home')}).catch(err=>{alert(err.message)})
    }

  return (
    <div>
        <div className='m-auto flex flex-col items-center justify-center h-screen bg-gray-100'>
<h1 className='mb-9 text-3xl font-bold text-gray-700'>Login Details</h1>

    <form onSubmit={handleSubmit} className='flex flex-col w-1/4 shadow-md p-2 border-2 bg-slate-100 border-gray-700 rounded-md'>
      <div className=' mb-4 min-w-full flex flex-col items-start '>
{/* email */}
      <label  className='mb-2 text-gray-700'>Email</label>
      <input className=' w-full rounded-2xl h-8 mb-3 p-2 border-2 border-black' type="email" name="email" value={email} onChange={handleEmailChange} />

{/* password */}
      <label  className='mb-2 text-gray-700'>Password</label>
      <input type="password" className=' w-full rounded-2xl h-8 mb-3 p-2 border-2 border-black' name="password" value={password} onChange={handlePassChange} />
<button type="submit" className=' m-auto border-2 border-black p-3 px-4 rounded-full bg-blue-500 text-white hover:bg-gray-600' onClick={handleLogin}>Login</button></div>
<button className='bg-blue-400  text-xl mt-2 p-1 items-center' onClick={handleGoogle} > <Google/> | Login with Google</button>

    <a href="/signup"><h2 className='text-center mt-2 text-gray-700 hover:text-blue-800'>Create New Account </h2></a>
    </form>
    </div>
    </div>
  )
}

export default Login;