import React from 'react';
import './Game.css';
import Nav2 from '../Nav/Nav2';
import Card from '../Card/Card';
import axios from 'axios';
import Footer from '../Footer/Footer';

class Game extends React.Component{
    
    state = {
       score: 0,
       gameData: [],
       cardIndex: [],
       click: false,
       highScore: 0,
       sfx1: new Audio('sfx/beep_3.wav'),
       sfx2: new Audio('sfx/beep_2.wav'),
       winSfx: new Audio('sfx/win.wav'),
       loseSfx: new Audio('sfx/lose.wav'),
       status: ''
       
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
        // .then(axios.get('users/getUser').then(data=>{
        //     console.log('data: ', data);
        // }))
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
               this.playSfx(this.state.sfx2);
                this.setState({
                    score: updateScore,
                    status: ''
                
                },()=>console.log('9999' + this.id));
            }
        } else {
            this.handleLoose();
        }
    }

    handleWin = () => {
        console.log('you win');
       this.playSfx(this.state.winSfx);
        const {score} = this.state;
        const holdScore = score+1;
        this.setState({
            score: 0,
            highScore: holdScore,
            cardIndex: [],
            status: 'You have won!'
        },()=> console.log('after win:', this.state))
    }

    handleLoose = () => {
        const {score, highScore} = this.state;
        this.playSfx(this.state.loseSfx);
        let newScore = score;
        if(newScore >= highScore) {
            this.setState({
                highScore: newScore,
                score: 0,
                cardIndex: [],
                status: 'You have lost!'
            }, ()=>console.log('after loose + new highScore : ', this.state))
        } else {
            this.setState({
                score: 0,
                cardIndex: [],
                status: 'You have lost!'
            }, ()=>console.log('after loose not higher then high score:', this.state ))
        }
    }

    shuffleArr = (arr) => arr.sort(() => 0.5 - Math.random());
    
    playSfx = (sfx) => {
         let a = sfx;
         console.log(a);
        console.log('should play sfx once');
        a.volume = 0.2;
        if(a.duration > 0 && !a.paused) {
            a.currentTime = 0;
            a.play();
        } else {
            a.play();
        }
    } 


    render(){
        const {score, gameData, click, highScore, sfx1, status} = this.state;
        
        return (
            <div className='container'>
            <Nav2 user='ffdsfds' status={status} score={score} highScore={highScore}/>
                <div className='game-area'>
                 {this.shuffleArr(gameData.slice(0,12)).map((i,index)=>(
                 <Card name={i.name} key={index} id={i._id} imgRef={i.img} click={click} sfx={sfx1} playSfx={this.playSfx} handleClick={this.handleClick}/>
                ))}
                </div>
                <Footer />
            </div>
        );
    }

}
  



export default Game;