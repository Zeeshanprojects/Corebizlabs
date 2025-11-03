import React from 'react'
import Images from '../assets/Images/Image'
import "./Preloader.css"
export default function Preloader() {
  return (
<>
<div className='preloader'>
<img src={Images.logo} alt='logo' className='preloader-logo'/>
</div>
</>
  )
}
