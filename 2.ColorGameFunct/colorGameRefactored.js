var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square"); 
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons.forEach(function(btn){
            btn.classList.remove('selected');
        })
        this.classList.add('selected');
        numSquares = this.textContent === "Easy" ? 3 : 6;
        if (this.textContent === "Easy"){
            numSquares = 3;
        } else {
            numSquares = 6;
        }
        reset(numSquares);
    })
}

function reset(){
    // generate new colors
    colors = generateRandomColors(numSquares);
    // pick new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New colors";
    messageDisplay.textContent = "";
    // change colors all squares
    for (var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove('selected')
//     easyBtn.classList.add('selected')
//     messageDisplay.textContent = "";    
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++){
//         if (colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//             // continue;
//         }else{
//         squares[i].style.display = "none";
//         }
//     }
//         h1.style.backgroundColor = "steelblue";    
// })

// hardBtn.addEventListener("click", function(){
//     easyBtn.classList.remove('selected');
//     hardBtn.classList.add('selected');
//     messageDisplay.textContent = "";
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++){
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//     }
//         h1.style.backgroundColor = "steelblue";
// })

resetButton.addEventListener("click", function(){
    // generate new colors
    colors = generateRandomColors(numSquares);
    // pick new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors all squares
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New  Colors"
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        // opgeborgen oef. FOR NOW
        // clickedColor === pickedColor ? winGame(x) : continueGame(y);
        if (clickedColor === pickedColor){
            h1.style.backgroundColor = pickedColor;
            messageDisplay.textContent = "Correct!" 
            changeColors(clickedColor);
            resetButton.textContent = "Play Again?"         
        } else {
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = "Try again!";
            resetButton.textContent = "New Colors"                     
        }
    });
}

// function winGame(x){console.log(x.style.backgroundColor);}
// function continueGame(y){console.log(y.style.backgroundColor);}

function changeColors(color){
    for (var i = 0; i < colors.length;i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    return "rgb(" + Math.floor(Math.random()*256) + ", " +
        Math.floor(Math.random()*256) + ", " +
        Math.floor(Math.random()*256) + ")"; 
}