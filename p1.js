function insertionSortForPopulation(arr)  
{  
    let i, key, j;  
    for (i = 1; i < arr.length; i++) 
    {  
        key = arr[i];  
        j = i - 1;  

        while (j >= 0 && arr[j].population > key.population) 
        {  
            arr[j + 1] = arr[j];  
            j = j - 1;  
        }  
        arr[j + 1] = key;  
    }
    return arr;
}

let obj1 = {
  name: "Falticeni",
  population: 20000
};
let obj2 = {
  name: "Suceava",
  population: 100000
};

const array = [obj2, obj1];

function showSortedObjectByPopulation(arr){
  let i;
  let arr1 = insertionSortForPopulation(arr);
  for(i = 0; i < arr.length; i++){
    console.log("name and population", arr1[i].name,arr1[i].population);
  }
}

showSortedObjectByPopulation(array);
