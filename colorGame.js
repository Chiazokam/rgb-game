

var squareColor = document.querySelectorAll(".square");

var colorDisplay = document.querySelector("#colorDisplay");

var clickFeedback = document.querySelector(".clickFeedback");

var h1Select = document.querySelector("h1");

var reset = document.querySelector("#reset");

var easyMode = document.querySelector("#easyMode");

var hardMode = document.querySelector(".hardMode");

var viewScore = document.querySelector(".viewScore");

var lifeLeft = document.querySelector(".lifeLeft");


//-------------------------------------------------------

var numSquares = 6;

var colors = generateRandomColors(numSquares);

//-------------------------------------------------------

//Generate Random Colors in different modes
//Has to be defined before the colorPicker function

easyMode.addEventListener("click", function(){

	easyMode.classList.add("modeSelected");
	hardMode.classList.remove("modeSelected");

	//-----------------------------------------------
	//To set trial limits and keep a score count
	//-----------------------------------------------
	var scoreCount = 0;
	var maxLife = 3;
	var lifeLoss = maxLife;


	//Generate random colors

	numSquares = 3;

	colors = generateRandomColors(numSquares);

	//Pick a color goal
	colorGoal = colors[colorPicker()];

	//Change the text content of the header to include the color goal
	colorDisplay.textContent =  colorGoal ;

	//Change the colors in the squares when mode is chosen
	for(i=0; i < squareColor.length; i++ ){

	//Add Colors to squares

		if(colors[i]){

			squareColor[i].style.backgroundColor = colors[i];

		}
		
		else{

			squareColor[i].style.display = "none";
		}

	}


})

hardMode.addEventListener("click", function(){

	//-----------------------------------------------
	//To set trial limits and keep a score count
	//-----------------------------------------------
	var scoreCount = 0;
	var maxLife = 3;
	var lifeLoss = maxLife;

	numSquares = 6;

	colors = generateRandomColors(numSquares);

	//Pick a color goal
	colorGoal = colors[colorPicker()];

	hardMode.classList.add("modeSelected");
	easyMode.classList.remove("modeSelected");

	for(i=0; i < squareColor.length; i++ ){

		//Add Colors to square

		squareColor[i].style.backgroundColor = colors[i];

		squareColor[i].style.display = "block";

	}

})
             

//-------------------------------------------------------

//Choose a color goal
var colorGoal = colors[colorPicker()];


//Change the text content of the header to include the color goal
colorDisplay.textContent =  colorGoal ;


//-------------------------------------------------------

			//Function Definitions//

//-------------------------------------------------------

function colorPicker(){

	//Picks a random number between 1 and 6 
	var random = Math.floor(Math.random() * colors.length);

	return random
}


//-------------------------------------------------------

//To change all square colors to the correct color when picked
function changeColor(color){   

	//Used to change all squares to a particular color
	//Applied when the correct square is chosen

	for(i=0; i < colors.length; i++ ){

		squareColor[i].style.backgroundColor = color;

	}

}

//-------------------------------------------------------

function randomColors(){

	//Pick a red from 0 - 255
	var r = Math.floor(Math.random() *256)

	//Pick a green from 0 - 255
	var g = Math.floor(Math.random() *256)

	//Pick a blue from 0 - 255
	var b = Math.floor(Math.random() *256)
	
	return "rgb(" + r + ", " + g + ", " + b +")";
}

//-------------------------------------------------------

//To create an array for random numbers

function generateRandomColors(num){      //Where num is the number of elements the array should have

	//Initialize the array
	var arr = [];

	//Loop 'num' times adding 3 colors to the array each time
	for(i = 0; i < num; i++){

		arr.push(randomColors());
	}

	//return the array
	return arr;
}

//----------------------------------------------------------------

	//-----------------------------------------------
	//To set trial limits and keep a score count
	//-----------------------------------------------
	var scoreCount = 0;
	var maxLife = 3;
	var lifeLoss = maxLife;

//Looping through the squares

	for(i=0; i < colors.length; i++ ){

		//Add Colors to squares

		squareColor[i].style.backgroundColor = colors[i];


		//Add click listeners to squares


		squareColor[i].addEventListener("click", function(){

			var clickedColor = this.style.backgroundColor;

			if(maxLife <= 3 && maxLife > 0){

				if(clickedColor === colorGoal){

						scoreCount++;

						viewScore.textContent = scoreCount;

						//Display new colors for each right selection until maxLife gets to 0
						colors = generateRandomColors(numSquares);

						//Pick a color goal
						colorGoal = colors[colorPicker()];

						//Change the text content of the header to include the color goal
						colorDisplay.textContent =  colorGoal ;

						for(i=0; i < squareColor.length; i++ ){

							//Add Colors to square

							squareColor[i].style.backgroundColor = colors[i];

							squareColor[i].style.display = "block";

							clickFeedback.textContent = "";

						}


						//changeColor(clickedColor);
			
						//Changing Text and Styles for the correct color picked
			
						clickFeedback.textContent = "Correct!"
			
						clickFeedback.classList.add("correctFeedbackColor");
			
						clickFeedback.classList.remove("wrongFeedbackColor");
			
						h1Select.style.backgroundColor = clickedColor;
			
						//reset.textContent = "PLAY AGAIN?";

					}
			
					else{

						maxLife --;

						lifeLeft.textContent = maxLife;

						//Display new colors for each wrong selection until maxLife gets to 0
						colors = generateRandomColors(numSquares);

						//Pick a color goal
						colorGoal = colors[colorPicker()];

						//Change the text content of the header to include the color goal
						colorDisplay.textContent =  colorGoal ;

						for(i=0; i < squareColor.length; i++ ){

							//Add Colors to square

							squareColor[i].style.backgroundColor = colors[i];

							squareColor[i].style.display = "block";

						}

						//Removing the color on the wrongly picked box
						//this.style.backgroundColor = "#2f3542";
			
						clickFeedback.textContent = "Try Again";
			
						clickFeedback.classList.add("wrongFeedbackColor");
			
						clickFeedback.classList.remove("correctFeedbackColor");
			
					}
				}

				else if(maxLife === 0){

						//for(i=0; i < colors.length; i++ ){

						//squareColor[i].style.backgroundColor = "#2f3542";

						alert("Game Over!");

						resetGame();

					//}
				}

		})
	}

//----------------------------------------------------------------

function resetGame(){

	//reset.addEventListener("click", function(){

		//Reinitialize maxLife
		maxLife = 3;

		lifeLeft.textContent = maxLife;

		//Reset the High Score
		scoreCount = 0;

		viewScore.textContent = scoreCount;

		//Generate new colors
		colors = generateRandomColors(numSquares);

		//Pick a new color goal
		colorGoal = colors[colorPicker()];

		//Change the text content of the header to include the color goal
		colorDisplay.textContent =  colorGoal ;

		//Change colors in squares

		for(i=0; i < colors.length; i++ ){

		//Add Colors to squares
			squareColor[i].style.backgroundColor = colors[i];

		}

		//Change everything that needs to be changed in a new game

		h1Select.style.backgroundColor = "#52B3D9";   //Change the background color of the header

		//reset.textContent = "NEW COLORS";   //Change PLAY AGAIN to NEW COLORS

		clickFeedback.textContent = "";   //Remove the 'Correct' or 'Try Again'
	//})

}

//--------------------------------------------------------
//--------To increase Scores when right matches are made
//--------------------------------------------------------


