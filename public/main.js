var trieStructure = {};
var foundWords = [];

$(document).ready(function () {
  
  //gets the words and builds the trieStructure Data object for searching
  getWords();

  $('.submit').on("click", function () {
    wordsInString( $('#submissionString').val() );
  });

})

