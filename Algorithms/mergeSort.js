// MERGE SORT ALGORITHM

// SELECTORS
const input8 = document.querySelector("#original8")

const submit8 = document.querySelector("#submit-btn8")

const merge_list = document.querySelector("#merge-list")

// Algorithm
const _mergeArrays = (a, b) => {
    const c = [];

    while(a.length && b.length) {
        c.push(a[0] > b[0] ? b.shift() : a.shift());
    }

    while(a.length) {
        c.push(a.shift());
    }
    while(b.length) {
        c.push(b.shift());
    }

    return c;
}

const mergeSort = (arr) => {
    if(arr.length < 2) return arr;
    const middle = Math.floor(arr.length / 2);
    const arr_l = arr.slice(0, middle);
    const arr_r = arr.slice(middle, arr.length);
    const sorted_l = mergeSort(arr_l);
    const sorted_r = mergeSort(arr_r);
    return _mergeArrays(sorted_l, sorted_r)
}


function eventHandler8(inputValue) {
    inputArr = inputValue.split(",")
    for(let i = 0; i < inputArr.length; i++) {
        inputArr[i] = inputArr[i].trim()
    }
    let createLi = document.createElement("li")
    let list = mergeSort(inputArr)
    createLi.append(`The merge sorted array is [${list}]`)
    merge_list.appendChild(createLi)
    merge_list.style.border = "2px solid #FFD700"
}


submit8.addEventListener('click', () => {
    eventHandler8(input8.value)
    input8.value = ""
})

input8.addEventListener('keypress', (e) => {
    if(e.key === "Enter") {
        eventHandler8(input8.value)
        input8.value = ""
    }
})



