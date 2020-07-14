/* 
 @Challenge 09 - Write a function named `trackGallonsUsed` that uses a `while` loop and shows a 
 countdown in the console of how many gallons are left until there are no gallons left
  Hint: Within the loop, decrement the number of gallons
  Hint: Use the number of gallons remaining as the predicate
 @Example - Sending the function a value of 4 will result in 
 "4 Gallons Remaining"
 "3 Gallons Remaining"
 "2 Gallons Remaining"
 "1 Gallons Remaining"
  in the terminal
 @Test - Make a function call of `trackGallonsUsed(5)`
*/
//


function trackGallonsUsed(remainingGas){
 
  let i= remainingGas 
  while(i > 0){
    let tempString = []
    tempString.push(i)
    tempString.push('Gallons Remaining')
    console.log(tempString.join(' '))
    i = i-1
  }
}

console.log(trackGallonsUsed(4))