import React from "react";
import { useState } from 'react';
import './Flashcard.css';



const Flashcard = (props) => { // Using props
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <div className={`flashcard ${props.type} ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="front">
                <h5>{props.word}</h5>
            </div>
            <div className="back">
                <p>{props.definition}</p>
                
            </div>
        </div>
    );
}

export default Flashcard;