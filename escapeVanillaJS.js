document.addEventListener("DOMContentLoaded", () => {
    // 🪲 Bug: Incorrect ID used for attaching the event listener
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                // 🪲 Bug: Incorrect element ID
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'async']);
        // 🪲 Bug: What's mssing from JS concepts?
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // 🪲 Bug: Incorrect function call
        const commonConcepts = findIntersection(jsConcepts, reactConcepts)
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // 🪲 Bug: Asynchronous function ?
    document.getElementById("solveRoom3").addEventListener("click", async() => { // added 'async' to the event listener to make it an async function because I want to use the 'await' keyword inside the function.
         
            const response = await fetch('directions.json')
            const directions = await response.json()
            const message = await navigateLabyrinth(directions) // used the 'await' keyword to make the function wait for the promise to resolve before continuing.
            
            // 🪲 Bug: Incorrect method
            document.getElementById("room3Result").textContent = message; // changed from innerHTML to textContent so that the result is not rendered as the HTML code but as the text.
    
    });
        });

function findMostRecentBook(books) {
    // 🪲 Bug: Logic error
    return books.reduce((mostRecent, book) => new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent); // fixed the logic error by changing sign from '<' to '>' so that the code returns the *most* recent book
}

function findIntersection(setA, setB) {
    // 🪲 Bug: Incorrect logic
    const intersection = new Set([...setA].filter(concept => setB.has(concept))); // the first set (setA) is converted into an array using the spread syntax and then filters out concepts that are not present in the second set (setB) using the .has() method. this will result in a new set containing only the common concepts.
    return intersection;
}

async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // 🪲 Bug: No delay
       await new Promise(resolve => setTimeout(resolve, 1000)); // added the await keyword so that the syntax is correct, this is what enables the delay within the code
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}

