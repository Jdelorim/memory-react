import React from 'react';
import Nav from '../Nav/Nav';
import About from '../About/about';
import Footer from '../Footer/Footer';
import './Splash.css';

const Splash= () => {
     
    return ( 
        /* Going to hold register, login and guest buttons */
        <>
        <div className='container'>
        <Nav />
        <div className='splash-container'>
            <About />
            
           {/* <span><Register /></span> 
           <span><Login /></span>      */}
            {/*<Guest/> */} 
        </div>
        </div>
        <div className='footer-container'>
            <Footer />
        </div>
        </>
    )
}


export default Splash;