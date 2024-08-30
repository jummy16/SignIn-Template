import React from 'react'
import './job.css'

const Job = () => {
  return (
    <div className='job-container'>
        <div className='job-btn'>
            <button className='alert'><a href='#'>Job Alerts</a></button>
            <button className='saved'><a href='#'>Saved Jobs</a></button>
        </div>
        <div className='job-section'>
            <p className='first-para'>You have not create a job alert.</p>
            <p className='first-para'>Create a job alert today to receive<br/>daily job notification. </p>
            <p className='first-para'>Be first in line for the latest jobs that<br/> match your profile.</p>
            <button className='alert'><a href='#'>Create Job Alert</a></button>
        </div>
        
    </div>
  )
}

export default Job