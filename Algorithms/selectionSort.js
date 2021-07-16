// SELECTION SORT ALGORITHM

// SELECTORS
const input9 = document.querySelector("#original9")

const submit9 = document.querySelector("#submit-btn9")

const selection_list = document.querySelector("#selection-list")

// Algorithm
const selectionSort = (arr) => {
    let sortedArr = [...arr] // === arr
    // loop that goes over every element in sortedArr except the last one (this won't be necessary because the last element will automatically be the highest)
    for(let i = 0; i < sortedArr.length-1; i++) {
        let current = sortedArr[i] // define current number of sortedArr
        let minIndex = sortedArr.indexOf(current) // minIndex = index of current number of sortedArr
        // loop starting at the number of sortedArr immediately after current and goes through every following element of sortedArr
        for(let k = i+1; k < sortedArr.length; k++) {
            // if the number representing min is more than the number with index k, set k to be the index of the lowest number
            if(sortedArr[minIndex] > sortedArr[k]) { 
                minIndex = k
            }            
        }
        // swap values from indexes i and minIndex so the lowest number is part of the sorted part of the array and the current number is not
        sortedArr[i] = sortedArr[minIndex] 
        sortedArr[minIndex] = current
    }
    return sortedArr
}


function eventHandler9(inputValue) {
    inputArr = inputValue.split(",")
    for(let i = 0; i < inputArr.length; i++) {
        inputArr[i] = inputArr[i].trim()
    }
    let createLi = document.createElement("li")
    let list = selectionSort(inputArr)
    createLi.append(`The selection sorted array is [${list}]`)
    selection_list.appendChild(createLi)
    selection_list.style.border = "2px solid #FFD700"
}


submit9.addEventListener('click', () => {
    eventHandler9(input9.value)
    input9.value = ""
})

input9.addEventListener('keypress', (e) => {
    if(e.key === "Enter") {
        eventHandler9(input9.value)
        input9.value = ""
    }
})