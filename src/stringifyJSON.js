// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  let result = '';
  function identifier(value){
    switch (typeof value) {
      case "boolean": 
      case "string": 
      case "number": 
        return `${value}`;
      case 'undefined':
      case 'function': 
        return "null";
      case 'object':
        if(Array.isArray(value)){
          //if the given value is an array add a open array bracket
          let arrResult = '['
          for(let i = 0; i < value.length ; i++){

          }
        }
    }
  }
  return identifier(obj);
};
