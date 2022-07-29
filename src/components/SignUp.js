import React from 'react'
import loginBanner from '../components/images/loginBanner.png'
import alt from '../components/images/alt.jpg'
import '../components/SignUp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle,faFacebook } from '@fortawesome/free-brands-svg-icons'

import {faAddressCard, faLock, faMailForward} from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'

function SignUp() {
  let history = useHistory();
  const Regidter =() => {
        history.push("/Home");
  };

  return (
   
   <div className='container'>

         <div className='side-color-background'></div>
                <div className='form-cotainer'>
                     <div className='form'>
                          <img id='banner' src={loginBanner} alt='banner'/>
                          <h1 id='welcome-header'>Welcome!</h1>
                          <p id='opening-paragraph'>Create to your new account </p>
                          <div className='input'>
                          <input type='Email' placeholder='Enter your Email' id='username'/><FontAwesomeIcon icon={faAddressCard} className='solid-icons'></FontAwesomeIcon><br/>
                           <input type='password' placeholder='Enter your Password' id='password'/><FontAwesomeIcon icon={faLock} className='solid-icons'></FontAwesomeIcon><br/>
                          <input type='password' placeholder='Confirm your Password' id='password'/><FontAwesomeIcon icon={faLock} className='solid-icons'></FontAwesomeIcon><br/>
                          <button type='submit' id='signUp'>SIGN UP</button><br/>
                          <span className='socials'>or create account using </span><br/>
                          <button type='submit' id='facebook1'><FontAwesomeIcon icon={faFacebook} className='socials'></FontAwesomeIcon>  facebook</button>
                          <button type='submit' id='google1'> <FontAwesomeIcon icon={faGoogle}  className='socials'></FontAwesomeIcon> Google+</button>
                          <br/>
                          </div>
                          <div className='form-right-banner'>
                           <img id='logo'src={alt} alt='logo'/>
                          </div>
                     </div>
            
        </div>
        
    </div>
  
  )
}

export default SignUp;
