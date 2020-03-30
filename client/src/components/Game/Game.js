import React from 'react';
import './Game.css';
import Nav2 from '../Nav/Nav2';


/*Dont update props*/
class Game extends React.Component{
    state = {
       score: 0
    }

    handleClick = () => {
        return (
            this.setState({
                score: this.state.score + 1
            },()=>(console.log(this.state.score)))
        )
        
    }
    

    
    render(){
        const {score} = this.state;
        return(
            <div className='container'>
             <Nav2 user='ffdsfds' score={score} highScore='0ds099'/>
             <div className='score'>score: {score}</div>
             <button onClick={this.handleClick}>hit me</button>
            </div>
            
        );
    }

}
  



export default Game;