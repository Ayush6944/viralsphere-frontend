import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignupForm from './components/Signup';
import UserProfile from './components/UserProfile';
import Page from './components/Home';
import Login from './components/Login';
import Effect from './components/Image/ImageEffect';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="*" element={<h1>not found sorry for you !</h1>} />
        <Route exact path="/home" element={<Page/>} />
        <Route exact path="/" element={<Page/>} />
        <Route exact path="/signup" element={<SignupForm/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/users" element={<UserProfile/>} />
        <Route exact path="/users/:phone" element={<UserProfile/>} />
        <Route exact path="/myprofile" element={<UserProfile/>} /> 
        {/* <Route exact path="/allusers" element={<UserProfile/>} />  */}
        <Route exact path="/image" element={<Effect/>} /> 
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default App;
