var trieStructure = makeTrieStructure();
var foundWords = [];

//Get the words from the website and populate our trieStructure
var getWords = function(){
  $.ajax({url:"/words",
          success: function(data){
            data = data.toLowerCase();
            arrayOfWords = data.split("\n")
            trieStructure.populate(arrayOfWords);
          }});
};


//
//add listener
//
$(document).ready(function () {

  //gets the words and builds the trieStructure Data object for searching
  getWords();

  $('.submit').on("click", function () {
    wordsInString( $('#submissionString').val() );
  });

})

