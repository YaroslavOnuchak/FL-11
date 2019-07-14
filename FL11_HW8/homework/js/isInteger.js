function isInteger(number) {
    return (number ^ 0) === number;
}
console.log(isInteger(7));
console.log(isInteger(7.7));