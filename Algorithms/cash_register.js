// SELECTORS
const input51 = document.querySelector("#original51")
const input52 = document.querySelector("#original52")
const input53 = document.querySelector("#original53")

const submit5 = document.querySelector("#submit-btn5")

const changes = document.querySelector("#changes")

// ALGORITHM
function checkCashRegister(price, cash, cid) {
  const denom = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
];
  let output = { status: null, change: [] };
  let change = cash - price;
  
  const reducerFunc = function(acc, curr) {acc.total += curr[1]; acc[curr[0]] = curr[1]; return acc;}
  const reducerObj = { total: 0 }
  let register = cid.reduce(reducerFunc, reducerObj);

  if (register.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }

  if (register.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  let change_arr = denom.reduce(function(acc, curr) {
    let value = 0;
    
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;
      change = Math.round(change * 100) / 100;
    }
    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc; 
  }, []);

  if (change_arr.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  output.status = "OPEN";
  output.change = change_arr;
  return output;
}


function eventHandler5(inputValue1, inputValue2, inputValue3) {
    let createLi = document.createElement("li")
    let change = checkCashRegister(inputValue1, inputValue2, inputValue3)
    createLi.append(`Here is your change: ${change}`)
    changes.appendChild(createLi)
    changes.style.border = "2px solid green"
}


submit5.addEventListener('click', () => {
    eventHandler5(input51.value, input52.value, input53.value)
    input51.value = ""
    input52.value = ""
    input53.value = ""
})

input53.addEventListener('keypress', (e) => {
    if(e.key === "Enter") {
        eventHandler5(input51.value, input52.value, input53.value)
        input51.value = ""
        input52.value = ""
        input53.value = ""
    }
})

