import React from 'react'
import './landing.css'
import PICTURE from '../../assets/Icons/happyJobbero.png'

const Landing = () => {
  return (
    <>
      <div className='header'>

        <h1 className='text h1-tag'>Job Search Simplified</h1>
        <h5 className='text h5-tag'>One Platform, Countless Opportunities, Guaranteed</h5>
        <input className='search-bar' type="text" />

        <h6 className='text h6-tag'>Centralized for your success! Apply confidently on our platform
          and experience a revolutionary approach to job hunting, ensuring
          your career advancement.</h6>

        <img className='jobbero-picture' src={PICTURE} alt="" />

      </div>
    </>
  )
}

export default Landing