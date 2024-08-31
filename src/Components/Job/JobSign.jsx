import React from 'react'
import './job.css'
import Button from '../Utilities/Button'

const JobSign = () => {
  return (
    <div className='jobsign-container'>
        <h4>Create Job Alerts</h4>
        <form>
            <div className='jobsign'>
                <label className='label'>Job Title</label><br/>
                <input className='jobsign-input' type="text" id="inputFirstName" placeholder="E.g Admin & Office" ></input>
            </div>
            <div className='jobsign'>
                <label className='label'>Job Industry</label><br/>
                <select className='jobsign-option'>
                    <option>Select Job Industry</option>
                    <option>Entertainment</option>
                    <option>Technology</option>
                    <option>Music</option>
                </select>
             </div>
             <div className='jobsign'>
                <label className='label'>Location</label><br/>
                <select className='jobsign-option'>
                    <option>Select Location</option>
                    <option>Nigeria</option>
                    <option>England</option>
                    <option>Germany</option>
                </select>
             </div>
             <div className='jobsign'>
                <label className='label'>Experience</label><br/>
                <select className='jobsign-option'>
                    <option>Select Experience</option>
                    <option>2+</option>
                    <option>5+</option>
                    <option>No Experience</option>
                </select>
             </div>
             <div>
                <label className='label'>Work Type</label><br/>
                <select className='jobsign-option'>
                    <option>Select Work Type</option>
                    <option>Front Desk Agent</option>
                    <option>Markerter</option>
                    <option>Sales Rep</option>
                </select>
             </div>
             <Button buttonText={'Save'} src={'/Data'}/>
        </form>
    </div>
  )
}

export default JobSign