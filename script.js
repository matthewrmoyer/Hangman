$(document).ready(function(){

var submitButton = document.getElementById("target-word-submit-button");



//hangman module

var Hangman = (function(){
	var _privateGetTargetWordFunction = function(){
		var submitButton = document.getElementById("target-word-submit-button");
		var x = document.getElementById("target-word-input").value;
		console.log(x);
	}

	return{
		getGuess: function(){
			_privateGetTargetWordFunction();
		}
	}
})();

submitButton.addEventListener("click", function(){
	Hangman.getGuess();
});
});