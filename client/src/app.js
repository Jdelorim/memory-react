import React from 'react';
import Nav from './components/Nav/Nav';
import Register from './components/Register/Register';
import './app.css';

const tempData = {
    name: 'Joshua deLorimier',
    score: 40,
    highScore: 100
}



const App = () => {
    
    return(
        <div className='container'>
           <Nav Pname={tempData.name} Pscore={tempData.score} highScore={tempData.highScore} />
           <div className='playing-area'>
               {/*<Wrapper />*/}
               <Register />
           </div>
        </div>
    )
}

export default App;