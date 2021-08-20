var generateBtn = document.querySelector("#generate");


    var emptyString = "";
      var stringUpper = "ABCDEFGHIJKLMNOPQRSTUVQYXZ";
      var stringLower = "abcdefghijklmnopqrstuvwxyz";
      var stringNumeric = "0987654321";
      var stringSpecial = '!@#$%^&*()_+={}[]|?/><:;"';

function writePassword() { 
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


// choose options between lowercase, uppercase, numeric, and/or special characters
  var passwordLower = window.confirm('Would you like lowercase letters?');
  if (passwordLower === true) {
    selectedCharacters.push(lowerArr)
  }

  var passwordUpper = window.confirm('Would you like uppercase letters?');
  if (passwordUpper === true) {
    selectedCharacters.push(upperArr)
  }

  var passwordNumeric = window.confirm('Would you like to add numbers?');
  if (passwordNumeric === true) {
    selectedCharacters.push(numericArr)
  }


  var passwordSpecial = window.confirm('Would you like special characters?');
  if (passwordSpecial === true) {
    selectedCharacters.push(specialArr)
  }


  console.log (selectedCharacters)

 


  var randomPassword = [selectedCharacters]
  var randomPassword = Math.floor(Math.random() * randomPassword.length);
  console.log(randomPassword);


return "random password"
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

