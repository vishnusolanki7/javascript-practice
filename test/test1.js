//use map & filter

const student = [
    {
        //1
        name:'mahesh',
        age:20,
        pers:34,
        state:'gujarat'
    },
    {
        //2
        name:'Alpes',
        age:17,
        pers:33,
        state:'Mumbai'
    },
    {
        //3
        name:'Mihir',
        age:18,
        pers:35,
        state:'Rajestan'
    },
    {
        //4
        name:'jitendra',
        age:17,
        pers:35,
        state:'karela'
    },
    {
        //5
        name:'laksh',
        age:18,
        pers:35,
        state:'Punjab'
    },
    {
        //6
        name:'Vivek',
        age:17,
        pers:91,
        state:'Delhi'
    },
    {
        //7
        name:'jay',
        age:18,
        pers:35,
        state:'gujarat'
    },
    {
        //8
        name:'Nilesh',
        age:18,
        pers:35,
        state:'gujarat'
    },
    {
        //9
        name:'Mitesh',
        age:18,
        pers:35,
        state:'gujarat'
    },
    {
        //10
        name:'Minal',
        age:18,
        pers:35,
        state:'gujarat'
    },
    {
        //11
        name:'vishnu',
        age:20,
        pers:35,
        state:'gujarat'
    },
    {
        //12
        name:'Alpes',
        age:17,
        pers:35,
        state:'Delhi'
    },
    {
        //13
        name:'Priyap',
        age:20,
        pers:70,
        state:'Maharastra'
    },
    {
        //14
        name:'jitendra',
        age:17,
        pers:35,
        state:'Madhyapresh'
    },
    {
        //15
        name:'laksh',
        age:21,
        pers:80,
        state:'gujarat'
    },
    {
        //16
        name:'Vivek',
        age:21,
        pers:95,
        state:'gujarat'
    },
    {
        //17
        name:'Pushp',
        age:18,
        pers:39,
        state:'gujarat'
    },
    {
        //18
        name:'Nilesh',
        age:18,
        pers:90,
        state:'gujarat'
    },
    {
        //19
        name:'Mitesh',
        age:18,
        pers:52,
        state:'gujarat'
    },
    {
        //20
        name:'Minal',
        age:18,
        pers:33,
        state:'mp'
    }


]

// console.log("student===>", student);     


//name from  v wise print
let newPersonDetails1  = student.filter(n => n.name.toLowerCase().startsWith('v'))

console.log("newPersonDetails1===>", newPersonDetails1);

// ================================
//Grace from 33 to 35 = 2 add
const newPersonDetails2 = student.filter(function(element){
  
     
    if(element.pers>=33 && element.pers<=35){
        element.pers=element.pers+2
        return element
      }else{
        return element
      }

})

console.log("newPersonDetails2===>", newPersonDetails2);

// ================================
//state gujarat wise name print
let newPersonDetails3  = student.filter(s =>s.state === 'gujarat')
console.log("newPersonDetails3===>", newPersonDetails3);

// ================================
//Age >20 && Marks>70

const newPersonDetails4 = student.filter(function(element){
  
    if(element.age>20 && element.pers>70){
        return element
      }
})

console.log("newPersonDetails4===>", newPersonDetails4);

// ================================
//age>17 & last leter p
let newPersonDetails5  = student.filter(function(element){
  
    if(element.age>17 &&  element.name.toLowerCase().endsWith('p')){
         return element
      }
})

console.log("newPersonDetails5===>", newPersonDetails5);

// ================================
//Vivek marks > 90
let newPersonDetails6  = student.filter(function(element){
  
    if(element.pers>=90 && element.name.toLowerCase().startsWith('vivek')){
         return element
      }
})

console.log("newPersonDetails6===>", newPersonDetails6);