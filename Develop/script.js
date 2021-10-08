// Assignment code here

var pwLowercase = "abcdefghijklmnopqrstuvwxyz"
var pwUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var pwNumbers = "0123456789"
var pwSpecials = "`~!@#$%^&*()-_=+[]{}|;"
var genPassword = ""
//Click generate password to start the prompt. This section asks for length of the password. If invalid, it will ask you to re-enter a valid input. If invalid inputs are repeated, it will contiue to ask until a valid input is entered.
var generatePassword = function() {
  var pwLength = window.prompt("How many characters long would you like your password to be? (Min: 8, Max 128");
    while (8 > pwLength || pwLength > 128) {
     pwLength = window.prompt("Please choose a number between 8 and 128.")
  }
  //Asks for lower-case letters. 1 denotes yes. Anything else (including words, strings, etc.) denotes no.
  userInput = window.prompt("Would you like to include lower-case letters in your password? (1 for Yes, 0 for No)");
  if (userInput == 1){
    genPassword += pwLowercase
  }
  //Asks for UPPER-CASE letters. 1 denotes yes. Anything else (including words, strings, etc.) denotes no.

  userInput = window.prompt("Would you like to include UPPER-CASE letters in your password? (1 for Yes, 0 for No)");
  if (userInput == 1) {
    genPassword += pwUppercase
  }
  //Asks for numbers letters. 1 denotes yes. Anything else (including words, strings, etc.) denotes no.
  userInput = window.prompt("Would you like to include numbers in your password? (1 for Yes, 0 for No)");
  if (userInput == 1) {
    genPassword += pwNumbers
  }
  //Asks for special-characters. 1 denotes yes. Anything else (including words, strings, etc.) denotes no.
  userInput = window.prompt("Would you like to include special characters (!,@,#,$,%,etc.) in your password? (1 for Yes, = for No)");
  if (userInput == 1) {
    genPassword += pwSpecials
  } return pwLength;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate")

// Write password to the #password input
function writePassword(pwLength) {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  var temporaryString = "";
  for (var i = 0; i < password; i++){
    temporaryString += genPassword[Math.floor(Math.random()*genPassword.length)]
  }
  passwordText.value = temporaryString;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);