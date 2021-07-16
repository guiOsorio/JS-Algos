// SELECTORS
const input2 = document.querySelector("#original2")

const submit2 = document.querySelector("#submit-btn2")

const romanNumeral = document.querySelector("#romanNumeral")

// Algorithm
function convertToRoman(num) {
    let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    let romanized = ""

    for(let i = 0; i < decimalValue.length; i++) {
        {
            while(decimalValue[i] <= num) {
                romanized += romanNumeral[i]
                num -= decimalValue[i]
            }
        }
    }
    return romanized
}


function eventHandler2(inputValue) {
    let createLi = document.createElement("li")
    let roman = convertToRoman(inputValue)
    createLi.append(`${inputValue} is the equivalent of ${roman}`)
    romanNumeral.appendChild(createLi)
    romanNumeral.style.border = "2px solid #800080"
}


submit2.addEventListener('click', () => {
    eventHandler2(input2.value)
    input2.value = ""
})

input2.addEventListener('keypress', (e) => {
    if(e.key === "Enter") {
        eventHandler2(input2.value)
        input2.value = ""
    }
})






