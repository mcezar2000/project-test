//Call api with promises
let isSuccessful = false;
const promise = new Promise((resolve, reject) => {
  resolve(fetch('https://dog.ceo/api/breeds/image/random'));
  reject("Failure");
});

let result ="";

promise.then((res) => {
  result = res;
  console.log(result);
});

//Call api with async and await
async function fetchAPI(){
  try{
   console.log('result', await fetch('https://dog.ceo/api/breeds/image/random'));
  }
  catch(error){
    console.log("error", error);
  }
};
fetchAPI();