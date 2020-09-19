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
     - upper, lower, symbols, and/or numbers
     - if none were selected, loop the questions

  3. generate password with user's selection (number of preferred characters and types of characters)
    - use the for loop to generate the random password with the user's number input variable and the user's selected character types variable
*/ 

// Generates a random password with user's number input and password character set
function generatePassword() {

  var userNumber = getUserNum();
  var userPassCharSet = getUserPassChar();

  var randomPass = "";
  
  // for loop that randomizes and generates user's inputs
  for(var i = 0; i < userNumber; i++) {
    var j = Math.floor(Math.random()*userPassCharSet.length);
    randomPass += userPassCharSet.charAt(j);
    console.log (randomPass); 
  }
  return randomPass;
}

// Obtain the user's selected number of characters
function getUserNum() {
  var userNum;
  var invalidNumber = true;
  
  // loops the series of questions until user input is a valid number between 8 to 128 characters
  while (invalidNumber) {

    userNum = prompt("How many characters do you want for your password?");

    if (isNaN(userNum) || userNum === null) {
      alert("Invalid input! Must put a number!");
      invalidNumber = true;  
    }

    else if (userNum < 8 || userNum > 128) {
      alert("Must select a number between 8 to 128!");
      invalidNumber = true;
    }

    else if (userNum >=8 && userNum <=128) {
      invalidNumber = false;     
    }
  }
    return userNum;
}

// Obtain the user's selected types of characters
function getUserPassChar() {
  var userPassChar = "";
  var validChar = true;

  var upperStr = "";
  var lowerStr = "";
  var numberStr = "";
  var symbolStr = "";
   
  // loops series of questions until user select's at least one character type
  do {
    var confirmCharUpper = confirm("Would you like to include upper case letters? Click OK to confirm.");
    var confirmCharLower = confirm("Would you like to include lower case letters? Click OK to confirm.");
    var confirmCharNums = confirm("Would you like to include numbers? Click OK to confirm.");
    var confirmCharSym = confirm("Would you like to include symbols? Click OK to confirm.");

    if (confirmCharUpper) {
      userPassChar += randomPassChar.upper;
      upperStr += randomPassChar.upper;
      console.log(upperStr);
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
      alert("Must select at least one character type!");
      validChar = false;
    } else {
      validChar = true;
    } 
  } while (!validChar);
      return userPassChar;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
