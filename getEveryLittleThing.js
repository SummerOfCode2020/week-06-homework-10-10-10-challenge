/* 
 @Challenge 07 - Write a function name `getEveryLittleThing` that has an array with three objects and returns an array of all of those objects
 Objects in the array should all have properties such as `size`, `singin`, `saying`
 @Example - Expect to get an array of three birds

     Sparrow: {
         size: 'little',
         singin: true,
         sayin: 'This is my message to you'
     },
     Robin: {
         size: 'little',
         singin: true,
         sayin: 'This is my message to you'
     },
     BlueJay: {
         size: 'little',
         singin: true,
         sayin: 'This is my message to you'
     }
 ]
 @Test - console.log the result of a function call to `getEveryLittleThing()` and expect to see an array of three objects
*/

let birds =
{
    sparrow:{
    size: 'little',
    singin: true,
    sayin: 'This is my message to you'
},
    robin: {
        size: 'little',
        singin: true,
        sayin: 'This is my message to you'
    },
    blueJay: {
        size: 'little',
        singin: true,
        sayin: 'This is my message to you'
    }
}

function getEveryLittleThing(array) {

    return array
}

console.log(getEveryLittleThing(birds.sparrow))