//Create a function that takes any number of arguments and returns the product of all the numbers passed using the rest operator.
const multiplyNumbers = (...args) => {
    return args.reduce((product, num) => product * num, 1);
};

// Example usage:
const result = multiplyNumbers(2, 3, 4, 5);
console.log(result);

/*
multiplyNumbers Function: This is an arrow function that uses the rest operator (...args) to accept any number of arguments. The args parameter will be an array that contains all the arguments passed to the function.

reduce() Method: The reduce() method is used to iterate through the array (args) and calculate the product of all the numbers.

The first argument of reduce() is a callback function that receives two parameters:
product (which accumulates the result of the multiplication)
num (the current number being processed from the array).
The second argument to reduce() is 1, which initializes the product to 1 (since multiplying by 1 does not change the product).
Final Product: The reduce() method will multiply all numbers in the args array, and the result will be returned by the multiplyNumbers function
*/