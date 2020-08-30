// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 
//These are the prompts the use will be asked once they select generate password
function generatePassword() {
  var passwordLength = prompt("How many characters would you like the password to be? Must be between 8 and 128 characters.");
  if (passwordLength >= 8 && passwordLength <= 128) {
    var lowerCase = confirm("Do you want to include lowercase characters in the password?");
    var upperCase = confirm("Do you want to include uppercase characters in the password?");
    var numbers = confirm("Do you want to include numbers in the password?");
    var special = confirm("Do you want to include special characters in the password?");
  } else {
    alert("Password must be between 8 and 128 characters.");
    return;
  }

  
  

  //minimum count for all characters
  var minCount = 0;

  //non specified minimums for all characters individually
  var minLowerCase = "" ;
  var minUpperCase = "" ;
  var minNumbers ="" ;
  var minSpecial ="" ;

  //Generator functions
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10)+48);
    },
    
    getLowerCase: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26)+97);
    },

    getUpperCase: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26)+65);
    },

    getSpecialCharacters: function () {
      var specialCharacters = "!@#$%^&*()";
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }

  };


  //checks for user selected criteria

  if (numbers === true) {
    minNumbers = functionArray.getNumbers();
    minCount++;

  }

  if (lowerCase === true) {
    minLowerCase = functionArray.getLowerCase();
    minCount++;

  }

  if (upperCase === true) {
    minUpperCase = functionArray.getUpperCase();
    minCount++;

  }

  if (special === true) {
    minSpecial = functionArray.getSpecialCharacters();
    minCount++;

  }

  //empty string for the loop below
  var randomPasswordGenerated = "";

  //loop used to get random numbers
  for (let i = 0; i < ((passwordLength) - minCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }
  
  return randomPasswordGenerated;

}