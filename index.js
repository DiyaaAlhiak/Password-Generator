// =============  Elments ==========
let PassLength = document.getElementById("pass-length");
let LengthInp = document.querySelector(".character-length input")

let UpperCaseInput = document.getElementById("uppercase")
let LowerCaseInput = document.getElementById("lowercase")
let NumbersInput = document.getElementById("numbers")
let symbolsInput = document.getElementById("symbols")

let PasswordHtml = document.querySelector(".password")
let generateBtn = document.querySelector(".generate-btn")

let Level = document.querySelector(".level h1")
let blocks = document.getElementById("blocks")

let CopyIcon = document.querySelector(".fa-copy")
// ============= Options  ==========
const upperCase = "ABCDEFGHIJKLMNORSTUVWXQZ"
const lowerCase = "abcdefghijklmnorstuvwxqz"
const numbers = "1234567890"
const symbols = "!@$%^&"
// ============== Function ==========

LengthInp.addEventListener("input", function(){
    PassLength.innerHTML = this.value
})

function run (number){
return Math.floor(Math.random() * number )
}


function generate(length){
let pass = "";
while(pass.length < length) {
  if(UpperCaseInput.checked && pass.length < length){
    pass += upperCase[run(upperCase.length)]
  }
  if(LowerCaseInput.checked && pass.length < length){
    pass += lowerCase[run(lowerCase.length)]
  }
  if(NumbersInput.checked && pass.length < length){
    pass += numbers[run(numbers.length)]
  }
  if(symbolsInput.checked && pass.length < length){
    pass += symbols[run(symbols.length)]
  }
 }
 return pass
}

generateBtn.addEventListener("click",function(){
    PasswordHtml.innerHTML = generate(LengthInp.value)
    Level.innerHTML = checkStrength()
    blocks.classList = checkStrength()
})


function checkStrength(){
 const length = LengthInp.value
 let checked = 0;
 if(UpperCaseInput.checked) checked++;
 if(LowerCaseInput.checked) checked++;
 if(NumbersInput.checked) checked++;
 if(symbolsInput.checked) checked++;

 if(checked == 1){
  console.log("easy")
  return "easy"
}

else if (checked == 2 && length >= 8){
  console.log("medium")
  return "medium"
}
else if (checked == 2 && length < 8){
  console.log("easy")
  return "easy"
}

else if (checked == 3 && length <= 5){
  console.log("easy")
  return "easy"
}

else if (checked == 3 && length > 5){
  console.log("medium")
  return "medium"
}

else if (checked == 4 && length > 5){
  console.log("hard")
  return "hard"
}

else if (checked == 4 && length <= 5){
  console.log("medium")
  return "medium"
}

//  if(length > 8) return "easy";

// else if (length < 8 && checked == 1){
//   return "easy"
// }
// else if (length <= 8 && checked == 1){
//   return "easy"
// }

// else if (length <= 8 && checked == 2){
//   console.log("easy")
//   return "easy"
// }



// if(length >= 8){
//   console.log("medium")
// }





//  else if (length <= 10 && checked == 1) return "medium"
//  else if (length >= 8 && checked ==1) return "easy"
//   else if (length >= 8 && checked >1 && checked < 4) return "medium"
//    else if (length >= 8 && checked ==4) return "hard"
}

CopyIcon.addEventListener("click",function(){
    const text = PasswordHtml.innerHTML
    navigator.clipboard.writeText(text)
})

