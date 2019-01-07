// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  let result = '';
  function identifier(value){
    switch (typeof value) {
      case "string": 
      return `"${value}"`;
      case "boolean": 
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
            if(i === value.length - 1){
              arrResult += identifier(value[i]);
            }else{
              arrResult += identifier(value[i]) + ',';
            }
          }
          arrResult += ']';
          return arrResult;
        }
        if(value === null){
          return 'null';
        }
        let objectResult = '{';
        for (let prop in value) {
          if (typeof value[prop] !== "function" && typeof value[prop] !== "undefined") {
            if (prop === Object.keys(value)[Object.keys(value).length - 1]) {
              objectResult += `"${prop}":${identifier(value[prop])}`;
            } else {
            objectResult += `"${prop}":${identifier(value[prop])},`;
            }
          }
        }
        objectResult += '}';
        return objectResult; 
    }
  }
  return identifier(obj);
};
