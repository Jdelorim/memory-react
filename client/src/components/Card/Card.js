import React from 'react';
import './Card.css';
class Card extends React.Component {
    state = {
        gameIndex: '',
        cardTitle: this.props.name,
        imgRef: ''
    }


    render(){
        const {name, imgRef} = this.props;
        return(
            <div className='card-container'>
                <img className='card-img'  src={imgRef} />
                <div className='card-title'>{name}</div>
            </div>

        )
    }
}

export default Card;