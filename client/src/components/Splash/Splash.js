import React from 'react';
import Nav from '../Nav/Nav';
import Register from '../Register/Register';
import Login from '../Login/Login';
import './Splash.css';

const Splash= () => {
     
    return ( 
        /* Going to hold register, login and guest buttons */
        <div className='container'>

        
        <Nav />
        <div className='splash-container'>
            
           <span><Register /></span> 
           <span><Login/></span>     
            {/*<Guest/> */} 
        </div>
        </div>
    )
}


export default Splash;