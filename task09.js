function factorial(n) {
    if (n === 1 || n === 0) { //задаётся крайний случай
        return (1);
    }
    return n * factorial(n - 1); //рекурентная часть
}
console.log(factorial(3));
