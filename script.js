// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Length of password goes here . Choose between 8 and 128 characters 
var password = window.prompt('How many characters would you like to have? (Choose between 8 and 128)');


// choose options between lowercase, uppercase, numeric, and/or special characters
var password = window.prompt('Would you like lowercase letters?');
  if (password === "yes" || password === "Yes" ||  password === "YES") {

}

var password = window.prompt('Would you like uppercase letters?');
  if (password === "yes" || password === "Yes" ||  password === "YES") {

}

var password = window.prompt('Would you like special characters?');
  if (password === "yes" || password === "Yes" ||  password === "YES") {

}


// password is displayed in on page in the box titled "your secure password"
// use id password here 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
