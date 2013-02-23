var makeTrieStructure = function () {
  var trieStruct = {
                      parentNode: {},
                      makeNode: function (name){
                        return {name: name,  isWord: false,  children: [] };
                      },
                      populate: function(wordArray){
                        this.parentNode = this.makeNode("mothernode");
                        for(var i = 0; i < wordArray.length; i++){
                          this.placeWord(this.parentNode, wordArray[i], 1);
                        }
                      },  
                      placeWord: function(node, word, letter){
                        var nodeChars = word.slice(0, letter)
                        var nodeNumber = this.findNode(node.children, nodeChars);
                        
                        if(nodeNumber === false){
                          node.children.push( this.makeNode(nodeChars) ) ;
                          if(letter < word.length){
                            this.placeWord(node.children[node.children.length-1], word, (letter+1) );
                          }else{
                            node.children[node.children.length-1].isWord = true;
                            return;
                          }    
                        }else{
                          if( letter === word.length ){
                            return;
                          }
                          this.placeWord(node.children[nodeNumber], word, (letter+1) );
                        }
                      },
                      findNode: function(childrenArray, chars){
                        result = false;
                        for(var i = 0; i < childrenArray.length; i++){
                          if (childrenArray[i].name.indexOf(chars) === 0){
                            result = i;
                          }
                        }
                        return result;
                      }
                  }
  return trieStruct;
};

