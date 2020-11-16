const colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
]

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");

//add picked collor to the title display
colorDisplay.textContent = pickedColor;



for(let i = 0; i < squares.length; i++){
	//add initial colors to square
	squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
			//grab color of clicked square
			let clickedColor = this.style.backgroundColor;
			//compare color to pickedSquare
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
	});
}


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