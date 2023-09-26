import React, {useState} from "react";
import './Card.css'

interface CardProps {
    question: string;
    answer: string;
}

const Card: React.FC = () => {
    const cards = [
        { question: "What is a Data Structure?", answer: "A specific way of organizing and storing data in a computer so it can be accessed and modified efficiently." },
        { question: "What is a Bit?", answer: "A unit of information stored as a 0 (FALSE), 1 (TRUE), or NULL." },
    ];

    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [isRevealed, setIsRevealed] = useState(false);

    const handleCardClick = () => {
        setIsRevealed(!isRevealed);
    }

    return (
        <div>
            <div className={`card ${isRevealed ? 'revealed' : ''}`} onClick={handleCardClick}>
                <div className="cardContent question">{cards[activeCardIndex].question}</div>
                <div className="cardContent answer">{cards[activeCardIndex].answer}</div>
            </div>

            <button onClick={() => {
                setIsRevealed(false); // Reset flip when navigating
                setActiveCardIndex(prevIndex => Math.max(prevIndex - 1, 0));
            }}>
                Previous
            </button>

            <button onClick={() => {
                setIsRevealed(false); // Reset flip when navigating
                setActiveCardIndex(prevIndex => Math.min(prevIndex + 1, cards.length - 1));
            }}>
                Next
            </button>
        </div>
    );
}

export default Card;