function calculator(operand, x, y) {
    switch (operand) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        default:
            return NaN;
    }
}

console.log(calculator('+', 4, 7));
console.log(calculator('-', 15, 18));
console.log(calculator('*', 5, 5));
console.log(calculator('/', 49, 7));
