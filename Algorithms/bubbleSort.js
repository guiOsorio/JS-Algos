// BUBBLE SORT ALGORITHM

// SELECTORS
const input6 = document.querySelector("#original6")

const submit6 = document.querySelector("#submit-btn6")

const bubble_list = document.querySelector("#bubble-list")

// Algorithm
const bubbleSort = (arr) => {
    let returnArr = [...arr];
    let n = returnArr.length;
    // loop that goes over the array n - 1 times
    // this loop compares numbers side to side and switches them if the number on the left is higher than the one on the right
    // this way the higher number while be at the extreme-right of the array
    for(let i = 0; i < n - 1; i++) {
        let countSwaps = 0; // variable to check if the array is already sorted
        // loop which goes through numbers side to side, compares them, and performs a swap if necessary
        // this loops runs n - 1 times at first, but since we know the last number in the array will be sorted after the first loop...
        // ... then we can run it n-1-1 times next. This results in the loop running n-1-i times
        for(let k = 0; k < n - 1 - i; k++) {
            let current = returnArr[k];
            let next = returnArr[k+1];
            if(current > next) {
                returnArr[k] = next;
                returnArr[k+1] = current;
                countSwaps++;
            }
        }
        if(countSwaps === 0) {
            return returnArr; // if the array is already sorted, quit the function
        }
    }
    return returnArr;
}


function eventHandler6(inputValue) {
    inputArr = inputValue.split(",")
    console.log(inputArr)
    for(let i = 0; i < inputArr.length; i++) {
        inputArr[i] = inputArr[i].trim()
    }
    let createLi = document.createElement("li")
    let list = bubbleSort(inputArr)
    createLi.append(`The bubble sorted array is [${list}]`)
    bubble_list.appendChild(createLi)
    bubble_list.style.border = "2px solid #FFD700"
}


submit6.addEventListener('click', () => {
    eventHandler6(input6.value)
    input6.value = ""
})

input6.addEventListener('keypress', (e) => {
    if(e.key === "Enter") {
        eventHandler6(input6.value)
        input6.value = ""
    }
})