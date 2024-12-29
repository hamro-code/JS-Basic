//js is sinigle theraded i.e one task at a time that shows synchronous in nature
const promise = new Promise((resolve, reject) => {
    let success = true;
    if (false) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed!");
    }
  });

  console.log(promise);
  

  
promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("finally completed"));


  const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => reject("Data fetched!"), 3000);
  });

  console.log(fetchData);
  
// fetchData
// .then((result) => console.log(result))
// .catch((error) => console.log(error))
// .finally(() => console.log("finally completed"));


//nested promises

const handlePromise = async () => {
  try {
    const result = await fetchData;
    console.log(result);
    console.log("success");
  } catch (error) {
    console.log(error);
    console.log("error");
  } finally {
    console.log("something happened.");
  }
};

handlePromise();