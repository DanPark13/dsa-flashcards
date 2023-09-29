import React, {useState} from "react";
import './Card.css'

const Card: React.FC = () => {
    const flashCards = [
        { question: "What if I'm not good at these types of algorithm problems?", answer: "You CAN solve any problem when you have enough practice because all you have to do is think intuitively through the problem and with a bit of code, you can solve any algorithm problem! And with this site, you'll be able to knock out data structure basics in no time." },
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

    const [cards] = useState(flashCards)
    // const updateCount = () => setCount(count);

    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [isRevealed, setIsRevealed] = useState(false);

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
        if (newIndex !== -1){
            setHistoryStack(prevStack => [...prevStack, activeCardIndex]);
            setForwardStack([]); // Reset forward stack when new created
            setActiveCardIndex(newIndex);
            setViewedIndexes(prevIndexes => new Set(prevIndexes).add(newIndex));
            setIsRevealed(!isRevealed);
        } else {
            alert("Congratulations! All Cards Have Been Studied.")
            setViewedIndexes(new Set());
        }
    }

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

    // Resets: Same Functionality as if browser was refreshed
    const handleReset = () => {
        setForwardStack([]);
        setHistoryStack([]);
        setViewedIndexes(new Set());
        setActiveCardIndex(0);
        setIsRevealed(false);
    }

    return (
        <div>
            <p>Number of Flashcards: {flashCards.length}</p>
            <div className={`card ${isRevealed ? 'revealed' : ''}`} onClick={handleCardClick}>
                <div className="cardContent question">{flashCards[activeCardIndex].question}</div>
                <div className="cardContent answer">{flashCards[activeCardIndex].answer}</div>
            </div>

            <button onClick={handleReset} disabled={!historyStack.length}>Reset Deck</button>
            <button onClick={handlePrevious} disabled={!historyStack.length}>Backwards</button>
            <button onClick={handleNext} disabled={!forwardStack.length}>Forwards</button>
            <button onClick={handleRandomCard}>New Card</button>
        </div>
    );
}

export default Card;