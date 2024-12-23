// syntax-> ... (three dots) for rest and spread 

//rest in array(pack)
let arr1=[1,2,3,4,5,6,7,8,9,0]
let[a,b,c,d,...rest]=arr1
console.log(rest)

//rest in object
obj1={
    name:"asdf",
    age:4,
    cd:"fc",

}
let{
    name,...rest1}=obj1
console.log(rest1)


//rest in function

function ab(...rest3)
{
    console.log(rest3)
}

    ab(1,2,3);

//spread operators
let arr2=["a","b","c","d"]
let arr3=[1,2,3,4,5,6]
let arr4=[true,false]
let arr5=[...arr2,...arr3,...arr4]
console.log(arr5)

//spread in objects
let obj2={
    cast:"cd",
    married:false,
}

let obj3={...obj1,...obj2}
console.log(obj3)

// spread in function

function cd(x,y,z){
     x=["a","b","c","d","e"];
    
    console.log(x);
     y=[1,2,3,4,5];
    console.log(y);
     z=["ACD","EFG"]
    console.log(z);
}

cd(...[1])
