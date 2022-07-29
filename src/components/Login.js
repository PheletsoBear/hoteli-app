import React from 'react'
import loginBanner from '../components/images/loginBanner.png'
import alt from '../components/images/alt.jpg'
import '../components/Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle,faFacebook } from '@fortawesome/free-brands-svg-icons'

import {faAddressCard, faLock} from '@fortawesome/free-solid-svg-icons'

import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'


function Login() {
  let History = useHistory();
  const Login =()=>{
       History.push("/Home")
  };

  return (
    <div className='container'>
        <div className='side-color-background'></div>
        <div className='form-container'>
               
        <div className='form'>
       
       
              <img id='banner' src={loginBanner} alt='banner'/>
               <h1 id='welcome-header'>Welcome back!</h1>
               <p id='opening-paragraph'>login to your existing account </p>
               <div className='input'>
                 <input type='Email' placeholder='Enter your Email' id='username'/><FontAwesomeIcon icon={faAddressCard} className='solid-icons'></FontAwesomeIcon><br/>
                 <input type='password' placeholder='Enter your Password' id='password'/><FontAwesomeIcon icon={faLock} className='solid-icons'></FontAwesomeIcon><br/>
                 <Link className='link' to="/ForgotPassword"><span id='forgot-password'>forgot password?</span><br/></Link>
                 <button type='submit' id='login' onClick={Login} >LOG IN</button><br/>
                 <span id='socials'>or login using </span><br/>
                 <button type='submit' id='facebook'><FontAwesomeIcon icon={faFacebook} className='socials'></FontAwesomeIcon>  facebook</button>
                 <button type='submit' id='google'> <FontAwesomeIcon icon={faGoogle}  className='socials'></FontAwesomeIcon> Google+</button>
                 <br/>
                 <span id='do-not-have-account'>Don't have account?</span>
                 <Link className='link' to="/SignUp"><span id='sign-up'>Sign Up</span></Link>
                </div>
        </div>
        <div id='form-right-banner'>
          <img id='logo'src={alt} alt='logo'/>
        </div>
        </div>
            
    </div>
  )
}

export default Login
