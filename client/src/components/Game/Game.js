import React from 'react';
import './Game.css';
import Nav2 from '../Nav/Nav2';
import Card from '../Card/Card';
import axios from 'axios';


class Game extends React.Component{
    
    state = {
       score: 0,
       gameData: [],
       cardIndex: [],
       click: false,
       highScore: 0
       
    }

    componentDidMount() {
        console.log('component did mount is hitting');
        axios.get('gameData/expanse').then(data=>{
            console.log('data: ', data.data);
            let tempArr = data.data;
            this.setState({
                gameData: tempArr
            },()=>console.log('-----', this.state.gameData))
        })
        .then(axios.get('users/getUser').then(data=>{
            console.log('data: ', data);
        }))
        .catch(err=>{
            console.error(err);
        })
    }

    handleClick = id => {
        if(this.state.cardIndex.indexOf(id) === -1) {
            this.state.cardIndex.push(id);
            let updateScore = this.state.score + 1;
            if(updateScore === 12) {
                this.handleWin();
            } else {
                this.setState({
                    score: updateScore
                },()=>console.log('9999' + this.id));
            }
        } else {
            this.handleLoose();
        }
    }

    handleWin = () => {
        console.log('you win');
        alert('you have won!');
        const {score} = this.state;
        const holdScore = score;
        this.setState({
            score: 0,
            highScore: holdScore,
            cardIndex: []
        },()=> console.log('after win:', this.state))
    }

    handleLoose = () => {
        const {score, highScore} = this.state;
        alert('you have lost!');
        let newScore = score;
        if(newScore >= highScore) {
            this.setState({
                highScore: newScore,
                score: 0,
                cardIndex: []
            }, ()=>console.log('after loose + new highScore : ', this.state))
        } else {
            this.setState({
                score: 0,
                cardIndex: []
            }, ()=>console.log('after loose not higher then high score:', this.state ))
        }
    }

    shuffleArr = (arr) => arr.sort(() => 0.5 - Math.random());
    
    
    render(){
        const {score, gameData, click, highScore} = this.state;
     
        return (
            <div className='container'>
             <Nav2 user='ffdsfds' score={score} highScore={highScore}/>
                <div className='game-area'>
                {this.shuffleArr(gameData.slice(0,12)).map((i,index)=>(
                 <Card name={i.name} key={index} id={i._id} imgRef={i.img} click={click} handleClick={this.handleClick}/>
                ))}
                </div>
            </div>
        );
    }

}
  



export default Game;