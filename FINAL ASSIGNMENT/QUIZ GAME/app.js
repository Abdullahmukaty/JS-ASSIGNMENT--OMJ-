let jsquestions = [
    "1. What is JavaScript, and what is it commonly used for?",
    "2. How do you declare a variable in JavaScript? What are the differences between var, let, and const?",
    "3. What are the different data types in JavaScript?",
    "4. How do you write a comment in JavaScript?",
    "5. What is the difference between == and === in JavaScript?",
    "6. How do you create a function in JavaScript? What is the difference between a function declaration and a function expression?",
    "7. What is the typeof operator used for in JavaScript?",
    "8. How do you add an event listener to an HTML element using JavaScript?",
    "9. What is the DOM (Document Object Model), and how does JavaScript interact with it?",
    "10. How do you use console.log() and why is it useful?",
    "11. What are template literals in JavaScript, and how do they differ from regular strings?",
    "12. What is hoisting in JavaScript, and how does it work?",
    "13. What is closure in JavaScript, and can you provide an example?",
    "14. What are JavaScript promises, and how do they work? How do you handle errors in promises?",
    "15. What is the difference between null and undefined in JavaScript?",
    "16. How do you use map(), filter(), and reduce() in JavaScript? Provide examples.",
    "17. What is the this keyword in JavaScript, and how does it behave in different contexts?",
    "18. What are arrow functions, and how do they differ from regular functions?",
    "19. How do you handle asynchronous operations in JavaScript? Explain async / await.",
    "20. What is the purpose of the fetch() API, and how do you use it?",
];

console.log(jsquestions[10])
console.log(Math.floor(Math.random() * 20));

let allboxes = document.getElementsByClassName("box");
console.log(allboxes);

for (let i = 0; i < allboxes.length; i++) {
    allboxes[i].addEventListener('click', function () {
        clearall()
        this.style.backgroundColor = '#fff'
        this.style.color = '#000'
        this.style.fontSize = '22px'
        this.style.textAlign = 'center'
        this.innerText = jsquestions[Math.floor(Math.random() * 20)]
    })
}

function clearall() {
    for (let i = 0; i < allboxes.length; i++) {
        allboxes[i].style.backgroundColor = '#000'
        allboxes[i].style.color = '#fff'
        allboxes[i].style.fontSize = '40px'
        allboxes[i].innerText = i + 1
    }
}