import React from 'react'
import loginBanner from '../components/images/loginBanner.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAddressCard} from '@fortawesome/free-solid-svg-icons'
import alt from '../components/images/alt.jpg'
import '../components/ForgotPassword.css'
import {Link} from 'react-router-dom'
function ForgotPassword() {
  
  return (
    <div className='container'>
      <div className='side-color-background'></div>
       <div className='form-container'>
        <div className='form'>
        <img id='banner' src={loginBanner} alt='banner'/>
        <h1 id='welcome-header'>Welcome!</h1>
        <p id='opening-paragraph' > Reset Your Password so you can Login </p>
        <div className='input'>
        <input type='Email' placeholder='Enter your Email' id='username'/><FontAwesomeIcon icon={faAddressCard} className='solid-icons'></FontAwesomeIcon><br/>
       <Link to="/" className='link'><button type='submit' id='signUp'  >SUBMIT</button></Link><br/>
      </div>
      <div id='right-banner'>
                           <img id='logo'src={alt} alt='logo'/>
                          </div>
        </div>

       </div>


    </div>
  )
}

export default ForgotPassword
