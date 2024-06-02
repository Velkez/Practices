// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence 
// "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  let array1;
  let array2;
  //Array that content alphabet
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphabetToArray = alphabet.split('');
  
  //This line delete the repeat letters with [...new Set(array)]. Convert to lower case 
  //and from string to array with string.toLowerCase().split(''). And finally order the 
  //array with sort()
  let stringToArray = [...new Set(string.toLowerCase().split('').sort())];
  let filterStringToArray = filterArray(stringToArray);
  
  //store the arrays for better code reading
  array1 = alphabetToArray;
  array2 = filterStringToArray;
  
  //Compare the two arrays
  let confirm = array1.every((element, i) => element === array2[i]);
  
  return confirm;
}


//function to filter array
function filterArray(array) {
  //filter variable
  let filter;
  //array tha content the special character
  const specialCharacter = [
    '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>',
    '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', ' '
  ];
  //filter the array
  filter = array.filter(element => {
    return !specialCharacter.some(char => element.includes(char));
  });
  
  return filter;
}

//OTHER METHOT

function isPangram(string){
  //Array that content alphabet
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphabetToArray = alphabet.split('');
  
  //convert string to array with out special character  .,""''?! and order this
  let stringToArray = [...new Set(string.toLowerCase().split('').filter(element => !/[ .,""''?!]/.test(element)).sort())];
  
  //Compare the two arrays
  let confirm = alphabetToArray.every((element, i) => element === stringToArray[i]);
  
  
  return confirm;
}

//OTHER OPTION

function isPangram(string){
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  let letters = [...new Set(string.toLowerCase().match(/[a-z]/gi).sort())];
  return alphabet.every((element, i) => element === letters[i]);
}