import { useState } from 'react';
import logo from '../assets/images/Diva-Logo.png';
import images from '../assets/images/about.png';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      phone_number: phone,
      email,
      password,
      first_name: firstName,
      last_name: lastName,
      user_type: 'ac53fb34-f0a8-405b-b332-b379407e73ed', // Default user type
    };

    try {
      const response = await fetch('https://api.gavelgh.com/general/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Sign up successful:', data);

        // Store JWT token in localStorage
        localStorage.setItem('jwtToken', data.token);

        // Redirect to account verification page or any other page
        window.location.href = '/account-verify'; // Hardcoded redirection
      } else {
        const errorMessage = await response.text();
        console.error('Sign up failed:', response.status, errorMessage);
      }
    } catch (error) {
      console.error('Sign up error:', error.message);
    }
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
        <img src={logo} alt="Login Illustration" style={{ width: '20%' }} />
        <p style={{ color: '#BCBCBC', fontSize: '25px' }}>Sign Up</p>
        <form className='log-in' onSubmit={handleSubmit}>
          <div className="form-group w-100">
            <label htmlFor="fname">First Name</label>
            <input 
              type="text" 
              id="fname" 
              name="fname" 
              placeholder='First Name' 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group w-100">
            <label htmlFor="lname">Last Name</label>
            <input 
              type="text" 
              id="lname" 
              name="lname" 
              placeholder='Last Name' 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group w-100">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder='Enter your email' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group w-100">
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              placeholder='Enter your phone number' 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
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
          <button type="submit" className='sign-btn'>Sign Up</button>
        </form>
        <hr style={{ marginTop: '20px' }} />
        <div className="signUp" style={{ justifyContent: 'center' }}>
          <p>Already have an account?</p>
          <a href="/login">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
