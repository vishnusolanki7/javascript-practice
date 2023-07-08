//example 1

const obj = {
    a: 'somestring',
    b: 42,
    c: false
  };

// 1. Object.keys -> returns an array of keys.

  console.log("obj keys===>",Object.keys(obj));
  // expected output: Array ["a", "b", "c"]



  //example 2
  
  const obj2 = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4'
 }
 
 console.log("keys===>",Object.keys(obj2));