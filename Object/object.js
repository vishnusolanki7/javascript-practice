const person = {
    name:'Vishnu',
    age:24,
    surname:'Solanki'
};

const person1 = {
    name:'Ram',
    salary:'1000000'
}
console.log("Person===>", person);  //{ name: 'Vishnu', age: 24, surname: 'Solanki' }

// 1. Object.keys() => returns array of keys

console.log("keys===>", Object.keys(person));  //[ 'name', 'age', 'surname' ]

// 2. Object.values() => return array of values

console.log("values===>", Object.values(person)); // [ 'Vishnu', 24, 'Solanki' ]

// 3. Object.entries() => return array of key and value

console.log("entries===>", Object.entries(person));  //[ [ 'name', 'Vishnu' ], [ 'age', 24 ], [ 'surname', 'Solanki' ] ]

// 4. Object.assign() 
//    Object.assign() is a very useful method for copying values from one object to the other.
//    It accepts two parameters: a target object and a source to copy from. 
//    Both of the parameters need to be objects. We can copy from more than one object. Let’s go straight to a simple example:
//    Object.assign(target, ...sources);

const newObj = Object.assign(person1,person);   //{ name: 'Vishnu', salary: '1000000', age: 24, surname: 'Solanki' }

console.log("assign===>", newObj)

// 5. Object.create()

const data = {
    isHuman: false,
   name:'Abc'
  };
  
  const me = Object.create(data);
  
  me.name = 'Vishnu'; // 
  me.isHuman = true; // 
  
console.log("me===>", me)  //{ name: 'Vishnu', isHuman: true }

