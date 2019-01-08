// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  
  let currIndex = 0;
  let currChar = json[currIndex];
  function nextIndex () {
    currIndex++;
  }

  // SIMPLE DATATYPES
  // translate STRING
  function checkString(input) {
    let result = "";
    if (input === "\"") {return result;}
    result += input;
  } 

  // translate BOOL 
  function checkTrue() {
    if (json.slice(currIndex, currIndex + 4) === "true") {
      currIndex += 4;
      return true;
    } else {
      throw Error;
    }
  }
  function checkFalse() {
    if (json.slice(currIndex, currIndex + 5) === "false") {
      currIndex += 5;
      return false;
    } else {
      throw Error;
    }
  }

  // translate NULL 
  function checkNull() {
    if (json.slice(currIndex, currIndex + 4) === "null") {
      currIndex += 4;
      return null;
    } else {
      throw Error;
    }
  }

  // // translate NUMBER
  // function checkNum() {
  //   if () {}
  // }



  // if (json[currIndex] === "{" && json[currIndex + 1] === "\"") {
  // // we are in an object
  // }








  // for (let i = 0; i < json.length; i++) {
  //   let firstQuotationIndex;
  //   let lastQuotationIndex;
  //   if (json[i] = "\"") {
  //     firstQuotationIndex = i;
  //   }
  // }

  // function characterIs (char) {
  //   switch (char) {
  //     case "{":
  //     // invoke objectMaker
  //     case "[":
  //     // invoke arrayMaker
  //   }
  // }

  // // objectMaker
  //   // at first instance of }, find nearest {

  // // arrayMaker
  //   // if [
  //     // create []
  //       // loop until ], slice at that index
  //       // aside from bracket characters, slice at the comma
  // function arrayMaker(char) {
  //   const result = [];

  // }


  // // VALUE
  //   /// STRING
  //   /// NUM
  //   /// OBJECT
  //   /// ARRAY 
  //   /// TRUE
  //   /// FALSE
  //   /// NULL 
};
