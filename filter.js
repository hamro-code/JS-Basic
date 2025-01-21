const words=["apple","banana","pineapple","kiwi","grape"];
const lwords=words.filter(word=>word.length>5);
console.log(lwords);0

const users=[
    {id:1,name:"bikram",isActive:true},
    {id:1,name:"prayash",isActive:false},
    {id:1,name:"milli",isActive:true},
]

const activeUsers=users.filter(user=>user.isActive);
console.log(activeUsers);

