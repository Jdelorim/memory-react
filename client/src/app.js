import React from 'react';

import Game from './components/Game/Game';
import Splash from './components/Splash/Splash';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import './app.css';




const App = () => {
    
    return(
        <Router>    
            
           
                <div className='playing-area'>
                    <Switch>
                        <Route path='/' exact component={Splash}/>
                        <Route path='/game' exact component={Game}/>
                    </Switch>
                   
                </div>
            

        </Router>
    )
}

export default App;