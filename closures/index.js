// const globalNum = 5;

// function logNum () {

//     const localNum = 1;
//     console.log(globalNum + localNum);
// }

// logNum();

// function example () {

//     const num = 5;

//     return function  () {
//         console.log(num);

//     }

// }

// const innerFunction = example();
// innerFunction();

// function makeFunction() {
//   let privateNum = 0;

//   function privateIncrement() {
//     privateNum++;
//   }

//   return {
//     logNum: () => console.log(privateNum),
//     increment: () => {
//       privateIncrement();
//       console.log("incremeneted");
//     },
//   };
// }


// const {logNum, increment} = makeFunction();

// logNum();
// increment();
// logNum();



// for(var i = 0; i < 3; i++){

//     setTimeout( () => {

  
//     }, 500);

// }

// console.log(i)

// const button = document.querySelector('button');
// const ouptut = document.getElementById('output');

// button.addEventListener('click', showThis);

// function showThis() {
//   output.textContent = this;
// }


// Welcome to our Playground!


// function bark() {
//   console.log("bark");
// }

// function meow() {
//   console.log('meow')
// }
// function speak() {
//   console.log('speaking');
//   bark();
//   meow();
//   console.log('done speaking');
// }

// speak();
// Understanding Task queue, call stack, the event loop more in depth.
// How the javascript engine works 
// for example: if we had these 3 function and invoked the speak function what would happen? in the call stack?
// Which is part of the even loop.
// callstack

// console.log('speaking')
// speak()

// console.log('speaking') runs then is popped off the call stack
// javascript runtime enviroment 

// function logWorld() {
//     console.log('world')
//   }
  
//   function main() {
//     console.log('hello')
//     setTimeout(logWorld, 1000)
//     console.log('goodbye')
//   }
  
//   main();
  