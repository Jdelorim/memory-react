import React from 'react';
import './Nav.css';

const DisplayStats = ({playerName, score, highScore }) => {
   return(
    <ul id='menu'>
        <li>Player Name: {playerName}</li>
        <li>Player Score: {score}</li>
        <li>High Score: {highScore}</li>
    </ul>

   )
   
}


const Nav = ({Pscore,Pname,highScore}) => {
    return(
        
             <div className='nav-container'>
                <div className='nav-color-overlay'>
                    <div className='nav-title'>The Expanse Memory Game</div>
                    <div className='nav-link-container'>
                        
                            <DisplayStats 
                            playerName={Pname} 
                            score={Pscore}
                            highScore={highScore}
                            />
                        
                        
                    </div>  
                </div>
            </div>
        
       
    )
}

export default Nav;