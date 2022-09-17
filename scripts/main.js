let counter = document.querySelector('.counter__number');
let result = document.querySelector('.result');
let myGreetings = document.querySelector('.app-greetings');

// Initialize the count as 0
let countNumber = 0;


// listen for click on the increment button & log it
function increment() {
    countNumber +=  1;
// change the counter in the HTML to reflect the new count
    counter.textContent = countNumber;
}

function decrement() {
    countNumber -=  1;
// change the counter in the HTML to reflect the new count
    counter.textContent = countNumber;

}

// Create a function save(), which logs out the count when it's called

function save(){

    let prevNumber = `${countNumber} | `;
    result.textContent += `${prevNumber}`;
    countNumber = 0;
    counter.textContent = countNumber;

}

function reset(){
countNumber = 0;
counter.textContent = 0;
result.textContent = '';
}

const myName = 'Marek';
const greeting = 'Welcome back'

myGreetings.innerText = `${greeting} ${myName}`;

myGreetings.innerText += ' :)'


