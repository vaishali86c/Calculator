function addition(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operator(operator,a,b) {

    switch (operator) {

        case '+':
            return addition(a,b)
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b)
        case '/':
            return divide(a,b);
    }
}
