const numb=[1,2,3,4,5,6,7,8,9];
const doubled=numb.map(num=>num*2);
console.log(numb);
console.log(doubled);
let user1={
    id:1,
    name: "ram",
    contact:123456789
}
let user2={
    id:2,
    name:"abcd",
    contact:456789
}

const user=[user1,user2]



const details= user.map(user=> user.name);
console.log(details)