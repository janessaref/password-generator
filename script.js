// Assignment Code
var generateBtn = document.querySelector("#generate");
var userNum;



// Random Password
var randomPassChar = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVQXYZ",
  nums: "0123456789",
  symbol: "~!@#$%^&*()-=_+[]\{}|;':,./<>?",
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
function generatePassword() {

  var userPassChar = "";
  
// this is step 1 in pseudocode
  var invalidInput = true;

  while (invalidInput) {

    userNum = prompt("how many char?");
      // console.log(UserNum);

    if (isNaN(userNum) || userNum === null) {
      return alert("Invalid input! Must put a number!");
      invalidInput = true;  
    }

    else if (userNum < 8 || userNum > 128) {
      return alert("Must select a number between 8 to 128!");
      invalidInput = true;
    }

    else if (userNum >=8 && userNum <=128) {
      invalidInput = false;     
    }

    var confirmCharUpper = confirm("Would you like to include upper case letters? Click OK to confirm.");
    var confirmCharLower = confirm("Would you like to include lower case letters? Click OK to confirm.");
    var confirmCharNums = confirm("Would you like to include numbers? Click OK to confirm.");
    var confirmCharSym = confirm("Would you like to include symbols? Click OK to confirm.");
  
      if (confirmCharUpper === true) {
        userPassChar += randomPassChar.upper;
        console.log(userPassChar);
      }   
      if (confirmCharLower === true) {
        userPassChar += randomPassChar.lower;
        console.log(userPassChar);
      }
      if (confirmCharNums === true) {
        userPassChar += randomPassChar.nums;
        console.log(userPassChar);
      }
       
      if (confirmCharSym === true) {
        userPassChar += randomPassChar.symbol;
        console.log(userPassChar);
      }
      else if (confirmCharUpper === false && confirmCharLower === false && confirmCharNums === false && confirmCharSym === false) {
        return alert("Must select at least one character type!");
      }    
      
  }
  // write step 2
  // write step 3

  var randomPass = "";
  
  for(var i = 0; i < userNum; i++) {
    var j = Math.floor(Math.random()*userPassChar.length);
    randomPass += userPassChar.charAt(j);
    // console.log (randomPass);
    
  }
}

var pass = {

  choices : function () {
    confirm("would you like to include upper case letters? click ok to confirm.");
    if (x == true) {
      randomPassChar.upper = randomPassChar.upper;
      console.log(randomPassChar.upper);
    }


    confirm("would you like to include lower case letters? click ok to confirm.");
    confirm("would you like to include numbers? click ok to confirm.");
    confirm("would you like to include special characters? click ok to confirm.");
  },
  need : function () {
    alert ("must select at least one character type")
    
  },
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



    

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
