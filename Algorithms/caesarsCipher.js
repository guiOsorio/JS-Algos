// SELECTORS
const input3 = document.querySelector("#original3")

const submit3 = document.querySelector("#submit-btn3")

const ciphered = document.querySelector("#ciphered")

// Algorithm
function rot13(str) {
  let splitStr = str.split("")
  let letterArr = splitStr.map((letter) => {
    if(letter.charCodeAt() < 65 || letter.charCodeAt() > 90) {
      return letter
    } else if(letter.charCodeAt() < 78) {
      return String.fromCharCode(letter.charCodeAt() + 13)
    } else {
      return String.fromCharCode(letter.charCodeAt() - 13)
    }
  })
  let resultArr = letterArr.join("")
  return resultArr
}


function eventHandler3(inputValue) {
    let createLi = document.createElement("li")
    let cipher = rot13(inputValue)
    createLi.append(`${inputValue} is the equivalent of ${cipher}`)
    ciphered.appendChild(createLi)
    ciphered.style.border = "2px solid #FFD700"
}


submit3.addEventListener('click', () => {
    eventHandler3(input3.value)
    input3.value = ""
})

input3.addEventListener('keypress', (e) => {
    if(e.key === "Enter") {
        eventHandler3(input3.value)
        input3.value = ""
    }
})