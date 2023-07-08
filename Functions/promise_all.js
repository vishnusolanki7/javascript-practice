
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 3000);
});

Promise.all([p1, p2, p3]).then((values) => {
//   console.log(values); // [3, 1337, "foo"]
});

Promise.allSettled([
    Promise.resolve(33),
    new Promise((resolve) => setTimeout(() => resolve(66), 0)),
    99,
    Promise.reject(new Error("an error")),
  ]).then((values) => console.log(values));
  
  // [
  //   { status: 'fulfilled', value: 33 },
  //   { status: 'fulfilled', value: 66 },
  //   { status: 'fulfilled', value: 99 },
  //   { status: 'rejected', reason: Error: an error }
  // ]