import React from 'react';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import './Nav.css';

class Nav2 extends React.Component{
    state = {
        // user: this.props.user,
        score: this.props.score,
        highScore: this.props.highScore,
        status: this.props.status,
        statusMsg: this.props.status
    }

    componentDidUpdate(prevProps) {
        if(prevProps.score !== this.props.score) {
            this.setState({
                score: this.props.score,
            })
        }

        if(prevProps.highScore !== this.props.highScore) {
            this.setState({
                highScore: this.props.highScore
            })
        }

        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }



    render(){
        const {score, highScore, status} = this.state;
     
        return(
            <div className='nav-container'>
            <div className='nav-color-overlay'>
              <div className='nav-title'>The Expanse Memory Game</div>
              <div className='nav-link-container'>
                    <ScoreBoard score={score} highScore={highScore} />  
                    <div className='nav-status'>{status}</div>
            </div>  
            </div>
       </div>
        )
    }

}
export default Nav2;