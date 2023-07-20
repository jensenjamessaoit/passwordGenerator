// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyClick = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  //variables
  var randomPassword = "";
  var lowercase = {
    isOn: false,
    charset: "abcdefghijklmnopqrstuvwxyz"
  };
  var uppercase = {
    isOn: false,
    charset: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  };
  var numeric = {
    isOn: false,
    charset: "0123456789"
  };
  var specialChar = {
    isOn: false,
    charset: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  };

  //  gets password parameters frome the user
  var typecount = 0;
  while(typecount === 0){
    lowercase.isOn = confirm("lowercase?");
    uppercase.isOn = confirm("uppercase?");
    numeric.isOn = confirm("numeric?");
    specialChar.isOn = confirm("special characters?");
    typecount = lowercase.isOn + uppercase.isOn + numeric.isOn + specialChar.isOn;
    if(typecount === 0){
      alert("HOW AM I SUPPOSED TO GENERATE A PASSWORD WITH NO CHARACTERS?!?! \n\npick a setting... or else. :)");
    }
  }

  //  get password length from user
  var passwordLength = 0;
  while((passwordLength < 8 || passwordLength > 128) || isNaN(passwordLength)) {
    passwordLength = prompt("type a number between 8-128");
    if((passwordLength < 8 || passwordLength > 128) || isNaN(passwordLength)) {
      alert("INVALID ENTRY");
    }
  }


  //  puts atleast one random character in the password from the charsets and
  //  adds charset according to user input
  
  var onCharset = "";
  if(lowercase.isOn){
    randomPassword += lowercase.charset[Math.floor(Math.random() * lowercase.charset.length)];
    onCharset += lowercase.charset;
  }
  if(uppercase.isOn){
    randomPassword += uppercase.charset[Math.floor(Math.random() * uppercase.charset.length)];
    onCharset += uppercase.charset;
  }
  if(numeric.isOn){
    randomPassword += numeric.charset[Math.floor(Math.random() * numeric.charset.length)];
    onCharset += numeric.charset;;
  }
  if(specialChar.isOn){
    randomPassword += specialChar.charset[Math.floor(Math.random() * specialChar.charset.length)];
    onCharset += specialChar.charset;
  }
  console.log(onCharset);

  // generate rest of random password
  var remainingLength = passwordLength - typecount;
  for (var i = 0; i < remainingLength; i++) {
    var rand = Math.floor(Math.random() * onCharset.length);
    randomPassword += onCharset.charAt(rand);
  }
  
  console.log(randomPassword);

  String.prototype.scramble = function (){
    var a = this.split("");
    var n = a.length;
    for(var i = (n-1); i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    var x = a.join("");
    return x;
  }
  
  function generatePassword() {
    randomPassword = randomPassword.scramble();

    return randomPassword;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// click generated password area to copy
function copyPassword() {
  navigator.clipboard.writeText(copyClick.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyClick.addEventListener("click", copyPassword)
