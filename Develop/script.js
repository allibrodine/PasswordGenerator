//Array for characters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = [" ", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "'", "+", "=", ",", "-", "_", ".", "<", ">", "?", "/", "{", "}", "~", "`", "|"];

// targets generate id, i.e. red button
var generateBtn = document.querySelector("#generate");

//function to generate password
function generatePassword () {
  //prompt user for password criteria (8-128 char, upper/lower/num/speChar)
  var passwordLength = prompt("How long would you like your password to be?");
    if (passwordLength < 8) {
      prompt("You must choose at least 8 characters.")
    }
    if (passwordLength > 128) {
      prompt("You cannot choose more than 128 characters.")
    }
  var chooseUpper = prompt("Would you like to include uppercase letters?");
    if (chooseUpper === "yes")

  var chooseLower = prompt("Would you like to include lowercase letters?");
    if (chooseLower === "yes")

  var chooseNum = prompt("Would you like to include numbers?");
    if (chooseNum === "yes")

  var chooseSpecialChar = prompt("Would you like to include special characters?")
    if (chooseSpecialChar === "yes")
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

