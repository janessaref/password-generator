// Assignment Code
var generateBtn = document.querySelector("#generate");


// Random Password Character Set
var randomPassChar = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVQXYZ",
  nums: "012345678909123456789",
  symbol: "~!@#$%^&*()-=_+[]\\{}|;':,./\"<>?",
}

/*
GUIDE FOR RANDOM PASSWORD GENERATOR
  1. ask user how many characters they want for their password
    - should be 8 to 128
    - needs to be numerical input value (if not, loop question)
    - store user's choice in variable
    
  2. ask user what type of characters they want
     - upper, lower, symbols, and/or numbers (one of each must be present)
     - if none were selected, loop the questions

  3. generate password with user's selection (number of preferred characters and types of characters)
    - use the for loop to generate the random password with the user's number input variable and the user's selected character types variable
    - be sure that all character types are present 
    - shuffle the newly generated password
*/ 


// Generates a random password with user's number input and password character set
function generatePassword() {

  // Obtain the user's selected number of characters
  var userNum;
  var invalidNumber = true;
  
  // Loops the series of questions until user input is a valid number between 8 to 128 characters
  while (invalidNumber) {

    userNum = prompt("How many characters would you like for your password?");

    if (isNaN(userNum) || userNum === null) {
      alert("Invalid input! Must put a number!");
      invalidNumber = true;  
    }

    else if (userNum < 8 || userNum > 128) {
      alert("Password length must be a number between 8 to 128!");
      invalidNumber = true;
    }

    else if (userNum >=8 && userNum <=128) {
      invalidNumber = false;     
    }
  }

  // Obtain the user's selected character types
  var userPassChar = "";
  var validChar = true;

  // Ensures that each character type is present in the password
  var upperStr = "";
  var lowerStr = "";
  var numberStr = "";
  var symbolStr = "";
   
  // Loops a series of questions until user selects at least one character type
  do {
    var confirmCharUpper = confirm("Would you like to include uppercase letters? Click OK to confirm.");
    var confirmCharLower = confirm("Would you like to include lowercase letters? Click OK to confirm.");
    var confirmCharNums = confirm("Would you like to include numbers? Click OK to confirm.");
    var confirmCharSym = confirm("Would you like to include symbols? Click OK to confirm.");

    if (confirmCharUpper) {
      userPassChar += randomPassChar.upper;
      upperStr += randomPassChar.upper;
    }   
    if (confirmCharLower) {
      userPassChar += randomPassChar.lower;
      lowerStr += randomPassChar.lower;
      
    }
    if (confirmCharNums) {
      userPassChar += randomPassChar.nums;
      numberStr += randomPassChar.nums;
    }
     
    if (confirmCharSym) {
      userPassChar += randomPassChar.symbol;
      symbolStr += randomPassChar.symbol;
    }

    if (confirmCharUpper === false && confirmCharLower === false && confirmCharNums === false && confirmCharSym === false) {
      alert("Must select at least one character type! Try again!");
      validChar = false;
    }
     else {
      validChar = true;
    } 
  } while (!validChar);


  // Variable that will collect one character per type
  var oneCharacterEach= ""

  // Randomly picks up one character per type
  for(var i = 0; i < 1; i++) {
  var oneUpper = Math.floor(Math.random()*upperStr.length);
   oneCharacterEach += upperStr.charAt(oneUpper);
  }
  for(var j = 0; j < 1; j++) {
  var oneLower = Math.floor(Math.random()*lowerStr.length);
   oneCharacterEach += lowerStr.charAt(oneLower);
  }
  for(var k = 0; k < 1; k++) {
  var oneNumber = Math.floor(Math.random()*numberStr.length);
   oneCharacterEach += numberStr.charAt(oneNumber);
  }
  for(var l = 0; l < 1; l++) {
  var oneSymbol = Math.floor(Math.random()*symbolStr.length);
   oneCharacterEach += symbolStr.charAt(oneSymbol);
  }

  // Converts the string into an array to modify user number 
  var eachCharacterArray = oneCharacterEach;  
  var newUserNum = (userNum - eachCharacterArray.split("").length);
  
  // For loop that randomizes and generates user's inputs and includes the guaranteed character type for each
  var randomPassword = "";

  for(var m = 0; m < newUserNum; m++) {
    var n = Math.floor(Math.random()*userPassChar.length);
    randomPassword += (userPassChar.charAt(n));
    var newRandomPassword = randomPassword.toString();
    newRandomPassword += oneCharacterEach; 
  }

  // Shuffles the newly generated password to change order
  // Assures that the two added strings will now be randomized again
  var newRandomPassword = newRandomPassword.split('').sort(function(){return 0.5-Math.random()}).join('');

  // Pushes the final password to display on the screen
  return newRandomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
