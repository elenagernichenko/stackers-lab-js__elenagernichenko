function increase(digits) {
    return digits.map((number, index) => {
        let sum = number + index + 1;
        return sum % 10;
    });
}

console.log(increase([1, 2, 4]));
console.log(increase([4, 6, 9, 1, 3]));
