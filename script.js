
//arrays to hold all option for user
var masterkeyArr= [];
var lowerArr=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArr=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialArr=["!","@","#","$","%","^","&","*","(",")","-","_","=","+","/","?","<",">","[","]","{","}","`","~","\\","\"","\'","|",":",";",",","."];
var numArr=["0","1","2","3","4","5","6","7","8","9"];
var userlength;

let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //generates the prompts
  //generates you pw
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
//textbox area vale =generated pw
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  //generates you pw
function generatePassword() {

  function empty(){
    masterkeyArr = [];
  }
 empty();
  // click the button to generate a password

// series of prompts for password criteria:
//length

var userlength=prompt("How long do you want your password to be? Please select a number between 8 and 128 characters.");
  

// lowercase, //return true or false
var isLower = confirm("Do you want to include lowercase letters?");

//uppercase, 
var isUpper = confirm("Do you want to include uppercase letters?");
//numeric, 
var isNum = confirm("Do you want to include numbers");
//special characters
var isSpecial = confirm("Do you want to include special characters?");
//holds the randomize secret pw
var finalpswd = '';

// converts string to number
function calclength() {
  return parseFloat(userlength);
 };

var length = calclength()

// generates message if user does not select a password length between 8 and 128
if (length < 8) {
  alert("Length must be between 8 and 128 characters");
  location.reload();
}

if (length > 128) {
  alert("Length must be between 8 and 128 characters");
  location.reload();
}

if(isUpper) {
//add uppers to the masterarray
  for(var i=0; i<upperArr.length; i++) {
    masterkeyArr.push(upperArr[i]);
  }
};

if (isLower) {
  for(var i=0; i<lowerArr.length; i++) {
    masterkeyArr.push(lowerArr[i]);
  }
};

if (isNum) {
  for(var i=0; i<numArr.length; i++) {
    masterkeyArr.push(numArr[i]);
  }
};

if (isSpecial) {
  for(var i=0; i<specialArr.length; i++) {
    masterkeyArr.push(specialArr[i]);
  }
};


for (var i=0; i<length; i++) {
  finalpassword(0,masterkeyArr);
  console.log(finalpswd);
  }

  function finalpassword(min,max) {
    return finalpswd += max[Math.floor(Math.random() * max.length)];
  };
  
  return finalpswd;

}






  





