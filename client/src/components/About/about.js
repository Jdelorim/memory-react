import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';
class About extends React.Component {
    


    render(){
        return(
            <div className='about'>
                <div className='about-title'>Welcome to the Expanse Memory Game!</div> 
                <p>   
                    The goal of the game is to click on each character card without clicking on the same one twice. 
                    Good Luck! 
                </p>
                <Link to='/game'>
                    <div className='about-btn-holder'>
                        <button>Let's Play!</button>
                     </div>
                </Link>
                
            </div>
        )
    }
}

export default About;