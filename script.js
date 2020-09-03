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

//Password character variables 
var lowerChar = 'abcdefghijklmnopqrstuvwxyz';
var lowerArray = lowerChar.split(''); //using .split to splice and return as an array
var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var upperArray = upperChar.split(''); //using .split to splice and return as an array
var numberChar = '0123456789';
var numberArray = numberChar.split(''); //using .split to splice and return as an array
var specialChar = '!@#$%^&*()?><}{~';
var specialArray = specialChar.split(''); //using .split to splice and return as an array

//Begin main function
function generatePassword() {

  //Setting empty variables to push selected criteria to and final password
  var allCharacters = [];
  var passwordResult = "";

  //Setting password length
  var passLength = prompt('How long should your password be?');
  console.log(passLength);

  //Setting password length parameters
  if(passLength <8 || passLength>128) {
    alert('Password must be between 8 and 128 characters');
  } 
  
    else {
      //confirming user criteria and if selected, add to the array allCharacters
      if(confirm('Should the password use lowercase?')) {
        //Array.prototype.push.apply is a method I read about on MDN documents I've used here to push all character arrays into the allCharacters array
        //Array = to begin the array method
        //.prototype = so far as I can tell is a way of preparing something to be pushed to the array but cannot find information on this individually (Code does not work without it)
        //.push = pushes the element into the array and returns the new length of the array
        //.apply = to call the function (I'm still not completely sure how it works but code wouldn't work without it) I'm still reading more information on this 
        Array.prototype.push.apply(allCharacters, lowerArray);
        console.log();
      }

      if(confirm('Should the password use uppercase?')) {
        Array.prototype.push.apply(allCharacters, upperArray);
        console.log();
      }

      if(confirm('Should the password use numbers?')) {
        Array.prototype.push.apply(allCharacters, numberArray);
        console.log();
      }

      if(confirm('Should the password use special characters?')) {
        Array.prototype.push.apply(allCharacters, specialArray);
        console.log();
      } 

      //Logging all selected characters while testing prior to running the for loop (for my own benefit during coding)
      console.log(allCharacters);
          
          //Loop to grab user criteria and randomly select characters for password, initially tried to use rando.js but had a little trouble implementing
          for(var i=0; i < passLength; i++){
            var random = Math.floor(Math.random() *allCharacters.length);
            passwordResult += allCharacters[random];
          }
      }
      //returning final random password to text area 
      return document.getElementById('password').innerHTML = passwordResult;
}
