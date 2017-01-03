$(document).ready(function(){

//global variables
var submitButton = document.getElementById("target-word-submit-button");
var letters = document.getElementsByClassName("letter");
var targetWordInput = document.getElementById("target-word-input");
var targetWord;
var targetWordLength;
var targetArray;
var turnsLeft = 5;


//TODO make this private, but cant figure out how to set "this" to letter
function getGuess(){
	var guess = (this.innerHTML);
	console.log(guess);
	Hangman.checkInputAgainstArray(guess);
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

	var _privateShowPlayerProgress = function(){

	}

	var _privateCheckInputAgainstArray = function(guess){
		for(i=0; i<targetArray.length; i++){
			if(guess == targetArray[i]){
				console.log("MATCH");
				document.getElementById("correct-guesses").innerHTML += guess;
				_privateIncreaseTurnsLeft();			
				targetArray.splice(targetArray.indexOf(guess), 1);
				console.log("NEW ARRAY: " + targetArray);
							if(guess == targetArray[i]){
				console.log("MATCH");
				document.getElementById("correct-guesses").innerHTML += guess;
				_privateIncreaseTurnsLeft();			
				targetArray.splice(targetArray.indexOf(guess), 1);
				console.log("NEW ARRAY: " + targetArray);
				if(targetArray.length==0){
					document.getElementById("end-game").innerHTML = "YOU WIN!!!";
				}

			}
			//repeat for words with double, triple letters
						if(guess == targetArray[i]){
				console.log("MATCH");
				document.getElementById("correct-guesses").innerHTML += guess;
				_privateIncreaseTurnsLeft();			
				targetArray.splice(targetArray.indexOf(guess), 1);
				console.log("NEW ARRAY: " + targetArray);
				if(targetArray.length==0){
					document.getElementById("end-game").innerHTML = "YOU WIN!!!";
				}

			}
						if(guess == targetArray[i]){
				console.log("MATCH");
				document.getElementById("correct-guesses").innerHTML += guess;
				_privateIncreaseTurnsLeft();			
				targetArray.splice(targetArray.indexOf(guess), 1);
				console.log("NEW ARRAY: " + targetArray);
				if(targetArray.length==0){
					document.getElementById("end-game").innerHTML = "YOU WIN!!!";
				}

			}
				if(targetArray.length==0){
					document.getElementById("end-game").innerHTML = "YOU WIN!!!";
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
	Hangman.showPlayerProgress();

});



for(i=0; i<letters.length; i++){
	var letter = letters[i];
	letter.onclick = getGuess;
}


});