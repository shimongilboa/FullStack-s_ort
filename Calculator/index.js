let currentOperand = '';
let previousOperand = '';
let operator = '';
let op = true;

let display = document.querySelector(".dis");

const del = () => {
    display.innerText = display.innerText.toString().slice(0,-1);
    // console.log(display.innerText);
}

const clearAll = () => {
    display.innerText = '';
    previousOperand = '';
    operator = '';
}

const add = () => {
    const num = event.target.innerText;
    if(num === '.' && display.innerText.includes(num)) return;
    display.innerText += num;
    // console.log(display.innerText);
    op = true;
}

const set_op = () => {
    // DOTO: check case of negative numbers
    if(op){
        op = false;
        if(operator === '')
        previousOperand = Number(display.innerText);
        else
            previousOperand = set_res(1);
            operator = event.target.innerText;
        display.innerText = `${operator} `;
    }
}

const set_res = (flag) => {
    // DOTO: check case of null || undefined
    currentOperand = Number(display.innerText.toString().slice(1));
    // console.log(currentOperand);
    let res;
    switch(operator) {
        case '+':
            res = previousOperand + currentOperand;
            break;
        case '-':
            res = previousOperand - currentOperand;
            break;
        case '*':
            res = previousOperand * currentOperand;
            break;
        case '/':
            res = previousOperand / currentOperand;
            break;
    }
    if(flag === 1)
        return res;
    else{
        display.innerText = res;
        previousOperand = '';
        currentOperand =  '';
        operator = '';
        op = true;
    }
}
