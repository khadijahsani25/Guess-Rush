let secret = Math.floor (Math.random() * 10)

let heart1 = document.getElementById("heart1")
let heart2 = document.getElementById("heart2")
let heart3 = document.getElementById("heart3")

let comment= document.getElementById("comment")
let guessButton = document.getElementById("submit")
let resetButton = document.getElementById("reset")
let input = document.getElementById("number")

let chance = 3;
let chanceText = document.getElementById("chanceText")

guessButton.addEventListener("click", () => {
    let number = Number(input.value)
    if (number === secret) {
        comment.innerText = "Correct! 🎉 The secret number is " + secret;
        resetButton.style.display = "inline-block";
    } else {
        chance--;

        if (number > secret) {
            comment.innerText = "Go Lower ⬇️"
        } else {
            comment.innerText = "Go Higher ⬆️"
        } 
        if (chance === 2) {
            heart3.innerText = "🤍";
        } 
        if (chance === 1) {
            heart2.innerText = "🤍";
        } 
        if (chance === 0) {
            heart1.innerText = "🤍";
            comment.innerText = "Game Over! 💀  The number was " + secret;
            resetButton.style.display = "inline-block";
        } 
     }   
 })

resetButton.addEventListener("click", () => {
    secret = Math.floor (Math.random() * 10);
    chance = 3;

    comment.innerText = "";
    input.value = "";
    heart1.innerText = "❤️";
    heart2.innerText = "❤️";
    heart3.innerText = "❤️";
    chanceText.innerText = "3 chances left"
    resetButton.style.display = "none";
})