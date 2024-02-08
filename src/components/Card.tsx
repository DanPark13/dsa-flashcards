import React, { useEffect, useState } from 'react';
import './Card.css'

interface CardProps {
    darkMode: boolean;
}

const Card: React.FC<CardProps> = ({ darkMode }) => {
    const [isDarkMode, setIsDarkMode] = useState(darkMode);

    useEffect(() => {
        setIsDarkMode(darkMode);
    }, [darkMode]);

    const cardStyle: React.CSSProperties = {
        border: isDarkMode ? '1px solid white' : '1px solid black',
        backgroundColor: isDarkMode ? '#333' : 'white',
        color: isDarkMode ? 'white' : 'black',
        padding: '16px',
    };

    const buttonStyle: React.CSSProperties = {
        backgroundColor: isDarkMode ? '#555' : '#DDD',
        color: isDarkMode ? 'white' : 'black',
        padding: '8px',
        margin: '4px',
        borderRadius: '4px',
        border: isDarkMode ? 'none': '1px solid black',
        cursor: 'pointer',
    };

    const flashCards = [
        {   
            question: "What if I'm not good at these types of algorithm problems?", 
            answer: "With sufficient practice and intuitive thinking, you can tackle any algorithmic problem. This platform ensures you master the fundamentals of data structures quickly." 
        },
        {
            question: "What is RAM",
            answer: "RAM (Random Access Memory) is short term memory usage that the computer can use quickly."
        },
        { 
            question: "What is a Data Structure", 
            answer: "A way to store data in an efficient manner inside RAM (Random Access Memory)." 
        },
        { 
            question: "What is a Bit", 
            answer: "A unit of information stored as a 0 (FALSE), 1 (TRUE), or NULL." 
        },
        { 
            question: "What is a Byte", 
            answer: "A group of eight bits."
        },
        { 
            question: "What is an Algorithm", 
            answer: "A step-by-step procedure or formula for solving a problem or accomplishing a task." 
        },
        {
            question: "What is an Array", 
            answer: "A collection of items stored at contiguous memory locations, where items can be randomly accessed by indexing into the array." 
        },
        {
            question: "What is Binary Search",
            answer: "An efficient algorithm used to find the position of a target value within a sorted array by repeatedly dividing the search interval in half, eliminating half of the remaining elements each time until the target is found or determined to be absent."
        },
        {
            question: "What is Recursion",
            answer: "a programming technique where a function calls itself to solve smaller instances of a problem, allowing for elegant and concise solutions to problems that exhibit self-similar structures"
        },
        {
            question: "What is a Linked List", 
            answer: "A linear data structure where elements are stored in nodes, and each node points to the next node in the sequence." 
        },
        {
            question: "What is a Stack", 
            answer: "A linear data structure that stores items in Last-In/First-Out (LIFO) manner. Operations: push (to add) and pop (to remove)." 
        },
        {
            question: "What is a Queue", 
            answer: "A linear data structure that stores items in First In First Out (FIFO) manner. Operations: enqueue (to add) and dequeue (to remove)." 
        },
        { 
            question: "What is a Binary Tree", 
            answer: "A tree data structure in which each node has at most two children, often referred to as the left and right children." 
        },
        { 
            question: "What is a Graph", 
            answer: "A data structure consisting of nodes and edges. Nodes are often called vertices, and edges connect two vertices." 
        },
        { 
            question: "What is Time Complexity", 
            answer: "A measure of the amount of time an algorithm takes to run as a function of the length of the input." 
        },
        { 
            question: "What is Space Complexity", 
            answer: "A measure of the amount of memory used by an algorithm (in terms of the amount of memory used as a function of the input size)." 
        },
        { 
            question: "What is a Hash Table", 
            answer: "A data structure that implements an associative array, a structure that can map keys to values using a hash function." 
        },
        {
            question: "What is a Heap or Priority Queue",
            answer: "A specialized binary tree-based data structure where the parent nodes are always greater (max heap) or smaller (min heap) than their child nodes."
        },
        { 
            question: "What is Depth-First Search (DFS)", 
            answer: "An algorithm for traversing or searching tree or graph data structures. It starts at the root and explores as far as possible along each branch before backtracking." 
        },
        { 
            question: "What is Breadth-First Search (BFS)", 
            answer: "An algorithm for traversing or searching tree or graph data structures. It starts at the tree root and explores all the neighbor nodes at the present depth prior to moving on to nodes at the next depth level." 
        },
        {
            question: "What is Backtracking",
            answer: "A tree-based technique used to explore all possible solutions to a problem. If dead end is reached, it tries alternative choies until all solutions are found."
        },
        { 
            question: "What is Dynamic Programming", 
            answer: "A method for solving problems by breaking them down into simpler subproblems. It stores the results of expensive function calls and returns the cached result when the same inputs occur again." 
        },
    ];

    const [cards, setCards] = useState(flashCards)
    // const updateCount = () => setCount(count);

    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [isRevealed, setIsRevealed] = useState(false);
    // const [userGuess, setUserGuess] = useState<string>('')

    const handleCardClick = () => {
        setIsRevealed(!isRevealed);
    }

    const [viewedIndexes, setViewedIndexes] = useState(new Set<number>());
    const [historyStack, setHistoryStack] = useState<number[]>([]);
    const [forwardStack, setForwardStack] = useState<number[]>([]);

    const getRandomUnusedIndex = () => {
        if (viewedIndexes.size === cards.length){
            return -1;
        }

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * cards.length);
        } while (viewedIndexes.has(randomIndex));

        return randomIndex;
    }

    // Sets a New Unviewed Random Card unless all cards have been viewed
    const handleRandomCard = () => {
        const newIndex = getRandomUnusedIndex();
        if (newIndex !== -1) {
            setIsRevealed(false);  // Ensure the card starts on the "word" side
            setHistoryStack(prevStack => [...prevStack, activeCardIndex]);
            setForwardStack([]);  // Reset the forward stack
            setActiveCardIndex(newIndex);
            setViewedIndexes(prevIndexes => new Set(prevIndexes).add(newIndex));
        } else {
            alert("Congratulations! All cards have been viewed!");
            setViewedIndexes(new Set());
        }
    };

    // Navigates to previous card by popping from history stack and pushing to forward stack
    const handlePrevious = () => {
        if (historyStack.length){
            const lastIndex = historyStack[historyStack.length - 1]
            setForwardStack(prevStack => [activeCardIndex, ...prevStack]);
            setActiveCardIndex(lastIndex);
            setHistoryStack(prevStack => prevStack.slice(0, prevStack.length - 1));
        }
    }

    // Navigates to next card in history by popping from forward stack and pushing to history stack
    const handleNext = () => {
        if (forwardStack.length) {
            const nextIndex = forwardStack[0];
            setHistoryStack(prevStack => [...prevStack, activeCardIndex]);
            setActiveCardIndex(nextIndex);
            setForwardStack(prevStack => prevStack.slice(1));
        }
    }

    const handleShuffle = () => {
        // Shuffle the cards without resetting the user's progress
        const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
        setCards(shuffledCards);
        // setActiveCardIndex(0);
      };

    // Resets: Same Functionality as if browser was refreshed
    const handleReset = () => {
        setForwardStack([]);
        setHistoryStack([]);
        setViewedIndexes(new Set());
        setActiveCardIndex(0);
        setIsRevealed(true);
    }

    // const handleSubmitGuess = () => {
    //     if (userGuess.toLowerCase() === cards[activeCardIndex].answer.toLowerCase()){
    //         alert("Correct!")
    //     } else {
    //         alert("Incorrect!")
    //     }
    //     setIsRevealed(true);
    //     setUserGuess('');
    // }


    return (
        <div style={cardStyle}>
            <div className="card-counts">
                <span>Cards Reviewed: {viewedIndexes.size}</span>
                <span>Cards Left: {cards.length - viewedIndexes.size}</span>
            </div>
            <br></br>

            <div className={`card ${isRevealed ? 'revealed' : ''}`} onClick={handleCardClick}>
                <div className="cardContent question">{flashCards[activeCardIndex].question}</div>
                <div className="cardContent answer">{flashCards[activeCardIndex].answer}</div>
            </div>
            <br></br>

            {/* <div className="guess">
                {!isRevealed && (
                    <div>
                        Guess the answer:&nbsp;
                        <input 
                            type="text" 
                            value = {userGuess}
                            onChange = {e => setUserGuess(e.target.value)}
                            placeholder = "Type your guess here..."
                        />
                        &nbsp;
                        <button onClick={handleSubmitGuess}>Submit Answer</button>
                    </div>
                )}
            </div>
            <br></br> */}

            <button style={buttonStyle} onClick={handleReset} disabled={!historyStack.length}>Reset Deck</button>
            <button style={buttonStyle} onClick={handleShuffle}>Shuffle Deck</button>
            <button style={buttonStyle} onClick={handlePrevious} disabled={!historyStack.length}>Previous</button>
            <button style={buttonStyle} onClick={handleNext} disabled={!forwardStack.length}>Forwards</button>
            <button style={buttonStyle} onClick={handleRandomCard}>New Card</button>
        </div>
    );
}

export default Card;