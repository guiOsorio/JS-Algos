// INSERTION SORT ALGORITHM

// SELECTORS
const input7 = document.querySelector("#original7")

const submit7 = document.querySelector("#submit-btn7")

const insertion_list = document.querySelector("#insertion-list")

// Algorithm
const insertionSort = (arr) => {
    let sortedArr = [...arr] // === arr
    // loop that iterates through every element of sortedArr
    for(let i = 0; i < sortedArr.length; i++) {
        // loop that sets current (starts at index 1) and prev(starts at index 0)
        for(let k = i; k >= 0; k--) {
            let current = sortedArr[k+1]
            let prev = sortedArr[k]
            // if current is lower than prev, we will move current to the left of the array by 1 index, swapping with prev
            if(current < prev) {
                sortedArr[k] = current
                sortedArr[k+1] = prev
            } else { // if current is not lower than prev, we will stop the k loop because current will now be sorted
                break // this will result in a new iteration of the i for loop
            }
        }
    }
    return sortedArr
}


function eventHandler7(inputValue) {
    inputArr = inputValue.split(",")
    for(let i = 0; i < inputArr.length; i++) {
        inputArr[i] = inputArr[i].trim()
    }
    let createLi = document.createElement("li")
    let list = insertionSort(inputArr)
    createLi.append(`The insertion sorted array is [${list}]`)
    insertion_list.appendChild(createLi)
    insertion_list.style.border = "2px solid #FFD700"
}


submit7.addEventListener('click', () => {
    eventHandler7(input7.value)
    input7.value = ""
})

input7.addEventListener('keypress', (e) => {
    if(e.key === "Enter") {
        eventHandler7(input7.value)
        input7.value = ""
    }
})
