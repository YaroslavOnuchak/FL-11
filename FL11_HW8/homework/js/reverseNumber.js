function reverseNumber(number) {
    let result = 0;
    while (number) {
        result = result * 10 + number % 10;
        number = Math.floor(number / 10);
    }
    return result;
}
reverseNumber(123);