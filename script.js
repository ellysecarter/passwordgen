// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lowerArr = ['a','b','c']
var upperArr = ['A', 'B', 'C']
var numericArr = ['1','2','3']
var specialArr = ['@','$','&']

function generatePassword() {
  

  // Length of password goes here . Choose between 8 and 128 characters 
  var passwordLength = window.prompt('How many characters would you like to have? (Choose between 8 and 128)');
  
  if (passwordLength < 8){
    window.alert ("Password must be at least 8 characters.")
    return
  }

  if (passwordLength > 128) {
    window.alert ("Password cannot be over 128 characters.")
    return
  }

var selectedCharacters = []

// choose options between lowercase, uppercase, numeric, and/or special characters
  var passwordLower = window.confirm('Would you like lowercase letters?');
  if (passwordLower === true) {
    selectedCharacters.push(...lowerArr)
  }

  var passwordUpper = window.confirm('Would you like uppercase letters?');
  if (passwordUpper === true) {
    selectedCharacters.push(...upperArr)
  }

  var passwordNumeric = window.confirm('Would you like to add numbers?');
  if (passwordNumeric === true) {
    selectedCharacters.push(...numericArr)
  }

  var passwordSpecial = window.confirm('Would you like special characters?');
  if (passwordSpecial === true) {
    selectedCharacters.push(...specialArr)
  }

  console.log (selectedCharacters)

// password is displayed in on page in the box titled "your secure password"
// use id password here 

return "random password here"
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
