const person = [
    {
        name:'vishnu',
        salary:20000,
        abc:'def'
    },
    {
        name:'Alpes',
        salary:40000
    },
    {
        name:'Mihir',
        salary:50000
    }
]

// const newPersonDetails1 = person.splice(function(element,index,arr){
//     console.log("element===>",element);
//     console.log("index===>",index);
//     // console.log("arr===>",arr);
//       return {
//                 element
//       }
    
//         // return element;
//     })

// console.log("newPersonDetails1===>", newPersonDetails1);

// const a = person.find((data)=>data.name==="vishnu")
person.splice(0,1,Object.assign(person[0],{name:'abc'}))
console.log("a===>",person)