// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
 

// Function for prompting User to choose password options

function getPasswordOptions() {
  while (true) {
    num = prompt("Please enter a number between 10 and 64:");
    if (num >= 10 && num <= 64) {
      break;
    }
  }
  alert("You entered: " + num);

  let lowerCased = confirm("Do you want lowCase in your password? If yes, choose OK, if not choose CANCEL.");

  let upperCased = confirm("Do you want upperCase in your password? If yes, choose OK, if not choose CANCEL.");

  let numeric = confirm("Do you want numeric in your password? If yes, choose OK, if not choose CANCEL.");

  let special = confirm("Do you want special Characters in your password? If yes, choose OK, if not choose CANCEL.");

  while (true) {
    if (lowerCasedCharacters || upperCasedCharacters || numericCharacters || specialCharacters) {
      break;
    }
    else {
      alert("Please select at least one type of character for your password.");
      return;
    }
  }

  let types = [];
  if (numeric) types.push("numeric");
  if (upperCased) types.push("upper case");
  if (lowerCased) types.push("lower case");
  if (special) types.push("special characters");
  alert("Your password will consist of: " + types.join(", "));

  let password = "";
  let possibleCharacters = "";
  if (lowerCased == true) {
    possibleCharacters += lowerCasedCharacters.join('');
  }
  if (upperCased == true) {
    possibleCharacters += upperCasedCharacters.join('');
  }
  if (numeric == true) {
    possibleCharacters += numericCharacters.join('');
  }
  if (special == true) {
    possibleCharacters += specialCharacters.join('');
  }

  for (let i = 0; i < num; i++) {
    password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
  }
  return password;
};

 
// Function for getting a random element from an array

function getRandom(arr) {

}

// Function to generate password with user input
 

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = getPasswordOptions();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);