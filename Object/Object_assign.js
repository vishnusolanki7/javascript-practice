

// 4. Object.assign() is a very useful method for copying values from one object to the other.
//    It accepts two parameters: a target object and a source to copy from. 
//    Both of the parameters need to be objects. We can copy from more than one object. Let’s go straight to a simple example:

let box = {
    height: 10,
    width: 20
};

let style = {
    color: 'Red',
    borderStyle: 'solid'
};

let styleBox = Object.assign(box, style);

console.log("styleBox===>",styleBox);


  
