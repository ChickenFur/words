var makeNode = function (name){
  return {name: name,  isWord: false,  children: [] };
}

var getWords = function(){
  $.ajax({url:"/words",
          success: function(data){
            data = data.toLowerCase();
            arrayOfWords = data.split("\n")
            trieStructure = buildTrieStructure(arrayOfWords);
          }});
};

var buildTrieStructure = function(wordArray){
  var parentNode = makeNode("mothernode");
  for(var i = 0; i < wordArray.length; i++){
    placeWord(parentNode, wordArray[i], 1);
  }
  return parentNode;
};

var placeWord = function(node, word, letter){
  var nodeChars = word.slice(0, letter)
  var nodeNumber = findNode(node.children, nodeChars);
  if(nodeNumber === false){
    node.children.push( makeNode(nodeChars) ) ;
    if(letter < word.length){
      placeWord(node.children[node.children.length-1], word, (letter+1) );
    }else{
      node.isWord = true;
      return;
    }    
  }else{
    if( letter === word.length ){
      //allready found
      return;
    }
    placeWord(node.children[nodeNumber], word, (letter+1) );
  }
};

var findNode = function(childrenArray, chars){
  result = false;
  for(var i = 0; i < childrenArray.length; i++){
    if (childrenArray[i].name.indexOf(chars) === 0){
      result = i;
    }
  }
  return result;
};