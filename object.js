'use strict'
//syntax
/*
let obj_name={
*key:value*

}
*/
//example of object creation 
let student={
    name:"bikram",
    age:24,
    address:"ramdhuni",
    s_Id:{
        sid:100,
        sClass:"BCA",
        sSem:"7th",
        arr1:[40,60,80]
    },

    funcAdd:function(a,b){
        return a+b

    }
    //creating an function in side object
    

}
console.log(student.name)//directly calling an object element
console.log(student["address"]) // method of calling elements in an object

console.log(student.s_Id.sSem)// calling elements from an obj of obj

console.log(student.s_Id.arr1)
console.log(student.funcAdd(10,15))


