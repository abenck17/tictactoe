ticTacButtons = document.querySelectorAll("a");
let countClicks = 0; 



ticTacButtons.forEach(function changeColor(turn) {
    let buttonStyle = turn.style;
    
    turn.addEventListener('click', function() {
        countClicks += 1;
        console.log(countClicks)
        if (countClicks % 2 === 0) {
            buttonStyle.backgroundColor = 'red';
        } else (buttonStyle.backgroundColor = 'blue')
    })
});

// console.log(ticTacButtons)

// ticTacButtons[0].addEventListener('click', function changeBoxBackground(event) {
//     event.preventDefault();
//     ticTacButtons[0].style.backgroundColor = "red"
// })

// ticTacButtons.addEventListener('click', function changeColor(event) {
//     event.preventDefault()
// }






