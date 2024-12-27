//Write a function to filter out all the numbers greater than 10 from an array using an arrow function.

const filterGreaterThanTen = (arr) => {
    return arr.filter(num => num <= 10);
};

// Example usage:
const numbers = [3, 7, 12, 5, 18, 2, 9, 11];
const filteredNumbers = filterGreaterThanTen(numbers);

console.log(filteredNumbers); 
