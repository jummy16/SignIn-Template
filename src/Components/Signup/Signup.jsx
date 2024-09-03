import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import PICTURE from '../../assets/Icons/Group 353.png';
import recaptcha from '../../assets/Icons/recaptcha.png';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    
    localStorage.setItem('signupData', JSON.stringify(formData));

    navigate('/Job'); 
  };

  return (
    <div className='section'>
      <h4 className='signup-header'>Create a free Jobbero Account</h4>
      <p className='job-seeker'>Job seeker</p>
      <div className='container'>
        <form id="signupForm" className='form' onSubmit={handleSubmit}>
          <div>
            <input className='input-field' type="text" id="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange}/>
          </div>

          <div>
            <input className='input-field' type="text" id="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange}/>
          </div>

          <div>
            <input className='input-field' type="email" id="email" placeholder="email address" required value={formData.email} onChange={handleChange}/>
          </div>

          <div>
            <input className='input-field' type="password" id="password" placeholder="password" required value={formData.password} onChange={handleChange}/>
          </div>

          <div>
            <input className='input-field' type="password" id="confirmPassword" placeholder="confirm password" required value={formData.confirmPassword} onChange={handleChange}/>
          </div>

          <div>
            <select className='input-field' id="role" value={formData.role} onChange={handleChange}>
              <option value="">Role</option>
              <option value="job_seeker">Job Seeker</option>
              <option value="employer">Employer</option>
            </select>
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button className='website-btn' type="submit">Sign Up</button>
        </form>
        <div>
          <img className='signup-img' src={PICTURE} alt=''/>
        </div>
      </div>
      <div className='ReCaptcha-box'>
        <input className='checkbox' type='checkbox' required/>
        <img className='ReCaptcha' src={recaptcha} alt=''/>
        <p className='ReCaptcha-terms'>Privacy-Terms</p>
      </div>
      <div className='second-section'>
        <h4 className='policy'>By signing up, you agree to our <a href='#'>Privacy Policy</a></h4>
        <h3 className='account'>Already have an account?</h3>
        <h3 className='sign-in'><a href='#'>Sign In</a></h3>
      </div>
    </div>
  );
};

export default Signup;


