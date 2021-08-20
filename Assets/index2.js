// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var passwordLength = window.prompt(
    "How many characters would you like to have? (Choose between 8 and 128)"
  );

  if (passwordLength >= 8 && passwordLength <= 128) {
    function generatePassword() {
      var passwordUpper = window.confirm("Would you like uppercase letters?");
      var passwordLower = window.confirm("Would you like lowercase letters?");
      var passwordNumeric = window.confirm("Would you like to add numbers?");
      var passwordSpecial = window.confirm(
        "Would you like special characters?"
      );

      var emptyString = "";
      var passwordUpper = "ABCDEFGHIJKLMNOPQRSTUVQYXZ";
      var passwordLower = "abcdefghijklmnopqrstuvwxyz";
      var passwordNumeric = "0987654321";
      var passwordSpecial = '!@#$%^&*()_+={}[]|?/><:;"';

      if (passwordUpper === true) {
        emptyString += passwordUpper;
      }
      if (passwordLower === true) {
        emptyString += passwordLower;
      }
      if (passwordNumeric === true) {
        emptyString += passwordNumeric;
      }
      if (passwordSpecial === true) {
        emptyString += passwordSpecial;
      }
      console.log (emptyString)
      var password = "";
      for (var i = 0; i < passwordLength; i++) {
        password += emptyString.charAt(
          Math.floor(Math.random() * emptyString.length)
        );
      }
      console.log("inside generate password");
      console.log(password);
      return password;
    }

    generatePassword()
  } else {
    window.alert("Password must be between 8 and 128 characters.");
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
