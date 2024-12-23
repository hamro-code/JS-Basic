/*
de structuring arrays  and objects 



*/
'use strict'
let arr1=[1,2,3,4,5,6,7,8,9,0]
let[a,b,c,d]=arr1
console.log(a,b)
//scipping index in array
let[, ,f,e]=arr1
console.log(e)

//destructuring objects
 let obj1={
    name:"bikram",
    age:24,
    city:"ramdhuni"
 }
 let{name,age}=obj1
 console.log(name);
 //renaming variables 
 let obj2={
  bk:"moon",
  rm:153,
  bkd:true
 }
 let {bk:booking,rm:roomNo}=obj2
 console.log(booking)
 //nested destructuring
let obj3={
   name1:"bikram",
   Class:"bca",
   student:{
      sId:100,
      sSem:"seventh",
      sPassOut:false

   }
}

let{name1,Class, student, student:{sId,sPassOut}}=obj3
console.log(sId)
//rest and spread operators