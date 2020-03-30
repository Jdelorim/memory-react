import React from 'react';
import Register from '../Register/Register';
import Nav from '../Nav/Nav';
import './Splash.css';

const Splash= () => {
     
    return ( 
        /* Going to hold register, login and guest buttons */
        <div className='container'>

        
        <Nav />
        <div className='splash-container'>
            
           <span><Register /></span> 
            {/*<Login/> */}
            {/*<Guest/> */} 
        </div>
        </div>
    )
}


export default Splash;