import React from 'react'
import './signup.css'
import PICTURE from '../../assets/Icons/Group 353.png'
import recaptcha from '../../assets/Icons/recaptcha.png'

const Signup = () => {
  return (
    <div className='section'>
        <h4 className='signup-header'>Create a free Jobbero Account</h4>
        <p className='job-seeker'>Job seeker</p>
        <div className='container'>
         <form action="" id="signupForm" className='form'>
            <div >
                <input className='input-field' type="text" id="inputFirstName" placeholder="First name" ></input>
            </div>
            <div>
                <input className='input-field'  type="text" id="inputLastName" placeholder="Last name"></input>
            </div>

            <div>
                <input className='input-field'  type="email" id="inputEmail" placeholder="email address" required></input>
            </div>

            <div>
                <input className='input-field'  type="password" id="inputPassword" placeholder="password" required></input>
            </div>

            <div>
                <input className='input-field'  type="password" id="inputPassword" placeholder="confirm password" required></input>
            </div>

            <div>
                <select className='input-field' >
                    <option>Role</option>
                </select>
             </div>
            <div className='ReCaptcha-box'>
                    <input className='checkbox' type='checkbox'></input>
                    <img className='ReCaptcha'  src={recaptcha} alt=''/>
                    <p className='ReCaptcha-terms'>Privacy-Terms</p>
            </div>
        </form>
        <div>
            <img className='signup-img' src={PICTURE} alt=''/>
        </div>
    </div>
    <div className='second-section'>
        <h4 className='policy'>By signing up, you agree to our <a href='#'>Privacy Policy</a></h4>
        <button className='website-btn'><a href='#'>Sign Up</a></button>
        <h3 className='account'>Already have an account?</h3>
        <h3 className='sign-in'><a href='#'>Sign In</a></h3>
    </div>
</div>
  )
}

export default Signup