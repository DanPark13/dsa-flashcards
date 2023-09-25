import React from "react";
import './Card.css'

interface CardProps {
    question: string;
    answer: string;
}

const Card: React.FC<CardProps> = ({question, answer}) => {
    return (
        <div className="card">
            <h3>{question}</h3>
            <h3>{answer}</h3>
        </div>
    );
}

export default Card;