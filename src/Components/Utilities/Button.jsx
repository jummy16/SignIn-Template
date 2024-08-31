import React from 'react'
import { Link } from 'react-router-dom'


const Button = ({buttonText,src, handleClick}) => {
  return (
    <div>
        <button onClick={()=> handleClick()} className='alert'><Link to={src}>{buttonText}</Link></button>
    </div>
  )
}

export default Button