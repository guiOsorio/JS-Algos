// SELECTORS
const input4 = document.querySelector("#original4")

const submit4 = document.querySelector("#submit-btn4")

const isPhoneNumber = document.querySelector("#isPhoneNumber")
const notPhoneNumber = document.querySelector("#notPhoneNumber")

// Algorithm
function telephoneCheck(str) {
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/
  let testing = regex.test(str)
  return testing
}


function eventHandler4(inputValue) {
    let createLi = document.createElement("li")
    if(telephoneCheck(inputValue)) {
        createLi.append(inputValue)
        isPhoneNumber.appendChild(createLi)
        isPhoneNumber.style.border = "2px solid green";
    } else {
        createLi.append(inputValue)
        notPhoneNumber.appendChild(createLi)
        notPhoneNumber.style.border = "2px solid red";
    }
}


submit4.addEventListener('click', () => {
    eventHandler4(input4.value)
    input4.value = ""
})

input4.addEventListener('keypress', (e) => {
    if(e.key === "Enter") {
        eventHandler4(input4.value)
        input4.value = ""
    }
})
