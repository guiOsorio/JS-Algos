// SELECTORS
const input1 = document.querySelector("#original1")

const submit1 = document.querySelector("#submit-btn1")

const isPalindrome = document.querySelector("#isPalindrome")
const notPalindrome = document.querySelector("#notPalindrome")

// Algorithm
function palindrome(str) {
  let result = 
  str
    .replace(/[\W_]/g, "")
    .split("");
  
  let reversed = result.reverse().join("").toLowerCase();
  let strTogether = str.replace(/[\W_]/g, "").toLowerCase();
  if(strTogether === reversed){
    return true;
  } else {
    return false;
  }
}


function eventHandler1(inputValue) {
    let createLi = document.createElement("li")
    if(palindrome(inputValue)) {
        createLi.append(inputValue)
        isPalindrome.appendChild(createLi)
        isPalindrome.style.border = "2px solid green";
    } else {
        createLi.append(inputValue)
        notPalindrome.appendChild(createLi)
        notPalindrome.style.border = "2px solid red";
    }
}


submit1.addEventListener('click', () => {
    eventHandler1(input1.value)
    input1.value = ""
})

input1.addEventListener('keypress', (e) => {
    if(e.key === "Enter") {
        eventHandler1(input1.value)
        input1.value = ""
    }
})






