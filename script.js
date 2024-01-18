// Assignment code here
// Declaring variables to use throughout the function.
var keyLength;
var confirmUppercase;
var confirmLowercase;
var confirmSymbols;
var confirmNumbers;

//All these values are used to scramble a random password.
uppercase = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
lowercase = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
symbols = ("!", "?", "@", "#", "$", "%", "^", "&", "*", "+", "=", "/", "~");
numbers = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");


var options;
//This function takes the user input for number of characters desired in their password.
function generatePassword() {
  keyLength = prompt("How long would you like your password? Choose between 8 and 128 characters.")

  if (!keyLength) {
    alert("You must input a value.");
    } else if (keyLength < 8 || keyLength > 128) {
      prompt("You must choose a value between 8 and 128.");
    } else {
      //If the above is true, the prompt will ask what characters they want their password to contain.
      confirmUppercase = confirm("Will your password contain uppercase letters?");
      confirmLowercase = confirm("Will your password contain lowercase letters?");
      confirmSymbols = confirm("Will your password contain symbols?");
      confirmNumbers = confirm("Will your password contain numbers?");
    };

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

  //This if statement displays an alert if you don't select any criteria.
  if (!uppercase && !lowercase && !symbols && !numbers) {
    options = alert("You must select an option.");
  }
  
  //These else if statements take your selected options and display something depending on your selections.

  else if (uppercase && lowercase && symbols && numbers) {

  }




  //This is supposed to display the result in the text box, but I couldn't figure it out. Yet...
  var displayPassword = ""
  for (var i = 0; i < keyLength; i++) {
    var rng = [Math.floor(Math.random() * multiSelect.length)];
    displayPassword = displayPassword + multiSelect[rng];
  }
  return displayPassword;
  
  var ps = password.join(""); 
  UserInput(ps);
  return ps;
  
  function UserInput(ps) {
   document.getElementById("password").textContent = ps;
  }
  };



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