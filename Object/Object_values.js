
  //example 1

  const obj = {
    a: 'somestring',
    b: 42,
    c: false
   };

  // 2. Object.values(obj) – returns an array of values.

   console.log("Obj Values===>",Object.values(obj));
  
  // expected output: Array ["somestring", 42, false]


  //example 2
  
  const obj2 = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4'
   }
   
 
   console.log("Obj2 values===>",Object.values(obj2));
  // expected output: 
  // Obj Values===> [ 'somestring', 42, false ]
  // Obj2 values===> [ 'value1', 'value2', 'value3', 'value4' ]