import React from 'react';
import Register from '../Register/Register';
import './Splash.css';

const Splash= () => {
     
    return ( 
        /* Going to hold register, login and guest buttons */
        <div className='splash-container'>
            <span><Register /></span>
            {/*<Login/> */}
            {/*<Guest/> */} 
        </div>
    )
}


export default Splash;