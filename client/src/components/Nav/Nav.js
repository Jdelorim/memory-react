import React from 'react';
import './Nav.css';

const DisplayStats = ({playerName, score, highScore }) => {
   return(
    <ul id='menu'>
        <li id='Menu1'>User: {playerName}</li>
        <li id='Menu2'>Score: {score}</li>
        <li id='Menu3'>High Score: {highScore}</li>
    </ul>
    )
}


const Nav = ({Pscore,Pname,highScore}) => {
    console.log('----' + window.innerWidth);
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