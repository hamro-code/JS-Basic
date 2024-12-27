const multiplyNumbers = (...args) => {
    return args.reduce((product, num) => product * num, 1);
};

// Example usage:
const result = multiplyNumbers(2, 3, 4, 5, 6, 7, 8);
console.log(result);