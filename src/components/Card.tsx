import React, {useState} from "react";
import './Card.css'

interface CardProps {
    question: string;
    answer: string;
}

const Card: React.FC<CardProps> = ({question, answer}) => {
    const [isRevealed, setIsRevealed] = useState(false);

    const handleCardClick = () => {
        setIsRevealed(!isRevealed);
    }

    return (
        <div className={`card ${isRevealed ? 'revealed' : ''}`} onClick={handleCardClick}>
            <div className="cardContent question">{question}</div>
            <div className="cardContent answer">{answer}</div>
        </div>
    );
}

export default Card;