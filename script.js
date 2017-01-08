$(document).ready(function(){

//global variables
var submitButton = document.getElementById("target-word-submit-button");
var letters = document.getElementsByClassName("letter");
var targetWordInput = document.getElementById("target-word-input");
var targetWord;
var targetWordLength;
var targetArray;
var turnsLeft = 5;
var spacesLeft = 10;


//TODO make this private, but cant figure out how to set "this" to letter
function getGuess(){
	var guess = (this.innerHTML);
	console.log(guess);
	Hangman.checkInputAgainstArray(guess);
	$(this).remove();
}


//hangman module

var Hangman = (function(){

	//get the target word from input
	var _privateGetTargetWord = function(){
		//set target word to value of input
		targetWord = document.getElementById("target-word-input").value;
	}

	var _privateGetLength = function(){
		//find length so you can add this amount of underscores to html content
		targetWordLength = targetWord.length;
		console.log(targetWordLength);
	}	

	var _privateCreateArray = function(){
		//create array of letters in targetWord
		targetArray = targetWord.split("");
		console.log(targetArray);
		spacesLeft = targetArray.length;
	}

	var _privatePrintCorrectGuess = function(guess){
		document.getElementById("correct-guesses").innerHTML += guess;
	}

	var _privateRemoveGuessFromTargetArray = function(guess){
		targetArray.splice(targetArray.indexOf(guess), 1);				
	}

	var _privateSetSpacesLeft = function(){
		document.getElementById("spaces-left").innerHTML += spacesLeft;
	}

	var _privateHideInput = function(){
		//add the hide class to the targetWordInput so you can't enter a new word mid-game
		targetWordInput.classList.add("hide");
	}

	var _privateHideSubmitButton = function(){
		//hide submit button so that you can't submit a new word mid-game
		submitButton.classList.add("hide");
	}

	var _privateDecreaseTurnsLeft= function(){
		turnsLeft--;
		document.getElementById("turns-left").innerHTML = "Turns Left: " + turnsLeft;
		if(turnsLeft==0){
			console.log("Game Over!")
			document.getElementById("end-game").innerHTML = "GAME OVER";

		}
	}

	var _privateIncreaseTurnsLeft = function(){
		turnsLeft++;
		document.getElementById("turns-left").innerHTML = "Turns Left: " + turnsLeft;

	}

	var _privateDecreaseSpacesLeft= function(){
		spacesLeft--;
		document.getElementById("spaces-left").innerHTML = "Spaces Left: " + spacesLeft;
		if(spacesLeft==0){
			console.log("Winner!")
			document.getElementById("end-game").innerHTML = "You Win!";

		}
	}

	var _privateIncreaseSpacesLeft = function(){
		spacesLeft++;
		document.getElementById("spaces-left").innerHTML = "Spaces Left: " + spacesLeft;

	}



	var _privateShowPlayerProgress = function(){

	}

	var _privateCheckInputAgainstArray = function(guess){
		for(i=0; i<targetArray.length; i++){
			if(guess == targetArray[i]){
				console.log("MATCH");
				_privatePrintCorrectGuess(guess);
				_privateIncreaseTurnsLeft();
				_privateRemoveGuessFromTargetArray(guess);				
				_privateDecreaseSpacesLeft();			
				console.log("NEW ARRAY: " + targetArray);
				if(guess == targetArray[i]){
					console.log("MATCH");
					_privatePrintCorrectGuess(guess);
					_privateIncreaseTurnsLeft();							
					_privateRemoveGuessFromTargetArray(guess);				
					_privateDecreaseSpacesLeft();
					console.log("NEW ARRAY: " + targetArray);
				}
				//repeat for words with double, triple letters, copy past for quadruple etc

				if(guess == targetArray[i]){
					console.log("MATCH"); 				
					_privatePrintCorrectGuess(guess);
					_privateIncreaseTurnsLeft(); 				
					_privateRemoveGuessFromTargetArray(guess);				
					_privateDecreaseSpacesLeft();						
					console.log("NEW ARRAY: " + targetArray);
				}

				if(guess == targetArray[i]){
					console.log("MATCH");				
					_privatePrintCorrectGuess(guess);
					_privateIncreaseTurnsLeft(); 				
					_privateRemoveGuessFromTargetArray(guess);				
					_privateDecreaseSpacesLeft();			
					console.log("NEW ARRAY: " + targetArray);
				}
			}
			else{
				console.log("NO MATCH");
			}
		}
		//getting a double letter right will increase turnsLeft over 5 so set it to 6 then call  _privateDecraseTurnsLeft
		if(turnsLeft>5){
			turnsLeft=6;
		}

		_privateDecreaseTurnsLeft();


	}


	return{
		//public function to get target word
		pickWord: function(){
			_privateGetTargetWord();
			_privateGetLength();
			_privateHideInput();
			_privateHideSubmitButton();
		},

		setUpAnswerArray: function(){
			_privateCreateArray();
		},

		setSpacesLeft: function(){
			_privateSetSpacesLeft();
		},

		decreaseTurnsLeft(){
			_privateDecreaseTurnsLeft();
		},

		increaseTurnsLeft(){
			_privateIncreaseTurnsLeft();
		},

		showPlayerProgress: function(){
		},

		updateGameState: function(){

		},

		showAnswerAndCongratulatePlayer: function(){

		},

		checkInputAgainstArray: function(guess){
			_privateCheckInputAgainstArray(guess);
		}



	}
})();





submitButton.addEventListener("click", function(){
	Hangman.pickWord();
	Hangman.setUpAnswerArray();
	Hangman.setSpacesLeft();
	Hangman.showPlayerProgress();

});



for(i=0; i<letters.length; i++){
	var letter = letters[i];
	letter.onclick = getGuess;
}


});