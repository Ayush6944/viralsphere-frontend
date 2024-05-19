// src/components/Auth.js
import React, { useState } from 'react';
import { auth, googleProvider } from '../firebaseConfig';
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => console.log(userCredential))
      .catch(error => console.error(error));
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => console.log(userCredential))
      .catch(error => console.error(error));
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => console.log(result))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={signUp}>Sign Up</button>
      <button onClick={signIn}>Sign In</button>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
};

export default Auth;
