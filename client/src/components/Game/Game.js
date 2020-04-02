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
    }

    handleLoose = () => {
        console.log('you loose')
    }

    
    render(){
        const {score, gameData, click} = this.state;
     
        return (
            <div className='container'>
             <Nav2 user='ffdsfds' score={score} highScore='0ds099'/>
             {gameData.map((i,index)=>(
                <Card name={i.name} key={index} id={i._id} imgRef={i.img} click={click} handleClick={this.handleClick}/> 
             ))
             }
            <div className='score'>score: {score}</div>
             {/* <button onClick={this.handleClick}>hit me</button> */}
            </div>
        );
    }

}
  



export default Game;