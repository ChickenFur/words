$(document).ready(function () {
  englishWords = dict.split("\n")
  $('#main').removeClass("hideLoading");
  $('#loadingGif').addClass("hideLoading");
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
var buildHash = function (inputString){
  randomHash = {};
   _.each(inputString, function (value){
    if(!randomHash[value]){
      randomHash[value] = 1;
    }else{
      randomHash[value] += 1;
    }
  });
}
var checkForWords = function (){
  foundWords = [];
  for(var i = 0; i < englishWords.length; i++){
    var copyOfRandomHash = Object.create( randomHash);
    for(var k = 0; k < englishWords[i].length; k++){
      if(copyOfRandomHash[englishWords[i][k]]){
        if( copyOfRandomHash[englishWords[i][k]] === 1 ){ 
          copyOfRandomHash[englishWords[i][k]] = undefined;
        }else{
          copyOfRandomHash[englishWords[i][k]] -= 1;
        }
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
    $('.wordList').html("");
    for(var i = 0; i < foundWords.length; i++){
      $('.wordList').append("<div class='indWord'>" + foundWords[i]+  "</div>");
    }
  });
}
