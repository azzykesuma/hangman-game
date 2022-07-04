import { questions, answers, hints } from './components.js';
// variables
let gameAnswer = '';
var hint = '';
let wordDisplay = [];
let live = 10;
let winningCheck = '';
const wordsWrapper = document.querySelector('.alphabetWrapper');
const categoryWrap = document.querySelector('.category');
const answerDisplay = document.getElementById('hold');
const clue = document.getElementById('clue');
const buttonHint = document.getElementById('hint');
const resetBtn = document.getElementById('reset');
const livesDisplay = document.getElementById('lives');
// making Buttons UI
function generateButton() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
        .split('')
        .map(item => (`<button
            id="${item}"
            >${item}</button>`))
        .join('');
    return alphabet;
}
// registering clicks to buttons 
function handleClick(e) {
    const target = e.target;
    const isButton = target.nodeName === 'BUTTON';
    if (isButton) {
        const buttonId = document.getElementById(target.id);
        if (buttonId) {
            buttonId.classList.add('selected');
        }
    }
    return;
}
// setting question , answers and category
function setAnswer() {
    // get the answer array to determine the questions
    const answerOrder = Math.floor(Math.random() * answers.length);
    // get the answer value 
    const chosenAnswer = answers[answerOrder];
    const wordOrder = Math.floor(Math.random() * chosenAnswer.length);
    const choosenWord = chosenAnswer[wordOrder];
    if (categoryWrap) {
        // the question index is based on the index of answer.
        // so the question and answer should be on the same index in each array
        categoryWrap.innerHTML = questions[answerOrder];
    }
    gameAnswer = choosenWord;
    // the hint takes the same index as answer.
    hint = hints[answerOrder][wordOrder];
    console.log(hint);
    answerDisplay.innerHTML = generateAnswerDisplay(choosenWord);
}
function generateAnswerDisplay(word) {
    const wordArray = word.split('');
    for (let i = 0; i < word.length; i++) {
        if (wordArray[i] !== '-') {
            wordDisplay.push('_');
        }
        else {
            wordDisplay.push('-');
        }
    }
    return wordDisplay.join(' ');
}
// showing hint
function showHint() {
    clue.innerHTML = `Clue - ${hint}`;
}
buttonHint.addEventListener('click', showHint);
// reset button
resetBtn.addEventListener('click', init);
// guessing words
function guess(e) {
    const target = e.target;
    const guessWord = target.id;
    const answerArray = gameAnswer.split('');
    // counter counts the correct guess of the answer
    // if the player guessed wrong, counter become 0, and lives reduced by 1
    let counter = 0;
    if (gameAnswer === winningCheck) {
        livesDisplay.innerHTML = 'YOU WIN!';
        return;
    }
    else {
        if (live > 0) {
            for (let a = 0; a < gameAnswer.length; a++) {
                if (guessWord === answerArray[a]) {
                    wordDisplay[a] = guessWord;
                    answerDisplay.innerHTML = wordDisplay.join(' ');
                    winningCheck = wordDisplay.join('');
                    counter = 1;
                    console.log(counter);
                }
            }
            if (counter === 0) {
                live -= 1;
                counter = 0;
            }
            else {
                counter = 0;
            }
            if (live > 1) {
                livesDisplay.innerHTML = `you have ${live} lives`;
            }
            else if (live === 1) {
                livesDisplay.innerHTML = `you have ${live} life`;
            }
            else {
                livesDisplay.innerHTML = 'game over!';
            }
        }
        else {
            return;
        }
        if (gameAnswer === winningCheck) {
            livesDisplay.innerHTML = 'YOU WIN!';
            return;
        }
    }
}
wordsWrapper.addEventListener('click', guess);
// initializing 
function init() {
    gameAnswer = '';
    hint = '';
    live = 10;
    wordDisplay = [];
    winningCheck = '';
    clue.innerHTML = 'Clue - ';
    livesDisplay.innerHTML = `You have ${live} lives`;
    setAnswer();
    if (wordsWrapper) {
        wordsWrapper.innerHTML = generateButton();
        wordsWrapper.addEventListener('click', handleClick);
    }
}
window.onload = () => {
    init();
};
