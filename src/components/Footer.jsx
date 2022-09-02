import '../styles/Footer.css'
import React from 'react'
import SocialBar from './SocialBar'

function Footer () {
 
    return (
      <div className='footer-container'>
           <SocialBar id="social-links"/>
         <h4>&copy;Logan McCalley 2022</h4>
      </div>
    )
  
}

export default Footer