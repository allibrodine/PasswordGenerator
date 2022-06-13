// targets generate id, i.e. red button
var generateBtn = document.querySelector("#generate");

//function to generate password
function generatePassword () {
  //prompt user for password criteria (8-128 char, upper/lower/num/speChar)

  //validate input

  //generate password

  //display password
  return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //card where password is displayed
  var passwordText = document.querySelector("#password");
  //displayed password
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

