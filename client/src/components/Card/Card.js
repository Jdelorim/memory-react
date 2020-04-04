import React from 'react';
import './Card.css';
class Card extends React.Component {
   
    state = {
        sfx1 = new Audio('/sfx/beep_3.wav')
    }

    soundEnter = () => {

    }

    soundExit = () => {
        
    }



    render(){
        const {name, imgRef, click, id} = this.props;
        
        return(
        
            <div className='card-container' onClick={()=>this.props.handleClick(id, click)} >
                <img className='card-img'  src={imgRef} alt='fdsdfs'/>
                <div className='card-title'>{name}</div>
            </div>
       

        )
    }
}

export default Card;