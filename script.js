
let length = prompt("How long do you want your password to be?");
let uppercase = confirm("Do you want uppercase letters?");
let lowercase = confirm("Do you want lowercase letters?");
let numbers = confirm("Do you want numbers?");
let symbols = confirm("Do you want special characters?");

//Conver length to number
function passwordLength() {
 return parseFloat(length);
}



if (uppercase) {
  getRandomUpper();
}
if (lowercase) {
  getRandomLower();
}
if (numbers) {
  getRandomNumber();
}
if (symbols) {
  getRandomSymbol();
}


// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Functions to generate characters 
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random()* 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random()* 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  let symbols = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}