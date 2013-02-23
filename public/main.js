var hashTableOfWords = {};
var arrayOfWords = [];
var foundWords = [];

var getWords = function(){
  $.ajax({url:"/words",
          success: function(data){
            data = data.toLowerCase();
            arrayOfWords = data.split("\n")
            hashTableOfWords = formatWords(arrayOfWords);
          }});
};

var formatWords = function(wordArray){
  for(var i = 0; i < wordArray.length; i++){
    hashTableOfWords[wordArray[i].toLowerCase()] = true;
  }
  return hashTableOfWords;
};

var wordsInString = function(testString) {


  for(var i = 0; i < arrayOfWords.length; i++){
    var checkingString = testString;
    var wordExists = false; 
    //debugger;  
    console.log("checking: ", arrayOfWords[i])
    for ( var k = 0; k < arrayOfWords[i].length; k++){
      var charLocation = testString.indexOf(arrayOfWords[i][k]);
      if (charLocation === -1){
        wordExists = false;
        break;
      }
      //checkingString = checkingString.replace(checkingString[charLocation], "")
      if (arrayOfWords[i].length === (k + 1) ){
        wordExists = true;
      }
    if(wordExists){
      displayWord(arrayOfWords[i]);
    }
    }
  }

};

var displayWord = function(word){
  foundWords.push(word);
  //$('.words').append("<br><span>"+ word + "</span>")

};

$(document).ready(function () {

getWords();

$('.submit').on("click", function () {
  wordsInString( $('#submissionString').val() );
});

})
