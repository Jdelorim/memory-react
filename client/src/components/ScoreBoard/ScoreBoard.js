import React from 'react'


class ScoreBoard extends React.Component{
    
    state = {
        // user: this.props.user,
        score: this.props.score,
        highScore: this.props.score
    }
    
    render() {
        const {score, highScore} = this.props;
        return(
        <ul id='menu'>
            {/* <li id='Menu1'><span className='m-title'>User:</span> {user}</li> */}
            <li id='Menu2'><span className='m-title'>Score:</span> {score}</li>
            <li id='Menu3'><span className='m-title'>High Score:</span> {highScore}</li>
        </ul>
        );
    }

}

export default ScoreBoard;