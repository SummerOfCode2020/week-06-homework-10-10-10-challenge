/* 
 @Challenge 10 - Write a function named `getHighScore` that finds the highest value in an array of scores
 @Example - Sending the function a value of [1999,2020,3080,1111] will result in 3080
 @Test - Write a console.log that shows the value of `getHighScore([1999,2020,3080,1111])`
*/

function getHighScore(scoreArray){
  let higherScore = 0
  scoreArray.forEach(indivScore => {
    if(higherScore < indivScore){
      higherScore = indivScore
    }
  });
  return higherScore
}

console.log(getHighScore([1999,2020,3080,1111]))