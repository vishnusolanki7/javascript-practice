const a = 10;
console.log("🚀 ~ file: type.js ~ line 2 ~ a",typeof a)
const b = '20';
console.log("🚀 ~ file: type.js ~ line 4 ~ b",typeof b)
const c = [1,2,3,4];
console.log("🚀 ~ file: type.js ~ line 6 ~ c",typeof c)
const d = {
    name:"vishnu",
    age:25
}
console.log("🚀 ~ file: type.js ~ line 11 ~ d",typeof d)
const e = true
console.log("🚀 ~ file: type.js ~ line 13 ~ e",typeof e)
const f = 20.10
console.log("🚀 ~ file: type.js ~ line 15 ~ f",typeof f)

const g = null;
const name = {name:"Vishnu"}
console.log("🚀 ~ file: type.js ~ line 19 ~ g", g)
let h ;
console.log("🚀 ~ file: type.js ~ line 21 ~ h", h)
name.name = 'abc';

//To add key value pair in object
name.age = 25;
name['gender'] = 'male'


// ----------------
const arr = [1,2,3,4,5];

console.log(`arr====>  ${arr}       `)
arr.push(6)
arr.pop()
console.log("name===>name ${arr} ", name);





const v = 0;
if(v){
    console.log('v');
}
else{
    console.log("dsaff");
}

