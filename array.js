'use strict'
//unshift method
let arr1=[1,2,3,4,5,6,7,8,9,0]
console.log(arr1)
arr1.unshift(10);
console.log(arr1)

//shift method
arr1.shift(2);
console.log(arr1);

// push method
arr1.push("p")
console.log(arr1)

//pop method
arr1.pop()
console.log(arr1)

//defining a n array
// syntax let arrname=[];
// let arr= new Array(length of array)

let arr= new Array(5)
console.log(arr)

//array concat method to join array
let arr2=["a", "b", "c"]

let arr3= arr1.concat(arr2)
console.log(arr3)

let arr4=arr1.join("")
console.log(arr4)
arr4=arr1.join("Nepal")
console.log(arr4)
arr4=arr1.join(" ")
console.log(arr4)

//concat multiple arrays
let nArr= arr1.concat(arr2,arr3,arr3,arr4)
console.log(nArr)

//slice method
let arr5= arr1.slice(2,7);
console.log(arr5)
console.log(arr1)
//splice method
let arr6=arr1.splice(1,8)
console.log(arr1)
console.log(arr6)

//includes method returns boolean value 
let arr7= arr1.includes("2")
console.log(arr7)
console.log(arr6)
arr7= arr6.includes(2)
console.log(arr7)

//index of to print the position of the element 

let a =arr6.indexOf(7)
console.log(a)

//lastindexOf method is used to search the element from last positon 
/*
for eg.
 let lastind=arr1.lastindexOf("elements to be searched")
 console.log(lastind)
*/ 

//convert all elements to string type in  an array 

let st=arr6.toString()
console.log(st)
console.log(typeof st)

// changing elements in an array
arr1[1]=10;
console.log(arr1)