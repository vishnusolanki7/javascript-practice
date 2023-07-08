   prototypeObject = {
	fullName: function(){
		return this.firstName + " " + this.lastName		
	}
}
const person = Object.create(prototypeObject)

// console.log("person===>",person) // Object with prototype object as prototypeObject and no properties

// Adding properties to the person object
person.firstName = "Vishnu";
person.lastName = "Solanki";

person.fullName()

// console.log("person===>",person) 

//secound example
const widget = {
    firstColor: 'purple',
    secoundColor: 'red'
};

const clonedWidget = Object.assign(widget);

// console.log("widget===>",widget);

// console.log("cloneWidget===>",clonedWidget);

for (let key in widget) {
    console.log("Key===>",key); // logs keys in myObject
    console.log("values===>",widget[key]); // logs values in myObject
  
}