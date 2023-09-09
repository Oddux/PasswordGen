// Assignment Code
//Create arrays for characters
//Pull random letters and numbers from character arrays to password arrays
//Shuffle password to mix the concactinated(sp?) arrays

var generateBtn = document.querySelector("#generate");
var passwordLength = 8;
var inUseChars = []; 
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "=", ":", ";", "?", "/", ">", "<", ".", ];
var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
var numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ];

function generatePassword () {}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

