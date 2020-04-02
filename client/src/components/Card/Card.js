import React from 'react';
import './Card.css';
class Card extends React.Component {
   


    render(){
        const {name, imgRef, click, id} = this.props;
        
        return(
            <div className='card-container' onClick={()=>this.props.handleClick(id, click)} >
                <img className='card-img'  src={imgRef} alt='fdsdfs'/>
                <div className='card-title'>{name}</div>
                {console.log(id)}
            </div>

        )
    }
}

export default Card;