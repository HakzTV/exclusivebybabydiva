import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import images from '../assets/images/about.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; 
// import AuthDetails from './AuthDetails';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Clear previous error
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/'); // Redirect to home page
      })
      .catch((error) => {
        console.log(error);
        setError('Invalid email or password. Please try again.');
      });
  };

  return (
    <div className="login-container">
      {/* <AuthDetails /> */}
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
            <label htmlFor="email">Email or Phone Number</label>
            <input 
              type="text" 
              id="email" 
              name="email" 
              placeholder='Email or phone number' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
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
          {error && <p style={{color: 'red'}}>{error}</p>}
          <a href="/forgot-password" className='forgot-pass'>Forgot password?</a>
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
