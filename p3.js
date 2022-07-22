const stringArray = ['Alf', 'Ben', 'Alice'];

function firstLetter(arr){
  arr.sort();
  const finalArr = [];
  for(let i = 0 ; i < arr.length; i ++){
    let aux = arr[i][0].toLowerCase();
    if(finalArr.indexOf(aux) == -1){
      finalArr.push(aux);
    }
  }
  return finalArr;
}

function buildObject(stringArray){
  const finalObject = {};
  const firstLetterArray = firstLetter(stringArray);
  for(let i = 0; i < firstLetterArray.length; i++){
    const auxArray = [];
    for(let j = 0; j < stringArray.length; j++){
      if(firstLetterArray[i] === stringArray[j][0].toLowerCase()){
        auxArray.push(stringArray[j]);
      }
    }
    //console.log(auxArray);
    finalObject[firstLetterArray[i]] = auxArray;
  }
  return finalObject;
}

console.log(buildObject(stringArray));