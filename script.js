// Assignment Code
var generateBtn = document.querySelector("#generate");


// Random Password Character Set
var randomPassChar = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVQXYZ",
  nums: "0123456789",
  symbol: "~!@#$%^&*()-=_+[]\\{}|;':,./\"<>?",
}
/*
1. ask user how many char
    - should be 8 to 128
    - needs to be numerical 
    - userNum stores user input value
    
2. ask user what kind of char they want
     - upper, lower, symbols, numbers
     - 
3. generate password with user choices
    - use for loop to pick userNum number of char from 

*/ 

// Generates a random password with user's number input
function generatePassword() {

  var userNumber = getUserNum();
  var userPassCharSet = getUserPassChar();

  var randomPass = "";
  
  
  for(var i = 0; i < userNumber; i++) {
    var j = Math.floor(Math.random()*userPassCharSet.length);
    randomPass += userPassCharSet.charAt(j);
    console.log (randomPass); 
  }
  return randomPass;
}

function getUserNum() {
  var userNum;
  var invalidNumber = true;

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

function getUserPassChar() {
  var userPassChar = "";
  var validChar = true;
   
  do {
    var confirmCharUpper = confirm("Would you like to include upper case letters? Click OK to confirm.");
    var confirmCharLower = confirm("Would you like to include lower case letters? Click OK to confirm.");
    var confirmCharNums = confirm("Would you like to include numbers? Click OK to confirm.");
    var confirmCharSym = confirm("Would you like to include symbols? Click OK to confirm.");

    if (confirmCharUpper) {
      userPassChar += randomPassChar.upper;
    }   
    if (confirmCharLower) {
      userPassChar += randomPassChar.lower;
      console.log(userPassChar);
    }
    if (confirmCharNums) {
      userPassChar += randomPassChar.nums;
      console.log(userPassChar);
    }
     
    if (confirmCharSym) {
      userPassChar += randomPassChar.symbol;
      console.log(userPassChar);
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
