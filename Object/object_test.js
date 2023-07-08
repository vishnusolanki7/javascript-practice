 //example 1
  const person = {
    name: 'Vishnu',
    age: 24,
  };
  
  const member = person;
  
  member.age = 25;
  
  console.log("person===>",person);
  console.log("member===>",member);

  const test = Object.assign(member, person);

  console.log("New values===>", test);


 //example 2

  const student= {
    firstName : "vishnu",
    lastName : "solanki",

    fullName:function(){
      return this.firstName+" "+this.lastName;
    }
  }

  console.log("student===>", student.fullName());


  