
//////////////////PROBLEM 1////////////////////
/*
  Create a function called 'sum' that takes in two parameters, 'num1' and 'num2'. 
  The function should return the sum of the two parameters.
*/
function sum(num1, num2){
  return num1+num2;
}


//////////////////PROBLEM 2////////////////////
/*
  Create a function called 'greaterThanFive' that takes in a single parameter called 'number'. 
  Check to see if 'number' is greater than 5.
  If it is, return a true boolean. 
  If it's not, return a false boolean.
*/
function greaterThanFive(number){
  let bool;
  if(number>5)
  {
    bool=true;
    return bool;
  }
  else
  {
    bool=false;
    return bool;
  }
}

//////////////////PROBLEM 3////////////////////
/*
  Create a function called 'findZWords' that takes in one parameter, 'word'. 
  Your function should check to see if the name begins with the letter "Z"
  If the name does begin with Z, return the string: 'the name begins with Z'. 
  If the name does not begin with Z, return the string: 'the name does not begin with Z'.
*/

function findZWords(word){
  if(word.charAt(0) === "Z")
  {
    return "the name begins with Z";
  }
  else
  {
    return "the name does not begin with Z"
  }
}
console.log(findZWords("Zain"));
//////////////////PROBLEM 4////////////////////
/*
  Create a function called 'iLove' that takes in two string parameters, 'name' and 'love'. 
  Have the function take the two parameters and return a string that says 
  "NAMEPARAM loves LOVEPARAM" with the appropriate parameters in the string. e.g. "Joseph loves music"
*/
function iLove(name, love){
  return name + " loves " + love;
}
