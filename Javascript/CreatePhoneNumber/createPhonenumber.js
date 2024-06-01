// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// example: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
  let firstPart;
  let secondPart;
  let thirdPart;
  
  //firs part of phone number (000)
  firstPart = numbers.slice(0, 3).join('');
  //second part of phone number 000-
  secondPart = numbers.slice(3, 6).join('');
  //third part of number phone 0000
  thirdPart = numbers.slice(6).join('');

  // give format with string Interpolation
  let phoneNumber = `(${firstPart}) ${secondPart}-${thirdPart}`;
  
  return phoneNumber;
}