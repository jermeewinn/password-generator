// Assignment code here
//var pwLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"]
//var pwLowercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
//var pwNumbers = [0,1,2,3,4,5,6,7,8,9]
//var pwSpecials = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}","|",";",""

var pwCharacters = window.prompt("How many characters long would you like your password to be? (Min: 8, Max 128");
  if (8 <= i && i <= 128) {
    var pwLength = i
  }


var pwLowerCase = window.prompt("Would you like to include lower-case letters in your password? (Y/N)");
  if (pwLowercase === "Y" || pwLowerCase === "YES") {
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"]
  }
  else (pwLowercase === "N" || pwLowercase === "NO") {
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"]

  }
var pwUpperCase = window.prompt("Would you like to include UPPER-CASE letters in your password? (Y/N)");
  if (pwUpperCase === "Y" || pwUpperCase === "YES") {
    ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  }
  else (pwUpperCase === "N" || pwUpperCase === "NO")
    ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var pwNumbers = window.prompt("Would you like to include numbers in your password? (Y/N)");

var pwSpecials = window.prompt("Would you like to include special characters (!,@,#,$,%,etc.) in your password? (Y/N)");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
