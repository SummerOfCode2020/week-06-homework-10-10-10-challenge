/* 
 @Challenge 05 - Write a function that returns an array that is named `getTheTwenties` that loops from 1 to 60 and returns an array of all the 20's
 Use a condition in the loop to push to an array when the number is greater than or equal to 20 and under 30
 @Example - Expect an array returned with value of [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
 @Test - console.log the result of a function call of  `getTheTwenties()` and expect to see an array value of [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
*/

function getTheTwenties(array){
  newArray = []

  for(let i=1; i<=60; i++){
  array.forEach(item => {
    if(item>= 20 && item < 30){
      newArray.push(item)
    }
  });
  return newArray
}
  
}

console.log(getTheTwenties([21, 50, 20, 15, 24, 29, 70]))