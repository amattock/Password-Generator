//  Array creation for all possible values; numbers, uppercase, lowercase and special characters
 function generatePassword() {
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharacters = ['!', '@', '#', '$', '%', "^", '&', '*', '(', ')', '_', '-', '+', '=', '{', '}', '[', ']', ';', ':', '"', '<', '>', ',', '.', '?', '/', '|'];
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var possibleCharacters = "";

// Prompt script displays series of questions, such as passoerd length, upper or lower case, numbers and special characters, and then provide confimation of selection
  passwordarray = prompt("Select length of password between 8 to 128 characters")
if (passwordarray < 8 || passwordarray > 128) {
// "promt" response allows for a follow up question
  passwordarray = prompt ("Please choose a valid password length");
} 
else if (isNaN(passwordarray)) {
  passwordarray = prompt ("Please enter a number.");
}
//  "alert" serves as a notification
else {
  alert("Your password will be " + passwordarray + " characters long ")
}

hasLowercase = confirm("Do you want lowercase characters?");
  if (hasLowercase) {
    alert("Your password will have lowercase characters.");
  }
  else {
    alert("Your password will not have lowercase characters.");
  }

  hasUppercase = confirm("Do you want uppercase characters?");
  if (hasUppercase) {
    alert("Your password will have uppercase characters.");
  }
  else {
    alert("Your password will not have uppercase characters.");
  }

  hasNumbers = confirm("Do you want to use numbers?");
  if (hasNumbers) {
    alert("Your password will have numbers.");
  }
  else {
    alert("Your password will not have numbers.");
  }

  hasSpecial = confirm("Do you want special characters?");
  if (hasSpecial) {
    alert("Your password will have special characters.");
  }
  else {
    alert("Your password will not have special characters.");
  }
// if none have the criteria have been met, messae to try again is sisplayde in the password text box
  if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false) {
    return "You must select at least one character type, please try again";
  };

// selected options are joined with the "possibleCharacters" variable
    if (hasLowercase) {
      possibleCharacters = possibleCharacters.concat(lowercase).concat(uppercase).concat(numbers).concat(specialCharacters);
    }

// For loop defines "i" post increment function on all "passwordarray" items 
var password =""
    for (let i = 0; i <= passwordarray; i++) {
      // "rndm" varibale perfoms "math.random" on the entire length of the "possible characters"
      var rndm = [Math.floor(Math.random() * possibleCharacters.length)];
      // password equals "possibleCharacters" randomized
      password = password + possibleCharacters[rndm];
     }
    // output is returned
     return password;
 };

 //variable for generatebtn usued "generate" ID
 var generateBtn = document.querySelector("#generate");

//  function "writePassword" calls the "generatePassword" function, "passwordText" uses "password" ID to know where to place text
 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// addeverntlister sets functions in motion when "click" occurs
generateBtn.addEventListener("click", writePassword);

