  
  
  // 3. Object.entries(obj) – returns an array of [key, value] pairs.
   
  
  //example 1

  const obj = {
    a: 'somestring',
    No: 42
  };

   console.log("Obj entries===>", Object.entries(obj));
  
  // expected output:
  // Obj===> [ [ 'a', 'somestring' ], [ 'No', 42 ] ]
  

  //example 2
  
  const obj2 = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4'
   }
 
   console.log("Obj2 entries===>",Object.entries(obj2));
  
  //  expected output: 
  //  Obj2 entries===> [
  //   [ 'key1', 'value1' ],
  //   [ 'key2', 'value2' ],
  //   [ 'key3', 'value3' ],
  //   [ 'key4', 'value4' ]
  //   ]
