const person = {
    firstName : "John",
    lastName  : "Doe",
    age     : 50,
    eyeColor  : "blue"
  };

typeof(person) // Object
console.log("Person===>",person) 

const newObj = Object.create(person) // New Object create

// Set property to person object
newObj.firstName = "Vishnu",
newObj.lastName  = "Solanki",
newObj.No = 24;

console.log("newObj===>",newObj) // Object with name as property and prototype as null