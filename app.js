/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector(`.display`)


/*-------------------------------- Variables --------------------------------*/
let currentValue = ``
let operator = ``
let previousValue = ``
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      // Future logic to capture the button's value would go here...
    });

  });
  calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
  
    // Example
    if (event.target.classList.contains('.number')) {
      // Do something with a number
      console.log(`number clicked`)
    }
  
    // Example
    if (event.target.innerText === '*') {
      // Do something with this operator
      console.log(`Multiply key`)
    }
    
    if (event.target.innerText === `-`) {
        console.log(`Subtract key`)
    }

    if (event.target.innerText === `/`) {
        console.log(`Divide key`)
    }

    if (event.target.innerText === `+`) {
        console.log(`Add key`)
    }
    
    if (event.target.innerText === `C`) {
        console.log(`Clear key`)
    }

    if (event.target.innerText === `=`) {
        console.log(`Equals key`)
    }


    });
  
  
/*-------------------------------- Functions --------------------------------*/
