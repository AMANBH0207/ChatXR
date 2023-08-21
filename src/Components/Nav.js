import React from 'react'
import {Link} from 'react-router-dom';
import SignIn from '../Img/SignIn.png';
import '../Styles/Nav.css';
import ChatXR from '../Img/ChatXR.png';


function Nav() {
  return (<>
    <div className='Nav'>
        <div className='AppNm'><Link to='/'><img className='Imag' src={ChatXR} alt=''/></Link>
        <Link to='/SignInPage'><img  className='imgNav' src={SignIn}alt=''/></Link>
        </div>
        
    </div>
   
    </>
  )
}

export default Nav
