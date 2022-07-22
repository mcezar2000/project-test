
function arrNrFunction(nr1){
  let nr = nr1;
  let myFunc = num => Number(num);
  const auxArr = Array.from(String(nr), myFunc);
  return auxArr;
}

function arrSum(arr){
  let sum = 0;
  for(let i = 0;i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

function powArr(arr, power){
  for(let i = 0; i < arr.length; i++){
    arr[i] = Math.pow(arr[i], power);
  }
  return arr;
}

function checkArmstrong(nr){
  const aux = arrSum(powArr(arrNrFunction(nr), arrNrFunction(nr).length));
  if(nr === aux){
    console.log('It is an Amstrong number!');
  }
  else{
    console.log('This is not an Amstrong number!');
  }
}

checkArmstrong(370);
checkArmstrong(404);