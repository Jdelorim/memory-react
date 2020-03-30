import React from 'react';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import './Nav.css';

class Nav2 extends React.Component{
    state = {
        user: this.props.user,
        score: this.props.score,
        highScore: this.props.highScore
    }

    componentDidUpdate(prevProps) {
        if(prevProps.score !== this.props.score) {
            this.setState({
                score: this.props.score
            })
        }
    }



    render(){
        const {user, score, highScore} = this.state;
        return(
            <div className='nav-container'>
            <div className='nav-color-overlay'>
              <div className='nav-title'>The Expanse Memory Game</div>
              <div className='nav-link-container'>
                    <ScoreBoard user={user} score={score} highScore={highScore} />  
                  <div>{this.state.score}</div>
                </div>  
            </div>
       </div>
        )
    }

}
export default Nav2;