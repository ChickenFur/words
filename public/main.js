$(document).ready(function () {
  getWords();
  $('.submit').on("click", function () {
    randomHash = {};
    buildHash( $('#submissionString').val() );
    checkForWords();
    $('.results').html("");
    $('.results').append("Number of Words Found: ", (foundWords.length-1) );
    $('.results').append("<input id='showWords' type='button' value='Show Words'/>");
    $('.results').append("<div class='wordList'></div>")
    addShowWordsListener();
  });


})
var englishWords = [];
var randomHash = {};
var foundWords = [];

//Get the words from the website and populate our trieStructure
var getWords = function(){
  $.ajax({url:"/words",
          success: function(data){
            data = data.toLowerCase();
            englishWords = data.split("\n")
          }});
};
var buildHash = function (inputString){
   _.each(inputString, function (value){
    if(!randomHash[value]){
      randomHash[value] = 1;
    }else{
      randomHash[value] += 1;
    }
  });
}
var checkForWords = function (){
  for(var i = 0; i < englishWords.length; i++){
    for(var k = 0; k < englishWords[i].length; k++){
      if(randomHash[englishWords[i][k]]){
        if(k === (englishWords[i].length -1) ){
          foundWords.push(englishWords[i]);       
        }
      }else{
        break;
      }
    }
  }
};

var addShowWordsListener = function (){
  $('#showWords').on("click", function(){
    for(var i = 0; i < foundWords.length; i++){
      $('.wordList').append("<div class='indWord'>" + foundWords[i]+  "</div>");
    }
  });
}
