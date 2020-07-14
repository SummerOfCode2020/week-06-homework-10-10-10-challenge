/* 
 @Challenge 03 - Write a function named `showMeTheMoney` that loops from 1 to 200. 
 Use a condition in the loop to console.log the number when it is over 190
 @Example - Expect to see 191, 192, 193, 194, 195, 196, 197, 198, 199, 200 in the terminal
 @Test - Make a function call of  `showMeTheMoney()`
*/

function showMeTheMoney(num){
  let newArray = []
  if(num > 190){
    for(let i = 191; i <= num; i++)
    newArray.push(i)
  }
  return newArray
} 

console.log(showMeTheMoney(220))