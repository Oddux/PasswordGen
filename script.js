// Assignment Code
//Create arrays for characters
//Pull random letters and numbers from character arrays to password arrays


var generateBtn = document.querySelector("#generate");
var passwordLength = 8;
var inUseChars = []; 
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "=", ":", ";", "?", "/", ">", "<", ".", ];
var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
var numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ];

function generatePassword () {
  var password = "";
  for(var i = 0; i < passwordLength; i++) {
    var randomChoise = Math.floor(Math.random() * inUseChars.length);
    password = password + inUseChars[randomChoise];
  }
  return password;
}


function userInputs(){
  passwordLength = parseInt(prompt("How long do you want your password, from 8 to 128 characters in length?"));
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Your password length must be a whole number between 8 and 128 characters. Please try again.");
    return false;
  }
  if (confirm("Should your password contain lowercase letters?")) {
    inUseChars = inUseChars.concat(lowerCaseChars);
  }
  if (confirm("Should your password contain uppercase letters?")) {
    inUseChars = inUseChars.concat(upperCaseChars);
  }
  if (confirm("Should your password contain symbols?")) {
    inUseChars = inUseChars.concat(specialChars);
  }
  if (confirm("Should your password contain numbers?")) {
    inUseChars = inUseChars.concat(numberChars);
  }
  console.log(inUseChars);
  return true;
}

// Write password to the #password input
function writePassword() {
  var continueFromPrompts = userInputs();
  if (continueFromPrompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
  else {
    userInputs();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

