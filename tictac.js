ticTacButtons = document.querySelectorAll("a");
resetButton = document.querySelector("#resetButton");
let message = document.querySelector("#message");
let countClicks = 0; 



ticTacButtons.forEach(function changeColor(turn) {
    let buttonStyle = turn.style;
    
    turn.addEventListener('click', function() {
        console.log(countClicks)
        if (countClicks % 2 === 0 && buttonStyle.backgroundColor != "red" && buttonStyle.backgroundColor != "blue" ) {
            buttonStyle.backgroundColor = 'red';
            countClicks += 1;
        } else if (countClicks % 2 !== 0 && buttonStyle.backgroundColor != "red" && buttonStyle.backgroundColor != "blue" ) {
            (buttonStyle.backgroundColor = 'blue');
            countClicks += 1;
        }
        gameRules();
    })
});

resetButton.addEventListener('click', function resetGame(event) {
    event.preventDefault();
    window.location.reload();
    console.log("click works")
})

// wins 
// Columns 0, 1, 2 / 3, 4, 5 / 6, 7, 8
// Rows 0, 3, 6 / 1, 4, 7 / 2, 5, 8
// Diag 0, 4, 8 / 2, 4, 6

function gameRules() {
    if (ticTacButtons[0].style.backgroundColor === ticTacButtons[1].style.backgroundColor && ticTacButtons[0].style.backgroundColor === ticTacButtons[2].style.backgroundColor && ticTacButtons[0].style.backgroundColor !== "") {
        message.innerHTML = `${ticTacButtons[0].style.backgroundColor} player wins the game!`;
        console.log("Player wins");
    } else if (ticTacButtons[3].style.backgroundColor === ticTacButtons[4].style.backgroundColor && ticTacButtons[3].style.backgroundColor === ticTacButtons[5].style.backgroundColor && ticTacButtons[3].style.backgroundColor !== "") {
        message.innerHTML = `${ticTacButtons[3].style.backgroundColor} player wins the game!`;
        console.log("Player wins");
    } else if (ticTacButtons[6].style.backgroundColor === ticTacButtons[7].style.backgroundColor && ticTacButtons[6].style.backgroundColor === ticTacButtons[8].style.backgroundColor && ticTacButtons[6].style.backgroundColor !== "") {
        message.innerHTML = `${ticTacButtons[6].style.backgroundColor} player wins the game!`;
        console.log("Player wins");
    } else if (ticTacButtons[0].style.backgroundColor === ticTacButtons[3].style.backgroundColor && ticTacButtons[0].style.backgroundColor === ticTacButtons[6].style.backgroundColor && ticTacButtons[0].style.backgroundColor !== "") {
        message.innerHTML = `${ticTacButtons[0].style.backgroundColor} player wins the game!`;
        console.log("Player wins");
    } else if (ticTacButtons[1].style.backgroundColor === ticTacButtons[4].style.backgroundColor && ticTacButtons[1].style.backgroundColor === ticTacButtons[7].style.backgroundColor && ticTacButtons[1].style.backgroundColor !== "") {
        message.innerHTML = `${ticTacButtons[1].style.backgroundColor} player wins the game!`;
        console.log("Player wins");
    } else if (ticTacButtons[2].style.backgroundColor === ticTacButtons[5].style.backgroundColor && ticTacButtons[2].style.backgroundColor === ticTacButtons[8].style.backgroundColor && ticTacButtons[5].style.backgroundColor !== "") {
        message.innerHTML = `${ticTacButtons[2].style.backgroundColor} player wins the game!`;
        console.log("Player wins");
    } else if (ticTacButtons[0].style.backgroundColor === ticTacButtons[4].style.backgroundColor && ticTacButtons[0].style.backgroundColor === ticTacButtons[8].style.backgroundColor && ticTacButtons[0].style.backgroundColor !== "") {
        message.innerHTML = `${ticTacButtons[0].style.backgroundColor} player wins the game!`;
        console.log("Player wins");
    } else if (ticTacButtons[2].style.backgroundColor === ticTacButtons[4].style.backgroundColor && ticTacButtons[2].style.backgroundColor === ticTacButtons[6].style.backgroundColor && ticTacButtons[2].style.backgroundColor !== "") {
        message.innerHTML = `${ticTacButtons[2].style.backgroundColor} player wins the game!`;
        console.log("Player wins");
    } else if (countClicks === 8) {
        message.innerHTML = "No winner, it's a draw!"
    }
} // add logic ticTacButtons[] !== ""

// notes from LEO 

// playerTurn = "X";

// function boxEventListener() {
//     ticTacButtons[this.id] = playerTurn;
//     console.log(playerTurn);
// }

// ticTacButtons.forEach(box => {
//     box.addEventListener('click', boxEventListener, { once: true });
// })








