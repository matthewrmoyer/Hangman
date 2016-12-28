$(document).ready(function(){

//global variables
var submitButton = document.getElementById("target-word-submit-button");
var targetWordInput = document.getElementById("target-word-input");
var targetWord;
var targetWordLength;
var targetArray;

//hangman module

var Hangman = (function(){

	//get the target word from input
	var _privateGetTargetWordFunction = function(){
		//set target word to value of input
		targetWord = document.getElementById("target-word-input").value;
	}

	var _privateGetLength = function(){
		targetWordLength = targetWord.length;
		console.log(targetWordLength);
	}	

	var _privateCreateArray = function(){
		targetArray = targetWord.split("");
		console.log(targetArray);
	}

	var _privateHideInput = function(){
		targetWordInput.classList.add("hide");
	}

	var _privateHideSubmitButton = function(){
		submitButton.classList.add("hide");
	}



	return{
		//public function to get target word
		pickWord: function(){
			_privateGetTargetWordFunction();
			_privateGetLength();
			_privateHideInput();
			_privateHideSubmitButton();
			_privateCreateArray();
		}
	}
})();





submitButton.addEventListener("click", function(){
	Hangman.pickWord();
	console.log(targetWord);
});




});