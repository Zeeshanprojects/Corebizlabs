import React from 'react'
import Images from '../assets/Images/Image'
import "./About.css"

export default function About() {
  return (
<>
<div className='col-12'>
  <div className='background'>
    <img src={Images.background} className="banner-image" />
    <div className='overlay-text'>
      <div className='circular-border'>
         <h1 className='text-white'>About US</h1>
      </div>
     
    </div>
  </div>
</div>

</>
  )
}
