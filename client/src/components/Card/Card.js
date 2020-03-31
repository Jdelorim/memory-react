import React from 'react';
import './Card.css';
class Card extends React.Component {
   


    render(){
        const {name, imgRef} = this.props;
        return(
            <div className='card-container' onClick={()=>this.props.handleClick()} >
                <img className='card-img'  src={imgRef} alt='fdsdfs'/>
                <div className='card-title'>{name}</div>
            </div>

        )
    }
}

export default Card;