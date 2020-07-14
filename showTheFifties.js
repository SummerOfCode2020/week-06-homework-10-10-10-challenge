/* 
 @Challenge 04 - Write a function named `showTheFifties` that loops from 1 to 200. 
 Use a condition in the loop to console.log the number when it is over 49 and under 60
 @Example - Expect to see 50, 51, 52, 53, 54, 55, 56, 57, 58, 59 in the terminal
 @Test - Make a function call of  `showTheFifties()`
*/

function showTheFifties(){
  newArray =[]
  for (let i = 1; i <=200; i++){
  if (i> 49 && i <60)
  {
    newArray.push(i)
   }
  }
  return newArray
}
  

console.log(showTheFifties())