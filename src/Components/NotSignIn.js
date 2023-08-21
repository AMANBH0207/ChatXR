import React from 'react';
import '../Styles/NotSignIn.css';
import ChatXR from '../Img/ChatXR.png';

function NotSignIn() {
  return (<>
    <div className='NotSign'>
        <div className='BoxSinin'>
          <div className='Sinin'>Sign In First To Start Chatting On</div>
        <img className='immgg' src={ChatXR} alt=''/>
        </div>
    </div>
    </>
  )
}

export default NotSignIn