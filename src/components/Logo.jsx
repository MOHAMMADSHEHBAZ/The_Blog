import React from 'react'
import logo from '../assets/logo.png'
const Logo = ({width='100px',img=''}) => {
  return (
    <div>
      <img src ={logo} alt="" className='max-w-20' />
    </div>
  )
}

export default Logo
