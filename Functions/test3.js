let grades = 50
let funds = 60

let minGrade = 40
let minFund = 50

let promise = new Promise((resolve, reject) => {
  if (grades > minGrade) {
    if (funds > minFund) {
      resolve("Hurray, you got yourself a bicycle!")
    } else {
      reject("Sorry, no funds!")
    }
  } else {
    reject("You didn't even beat the grades!")
  }
})


promise.then((res)=>{
    // console.log('res ==>',res);
}).catch((err)=>{
    // console.log('err ==>',err);
})


console.log('promise ==>',promise);