// constant veriables
const oneDice = document.getElementById("one");
const bothDice = document.getElementById("two");
const resetButton = document.getElementById("reset");
const first = document.getElementById("diceOne");
const second = document.getElementById("diceTwo");

//  click first button to roll dice one
oneDice.addEventListener('click', function() {
    first.textContent = getRandomNumber();
    second.textContent = 0;
})

// click second button to roll both dice
bothDice.addEventListener('click', function() {
    first.textContent = getRandomNumber();
    second.textContent = getRandomNumber();
})

// click reset button to reset both dice
resetButton.addEventListener('click', function() {
    first.textContent = 0;
    second.textContent = 0;
})

//  function for random number
const getRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
}