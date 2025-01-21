const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum);

const multi = numbers.reduce((acc, num) => acc * num, 1);

console.log(multi);



//nested array reduce method

const nestedArray = [[1, 2, ], [3, 4], [5]];

const flatArray = nestedArray.reduce((acc, arr) => arr.concat(acc)
, ["bikram"]);

console.log(flatArray);

// let arr1=["bikram"]
// console.log("ab",arr1.unshift("a"))
// console.log("ab",arr1.shift("a"))
// console.log(arr1);

// let arr2=[1,2,3,4,5,6,7,8,9,0]
// console.log(arr2)
// arr2.unshift(10);
// console.log(arr2)