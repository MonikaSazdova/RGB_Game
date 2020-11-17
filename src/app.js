let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetBtn = document.querySelector("#reset");
let modeBtns = document.querySelectorAll(".mode");

initialize();

function initialize(){
	//mode buttons event listeners (easy and hard)
	setModeBtns();


	//set squares listeners
	for(let i = 0; i < squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
				//grab color of clicked square
				let clickedColor = this.style.backgroundColor;
				//compare color to pickedSquare
				if(clickedColor === pickedColor){
					messageDisplay.textContent = "Correct!";
					resetBtn.textContent = "Play Again?"
					changeColors(clickedColor);
					h1.style.backgroundColor = clickedColor;
				} else {
					this.style.backgroundColor = "#232323";
					messageDisplay.textContent = "Try Again";
				}
		});
	}

	reset();
}

function setModeBtns(){
	for(let i = 0; i < modeBtns.length; i++){
		modeBtns[i].addEventListener("click", function(){
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}


function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	//reset butn should only show msh "PlayAgain" after the winner won
	resetBtn.textContent = "New Colors"
	//hide message "Correct!"
	messageDisplay.textContent = "";
	//change colors of squares
	for(let i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue"
}

resetBtn.addEventListener("click", function(){
  reset();
})


//change the color of all squares to the correct color
function changeColors(color){
	//loop through all squares
	for(let i=0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

//pick random color 
function pickColor(){
	let random = Math.floor(Math.random() * colors.length);
	return colors[random]
}

//generate random colors
function generateRandomColors(num){
	//make an array
	let arr = [];
	//add num random colors to array
	for(let i = 0; i < num; i++){
		//getRandom color and push into array
		arr.push(randomColor())
	}
	//return the array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 to 255
	let r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 to 255
	let g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 to 255
	let b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`
}

