import React, {useState} from "react";
import './Card.css'

const Card: React.FC = () => {
    const cards = [
        { question: "What is a Data Structure?", answer: "A specific way of organizing and storing data in a computer so it can be accessed and modified efficiently." },
        { question: "What is a Bit?", answer: "A unit of information stored as a 0 (FALSE), 1 (TRUE), or NULL." },
        { question: "What is a Byte?", answer: "A group of eight bits"},
        { question: "What is an Algorithm?", answer: "A step-by-step procedure or formula for solving a problem or accomplishing a task." },
        { question: "What is an Array?", answer: "A collection of items stored at contiguous memory locations, where items can be randomly accessed by indexing into the array." },
        { question: "What is a Linked List?", answer: "A linear data structure where elements are stored in nodes, and each node points to the next node in the sequence." },
        { question: "What is a Stack?", answer: "A linear data structure that stores items in Last-In/First-Out (LIFO) manner. Operations: push (to add) and pop (to remove)." },
        { question: "What is a Queue?", answer: "A linear data structure that stores items in First In First Out (FIFO) manner. Operations: enqueue (to add) and dequeue (to remove)." },
        { question: "What is a Binary Tree?", answer: "A tree data structure in which each node has at most two children, often referred to as the left and right children." },
        { question: "What is a Graph?", answer: "A data structure consisting of nodes and edges. Nodes are often called vertices, and edges connect two vertices." },
        { question: "What is Time Complexity?", answer: "A measure of the amount of time an algorithm takes to run as a function of the length of the input." },
        { question: "What is Space Complexity?", answer: "A measure of the amount of memory used by an algorithm (in terms of the amount of memory used as a function of the input size)." },
        { question: "What is a Hash Table?", answer: "A data structure that implements an associative array, a structure that can map keys to values using a hash function." },
        { question: "What is Depth-First Search (DFS)?", answer: "An algorithm for traversing or searching tree or graph data structures. It starts at the root and explores as far as possible along each branch before backtracking." },
        { question: "What is Breadth-First Search (BFS)?", answer: "An algorithm for traversing or searching tree or graph data structures. It starts at the tree root and explores all the neighbor nodes at the present depth prior to moving on to nodes at the next depth level." },
        { question: "What is Dynamic Programming?", answer: "A method for solving problems by breaking them down into simpler subproblems. It stores the results of expensive function calls and returns the cached result when the same inputs occur again." },
    ];

    const [count, setCount] = useState(cards.length)
    // const updateCount = () => setCount(count);

    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [isRevealed, setIsRevealed] = useState(false);

    const handleCardClick = () => {
        setIsRevealed(!isRevealed);
    }

    return (
        <div>
            <p>Number of Cards: {count}</p>
            <div className={`card ${isRevealed ? 'revealed' : ''}`} onClick={handleCardClick}>
                <div className="cardContent question">{cards[activeCardIndex].question}</div>
                <div className="cardContent answer">{cards[activeCardIndex].answer}</div>
            </div>

            <button onClick={() => {
                setIsRevealed(false);
                setActiveCardIndex(prevIndex => Math.max(prevIndex - 1, 0));
            }}>
                Previous
            </button>

            <button onClick={() => {
                setIsRevealed(false);
                setActiveCardIndex(prevIndex => Math.min(prevIndex + 1, cards.length - 1));
            }}>
                Next
            </button>
        </div>
    );
}

export default Card;