/* 
 @Challenge 08 - Write a function name `showLetterGrades` that console.logs letter grades
 The function should have a variable named `letters` with a value of ["H","G", "F", "E", "D", "C", "B", "A"]
 The function should use a condition in loop to console.log letters of A, B, C, D or F
 Poor E
 @Example - calling `showLetterGrades` will result in the terminal displaying
 F
 D
 C
 B
 A
 @Test - Make a function call of `showLetterGrades()`
 */
function showLetterGrades() {
  let letters = ["H", "G", "F", "E", "D", "C", "B", "A"]
  let grades = 'FDCBA'
  let arrayGrades =[]
  for (let i = 0; i < letters.length; i++) {
    if (grades.indexOf(letters[i]) >= 0) {
      console.log(letters[i])
    }
  }
}
let result = showLetterGrades()
console.log(result)