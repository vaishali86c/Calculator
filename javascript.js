
let firstNumber = 3;
let operator = '+';
let secondNumber = 5;


let result = operate(operator,firstNumber,secondNumber);
console.log(result);

function addition(a,b) {
    return a + b;
}
console.log(addition(3,4));

function subtract(a,b) {
    return a - b;
}
console.log(subtract(3,4));
function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    if (b !== 0) {
        return a/b;
    }else {
        return "Cannot divide by zero!";
    }
}
console.log(divide(3,8));
function operate(operator,a,b) {

    switch (operator) {

        case '+':
            return addition(a,b)
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b)
        case '/':
            return divide(a,b);
        default:
            return "Invalid operator!";
    }
}
