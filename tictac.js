ticTacButtons = document.querySelectorAll("a");
resetButton = document.querySelector("#resetButton")
let countClicks = 0; 



ticTacButtons.forEach(function changeColor(turn) {
    let buttonStyle = turn.style;
    
    turn.addEventListener('click', function() {
        countClicks += 1;
        console.log(countClicks)
        if (countClicks % 2 === 0 && buttonStyle.backgroundColor != "red" && buttonStyle.backgroundColor != "blue" ) {
            buttonStyle.backgroundColor = 'red';
        } else if (countClicks % 2 !== 0 && buttonStyle.backgroundColor != "red" && buttonStyle.backgroundColor != "blue" ) {
            (buttonStyle.backgroundColor = 'blue');
        }
    })
});

resetButton.addEventListener('click', function resetGame(event) {
    event.preventDefault();
    window.location.reload();
    console.log("click works")
})

// console.log(ticTacButtons)

// ticTacButtons[0].addEventListener('click', function changeBoxBackground(event) {
//     event.preventDefault();
//     ticTacButtons[0].style.backgroundColor = "red"
// })

// ticTacButtons.addEventListener('click', function changeColor(event) {
//     event.preventDefault()
// }






