//hof is higher order function that takes argument as function 
 // the function that are taken as arguments in hof is called call back function 
 // types of higher order function are inbuilt higher order function 
                                    //  custom higher order function 

// custom hof function 

function hof(a,b,cb){
 return cb(a,b);
}

function add(a,b){
    return a+b;
}

console.log(hof(5,6,add))

// building custom hof function is necessary to perform repeated task
 
function mul(a,b){
    return a*b;
}

console.log(hof(5,6,mul))

//set time out callback function takes parameter (arguments,time)

function fetchData(callback){
    console.log("data fetching...");
    setTimeout(() => {
        
        console.log("your data being processed")
        callback();
    }, 5000);
}

function processData(){
    setTimeout(()=>{console.log("data fetched")},2000)
   
}

fetchData(processData);