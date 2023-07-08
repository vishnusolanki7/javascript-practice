// true
console.log( true ? 'true/Yes': 'true/No' );

// "hello" (or 'any-word')
console.log( "hello" ? '"hello"/Yes': '"hello"/No' );

// 1 (or N)
console.log( 1 ? '1/Yes': '1/No' );

// -1 (or -N)
console.log( -1 ? '-1/Yes': '-1/No' );

// function (empty or non-empty)
const func = function(){ /* ... */ };
console.log( func ? 'func/Yes': 'func/No' );

// object (empty or non-empty)
const object = {};
console.log( object ? 'object/Yes': 'object/No' );

// array (empty or non-empty)
const array = [];
console.log( array ? 'array/Yes': 'array/No' );