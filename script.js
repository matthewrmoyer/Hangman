$(document).ready(function(){

//global variables
var submitButton = document.getElementById("target-word-submit-button");
var letter = document.getElementsByClassName("letter");
var targetWordInput = document.getElementById("target-word-input");
var targetWord;
var targetWordLength;
var targetArray;
var guess;

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

	var _privateGetGuess = function(){
		    letter[i].addEventListener('click', function(){
		    	guess = this.innerHTML;
    	for(i=0;i<=targetArray.length;i++){
    		if(guess == targetArray[i]){
    			console.log("match");
    		} else {
    		}
    	}


    });

	}

	var _privateShowPlayerProgress = function(){
		i = 5;
		
		if(i>0){
		document.getElementById("turns-left").innerHTML += i;
		i--;
	}
	}

	var _privateCheckInputAgainstArray = function(){
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

		getGuess: function(){
			_privateGetGuess();

		},

		checkGuess: function(){
			_privateCheckInputAgainstArray();
		},

		showPlayerProgress: function(){
			_privateShowPlayerProgress();
		},

		updateGameState: function(){

		},

		showAnswerAndCongratulatePlayer: function(){

		}



	}
})();





submitButton.addEventListener("click", function(){
	Hangman.pickWord();
	Hangman.setUpAnswerArray();
	Hangman.showPlayerProgress();
});



for (var i = 0; i < letter.length; i++) {
	Hangman.getGuess();

}

});