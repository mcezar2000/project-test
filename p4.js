class CustomList{
  constructor(customList){
    this.customList = customList;
  }

  insertFirst(element){
    const auxArray = this.customList;
    for(let i = auxArray.length ; i > 0; i--){
      auxArray[i] = auxArray[i-1];
    }
    auxArray[0] = element;
    this.customList = auxArray;
  }

  insertLast(element){
    this.customList.push(element);
  }

  getFirst(){
    return this.customList[0];
  }

  getLast(){
    return this.customList[this.customList.length - 1];
  }
}

const obj1 = new CustomList([1,2,3,4]);

class LinkedList{
  constructor(previous, key, next){
    this.previous = previous;
    this.key = key;
    this.next = next;
  }

  getPrevious(){
    return this.previous;
  }
  getKey(){
    return this.key;
  }
  getNext(){
    return this.next;
  }
}

const ll1 = new LinkedList(null, 0, ll2);
const ll2 = new LinkedList(ll1, 1, ll3);
const ll3 = new LinkedList(ll2, 2, null);

//console.log(ll2.getPrevious().getKey());