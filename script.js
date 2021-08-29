//Using strict mode for the script

/*prettierrc is a configuration file that allows you to change some defaults, the defaults that I've changed are:
 double quotes to single quotes
 arrow function parentheses to avoid using arrow parens () 
 
 Code snippets is a form of adding shortcuts, the one we are using is:
 console.log(), if we write cl in our code it will be a shortcut for console.log
 
 In settings.json I defined specific texts that I want highlights for, these are:
 BUG TODO FIX VID */

'use strict';

/* DOM is our document object model aka our html 

In order to select a html class or id in js to then manipulate the element later we do this: 

document.querySelector(''); inside the brackets we either write a html class or id that you want to select for ex:
document.querySelector('.message'); querySelector is an element selector
or for id
document.querySelector('#message');

in our console log if we want to read the element message we do this:

console.log(document.querySelector('.message')); 

instead of reading the message oh the element we can isolate the message in the console log by doing this:

console.log(document.querySelector('.message').textContent); this will select the message element and will only read the text that is inside the element: "Guess the number..."
 
To change the text content in js we can simply write this: 
document.querySelector('.message').textContent = `That's correct!`;

If you log the new textContent into console.log it should give you "That's correct!"
You can also use querySelectors for number and change them with textContent: 

document.querySelector('.score').textContent = 40;
document.querySelector('.number').textContent = 50;

To select input values or manipulate we do this:
console.log(document.querySelector('.guess').value); //it shows that the value is empty because there is no value/number inside the input, to manipulate the value we do this:

document.querySelector('.guess').value = 10;
console.log(document.querySelector('.guess').value);//Now it should show 10 as the value

We can add click events within our dom manipulation, let's say you have an element like the check button and you want the users to click on it to confirm that their input is right we first select the element with selector and then we add an event handler for js to listen to events, this is how event handlers work 

element.addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}

You add a click handler inside the event which triggers myFunction so every time a user clicks the page the "hello world!" alert will show up in the html markup

We can do the same thing for check button every time the user clicks on the button it will check the number the user inputted */
const soundBtn = document.querySelector('.again');
let myAudio = document.querySelector('#audio');

soundBtn.addEventListener('click', () => {
  myAudio.play();
});

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayAnimation = function () {
  document.querySelector('.message').style.animationName = 'blink';
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const changeColor = color => {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.guess').style.backgroundColor = color;
};

let number = Math.trunc(Math.random() * 30) + 1; //Number between 1 and 20
let score = 30; // Decreasing and Increasing the Score
let highScore = 0; //highScore is 0

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //First we convert the string that will be inputted into a number since we have to generate a random number and compare if the number the user inputted is correct

  if (!guess) {
    displayMessage('No Number! 🤷‍♀️'); //if there is no guess or no number added to the text box this message will replace "guess the number" with "No Number!"
  } else if (guess === number) {
    displayMessage('You Found Me! 🎉'); // If the guess that the user inputs is equal to the random number then the text "You found me!" will appear
    displayAnimation();
    //Manipulating the CSS elements with JS
    changeColor('#b56ddf');
    /*To select the page element we don't use . or #. 
    To select the style of the element we write .style. 
    To select a property like background-color = instead in js we type backgroundColor
    */
    document.querySelector('.number').textContent = number; //The secret number will show if the player guesses correctly

    //document.getElementById('checkbox').checked = true;

    document.querySelector('.number').style.animation =
      'glow 2.5s linear infinite';

    if (score > highScore) {
      //If the score is greater than the highScore
      highScore = score; //The the highScore will equal the same as score
      document.querySelector('.highScore').textContent = highScore; //Getting the highScore class from dom
    }
  } else if (guess !== number) {
    // if the guess is different than the random number
    if (score > 1) {
      displayMessage(guess > number ? 'Too High!' : 'Too Low'); //If the guess is higher than the random number then the "Too High" message will appear if it's not ':' the the "Too Low" message will appear
      score--; //If the guess is higher than the number the score to beat will decrease
      displayScore(score);
    } else {
      displayMessage('You Lost!'); //If the score to beat decreases to 0 then the message you lost will appear
      displayScore(0); //The maximum the score to beat will decrease is 0
    }
  }
});

// resetting the values
document.querySelector('.again').addEventListener('click', function () {
  score = 30;
  number = Math.trunc(Math.random() * 30) + 1;
  displayScore(20);
  displayMessage('Guess Again?');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  changeColor('#334257');
  document.querySelector('.message').style.animationName = null;
  document.querySelector('.number').style.animation = null;
});
