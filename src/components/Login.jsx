import  { useState } from 'react';
import logo from '../assets/images/Diva-Logo.png';
import images from '../assets/images/about.png';

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email or Phone:', emailOrPhone);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={logo} alt="Login Illustration" />
        <p className='form-left-p'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend nunc ut lacus hendrerit molestie.
        </p>
        <img src={images} className='users-img' alt="Login Illustration" />
        <p className='sub-txt'>Join over 20k customers and vendors bidding today</p>
      </div>
      <div className="login-form">
        <img src={logo} alt="Login Illustration" style={{width:'20%'}} />
        <p style={{color:'#BCBCBC', fontSize:'25px'}}>Log In</p>
        <form className='log-in' onSubmit={handleSubmit}>
          <div className="form-group w-100">
            <label htmlFor="emailOrPhone">Email or Phone Number</label>
            <input 
              type="text" 
              id="emailOrPhone" 
              name="emailOrPhone" 
              placeholder='Email or phone number' 
              value={emailOrPhone} 
              onChange={(e) => setEmailOrPhone(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group w-100">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder='Enter password' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <a href="/forgot-password   " className='forgot-pass'>Forgot password?</a>
          <button className='sign-btn' type="submit">Log In</button>
        </form>
        <div className="signUp">
            <p>Don’t have an account?</p>
            <a href="/signup">Sign up now</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
