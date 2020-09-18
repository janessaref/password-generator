// Assignment Code
var generateBtn = document.querySelector("#generate");
var userNum;


// Random Password
var randomPassChar = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVQXYZ",
  num: "0123456789",
  symbol: "~!@#$%^&*()-=_+[]\{}|;':,./<>?",
}
for (var i = 0; i < length; i++) {

  // var i = Math.floor(Math.random()*randomPass.length);
       
}
// other option test
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
    
  
    if (userNum < 8) {
      alert("Must be 8 characters long!");
      invalidInput = true;
    }
    else if (userNum > 128) {
      alert("Must be less than 128 characters");
    }
    else if (userNum >= 8 <= 128) {
      pass.choices();
    }
    else if (pass.choices === false) {
      pass.choices.need();
    }

  }
  // write step 2
  // write step 3

  // var randomPassChar = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
  // randomPass = "";
  // for (var i = 0; i < randomPassChar.length; i++) {
  //     var i = Math.floor(Math.random()*randomPassChar.length);
  //     randomPass += randomPassChar.charAt(i);
  // }
  // return "hello";
  
}

var pass = {

  // less : function () {
  //   alert("Must be 8 characters long!");
  // },
  // more : function () {
  //   alert("Must be less than 128 characters");
  // },
  choices : function () {
    confirm("would you like to include upper case letters? click ok to confirm.");

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


// Loop
while (userNum !== /^[0-9]+$/) {

  userNum = prompt("how many char?");
  

  if (userNum < 8) {
    alert("Must be 8 characters long!");
  }
  else if (userNum > 128) {
    alert("Must be less than 128 characters");
  }
  else if (userNum >= 8 <= 128) {
    pass.choices();
  }
  else if (pass.choices === false) {
    pass.choices.need();
  }

}
