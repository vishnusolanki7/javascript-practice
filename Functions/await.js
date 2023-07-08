//The async keyword in the function declaration and the await keyword for that place where we calls our function

// 1)Example 1

let funcAsync = new Promise((res, rej) => {
    setTimeout(() => {
        res("Resolved After 4 second");
    }, 4000);
});

//async function

let func = async () => {
    let result = await funcAsync;
    console.log(result);
    console.log("After Waiting this will be executed ");
};

func();