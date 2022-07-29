import React from 'react'
import { Link } from 'react-router-dom'

const Navbar =()=> {
  return (
    <>
     <nav className='navbar'>
         <div classNAme='container flex_space'>
             <div className='meni-icon'>

                     <i className=' fas fa-times'></i>
              </div>
                       <div className='bav-menu active'>
                             <li>
                                <Link to='/'>Home</Link>
                                <Link to='/'>About</Link>
                                <Link to='/'>Gallery</Link>
                                <Link to='/'>Destination</Link>
                                <Link to='/'>Blog</Link>
                                <Link to='/'>Testimonial</Link>
                                <Link to='/'>Contact Us</Link>
                             </li>
                       </div>
          </div>
     </nav>
   </>
  )
}

export default Navbar
