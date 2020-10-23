// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Various Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variables 
var confirmPasswordLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var confirmPasswordLength = (prompt("How many characters would you like your password to contain?"));
  
  // Loop if answer is outside the criteria 
  while(confirmPasswordLength < 8 || confirmPasswordLength > 128) {
      alert("Your password must contain at least 8 to 128 characters. Please try again.");
      var confirmPasswordLength = (prompt("How many characters would you like your password to contain?"));
      } 

      // Repeat back how many charactes the user will have  
      alert(`Your password will have ${confirmPasswordLength} characters.`);

    // Determine criteria of password 
    var confirmSpecialCharacter = confirm("Click OK to confirm including special characters.");
    var confirmNumericCharacter = confirm("Click OK to confirm including numeric characters.");    
    var confirmLowerCase = confirm("Click OK to confirm including lowercase characters.");
    var confirmUpperCase = confirm("Click OK to confirm including uppercase characters.");

      // Loop if answer is outside the critera 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {

        alert("You must choose at least one criteria");

        var confirmSpecialCharacter = confirm("Click OK to confirm including special characters.");
        var confirmNumericCharacter = confirm("Click OK to confirm including numeric characters.");    
        var confirmLowerCase = confirm("Click OK to confirm including lowercase characters.");
        var confirmUpperCase = confirm("Click OK to confirm including uppercase characters.");   
    } 

    var passwordCharacters = []
    // Password if statements
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      console.log(passwordCharacters)

      // Empty string to be filled based on for loop selecting random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < confirmPasswordLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



