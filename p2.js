const person = {
  fistName: "Ghita",
  lastName: "Papuc"
};

const data = {
  age: 36,
  passion: 'surfing'
};

const fullPerson = Object.assign(person, data);

console.log(fullPerson);