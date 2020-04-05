import React from 'react';
import './Card.css';
class Card extends React.Component {
   
    render(){
        const {name, imgRef, click, id, sfx1} = this.props;
       
        
        return (
            <div className='card-container' onMouseEnter={()=>this.props.playSfx(sfx1)} onClick={()=>this.props.handleClick(id, click)} >
                <img className='card-img'  src={imgRef} alt='fdsdfs'/>
                <div className='card-title'>{name}</div>
            </div>
        )
    }
}

export default Card;