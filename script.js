// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var emptyArr = ""
var lowerArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','y','z']
var upperArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numericArr = ['1','2','3','4','5','6','7','8','9','0']
var specialArr = ['@','$','&','!','#','%','^','*','+','=','?','<','>']

function writePassword() {
  
  // Length of password goes here . Choose between 8 and 128 characters 
  var passwordLength = window.prompt('How many characters would you like to have? (Choose between 8 and 128)');
  
  if (passwordLength < 8){
    window.alert ("Password must be at least 8 characters.")
    var passwordLength = window.prompt('How many characters would you like to have? (Choose between 8 and 128)');
  }
  else {
    window.alert ("You have chosen " + passwordLength + " characters.") 
  }
  if (passwordLength > 128) {
    window.alert ("Password cannot be over 128 characters.")
    var passwordLength = window.prompt('How many characters would you like to have? (Choose between 8 and 128)');
  }


var selectedCharacters = []

// choose options between lowercase, uppercase, numeric, and/or special characters
  var passwordLower = window.confirm('Would you like lowercase letters?');
  if (passwordLower === true) {
    selectedCharacters.push(lowerArr)
  }
  else {
    window.alert ("You have denied lowercase letters.")
  }

  var passwordUpper = window.confirm('Would you like uppercase letters?');
  if (passwordUpper === true) {
    selectedCharacters.push(upperArr)
  }
  else {
    window.alert ("You have denied uppercase letters.")
  }

  var passwordNumeric = window.confirm('Would you like to add numbers?');
  if (passwordNumeric === true) {
    selectedCharacters.push(numericArr)
  }
  else {
    window.alert ("You have denied numeric characters.")
  }

  var passwordSpecial = window.confirm('Would you like special characters?');
  if (passwordSpecial === true) {
    selectedCharacters.push(specialArr)
  }
  else {
    window.alert ("You have denied special characters.")
  }

  console.log (selectedCharacters)

 


  var randomPassword = [selectedCharacters]
  var randomPassword = Math.floor(Math.random() * randomPassword.length);
  console.log(randomPassword);


return "random password"
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



