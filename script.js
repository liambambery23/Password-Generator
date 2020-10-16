


//Convert length to number


//backend
//stuff to hold all option for user
var masterkeyArr= [];
var lowerArr=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArr=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialArr=['!','@','#','$','%','^','&','*','(',')','-','_','=','+','/','?','<','>','[',']','{','}','`','~','\\','\"','\'','|',':',';',',','.'];
var numArr=['0','1','2','3','4','5','6','7','8','9'];
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






  //generates the prompts
  //generates you pw
function generatePassword() {
  // click the button to generate a password

// series of prompts for password criteria:
//length
    // 8 characters and no more than 128 characters LATER returns a string => parseFloat
var userlength=prompt("How long do you want your password to be?");
// lowercase, //return true or false
var isLower = confirm("Do you want to include lowercase letters?");
//uppercase, 
var isUpper = confirm("DO you want to include uppercase letters?");
//numeric, 
var isNum = confirm("Do you want to include numbers");
//special characters
var isSpecial = confirm("Do you want to include special characters?");
//holds the randomize secret pw
var finalpswd = '';


function calclength() {
  parseFloat(userlength);
}

var length = calclength()

//how do I build this masterarry specific to each user?
//confirm add it to the array (masterarry)
//they say yes to uppers .. what do we do


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


for (var x=0;x<length;x++) {
  finalpassword(0,masterkeyArr);
  console.log(finalpswd);
  }

  function finalpassword (min ,max) {
    return finalpswd += max[Math.floor(Math.random() * max.length-1)];
  };
  

}





//WHEN I answer each prompt
//LATER validated and at least one character type should be selected
//all prompts are answered
//generate pw loop
//how do i generate my pw?
//pull from masterarray
//pull by the userlength


  //select by? randomly selecting from your masterarray(min =0 max , end=masterArray.length-1)
// Math.floor(Math.random() * (max - min) + min);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//random value as indexvalues
//finalpassword+= each special char




// displayed in an alert or written to the page

  





