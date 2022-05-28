import React, { useEffect, useState } from 'react';
import ReactBoxFlip from 'react-box-flip';
import backFace from '../images/question-mark-card.png';


const Card = ({ name, number, frontFace, flipCard, unflippedCards, disabledCards }) => {

    const [isFlipped, setIsFlipped] = useState(false);
    const [hasEvent, setHasEvent] = useState(true);

    useEffect(()=>{
        if(unflippedCards.includes(number)){
            setTimeout(()=> setIsFlipped(false), 700);
        }
    }, [unflippedCards])

    useEffect(()=>{
        if(disabledCards.includes(number)){
            setHasEvent(false);
        }
    }, [disabledCards])

    const handleClick = e => {
        const value = flipCard(name, number);
        if (value !=0){
            setIsFlipped(!isFlipped);
        }
    }

  return (
    <div className='card'>
        <ReactBoxFlip isFlipped={isFlipped}>        
            <img className='card-image' src={backFace} onClick={hasEvent ? handleClick : null}/>
            <img className='card-image' src={frontFace} onClick={hasEvent ? handleClick : null}/>
        </ReactBoxFlip>

    </div>
  )
}

export default Card