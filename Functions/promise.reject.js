
const resolved = (result) =>{
    console.log("resolved ==>",result);
}
 

const rejected = (result) =>{
    console.error("rejected ==>",result);
}
 
  
  Promise.reject(new Error('fail')).then(resolved, rejected);
  // expected output: Error: fail
    