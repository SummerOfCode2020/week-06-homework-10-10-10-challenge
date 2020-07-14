/* 
 @Challenge 02 - Write a function named `makeEchoes` that loops for the number of times indicated and console.log's "Echo!" in each loop
 @Example - Sending the function a value of 5 will result in 5 "Echo!"'s in the terminal
 @Test - Make a function call of  `makeEchoes(5)`
*/

function makeEchoes(num){
  newArray = []
  for(let i=1; i<=num; i++){
    newArray.push("Echo!")
  }
  return newArray
}

console.log(makeEchoes(3))