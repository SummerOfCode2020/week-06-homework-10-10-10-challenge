/**
    NO COPY AND PASTE! NONE! YES THIS IS SHOUTING! 🗣😎
    The goal is to train your hands and fingers to write code.
    Write all of the syntax to train your hands 👐.
    For each challenge, write the code from scratch, fully from scratch no matter how similar to the previous challenge.
    These challenges were written between 2 AM and 3 AM. If anything is confusing as a result, be sure to ask for clarification.
    Remember. No copy pasta. 🍝 Zero. Zilch. Nessuna. Ninguno. Aon Cheann.
 */

/*
 @Challenge 01 - Write a function named `increaseLevel` that adds 1 to any number value passed in as a parameter
 @Example - Sending the function a value of 10 will result in 11
 @Test - Write a console.log that shows the value of `increaseLevel(10)`
*/

// original function notation
function increaseLevel(number) {
    return number + 1
}
console.log(increaseLevel(10))
console.log(increaseLevel(25))

// fat arrow function notation
increaseLevelAlt = (number) => {
    return number + 1
}
console.log(increaseLevelAlt(9))

/*
 @Challenge 02 - Write a function named `makeEchoes` that loops for the number of times indicated and console.log's "Echo!" in each loop
 @Example - Sending the function a value of 5 will result in 5 "Echo!"'s in the terminal
 @Test - Make a function call of  `makeEchoes(5)`
*/

function makeEchoes(number) {
    for (let i = 0; i < number; i++) {
        console.log('Echo!')
    }
    // added a return statement otherwise it ends with undefined - not sure how to avoid this
    return 'All done!'
}
console.log(makeEchoes(5))

function makeEchoesAlt(number) {
    let echoArray = []
    for (let i = 0; i < number; i++) {
        echoArray.push('Echo!')
    }
    return echoArray
}
console.log(makeEchoesAlt(4))

/*
 @Challenge 03 - Write a function named `showMeTheMoney` that loops from 1 to 200.
 Use a condition in the loop to console.log the number when it is over 190
 @Example - Expect to see 191, 192, 193, 194, 195, 196, 197, 198, 199, 200 in the terminal
 @Test - Make a function call of  `showMeTheMoney()`
*/

function showMetheMoney(number) {
    for (let i = 0; i <= number; i++) {
        if (i > 190) {
            console.log(i)
        }
    }
    return 'All done!'
}
console.log(showMetheMoney(200))

showMetheMoneyAlt = (number) => {
    over190Array = []
    for (let i = 0; i <= number; i++) {
        if (i > 190) {
            over190Array.push(i)
        }
    }
    return over190Array
}
console.log(showMetheMoneyAlt(200))

/*
 @Challenge 04 - Write a function named `showTheFifties` that loops from 1 to 200.
 Use a condition in the loop to console.log the number when it is over 49 and under 60
 @Example - Expect to see 50, 51, 52, 53, 54, 55, 56, 57, 58, 59 in the terminal
 @Test - Make a function call of  `showTheFifties()`
*/

showTheFifties = (number) => {
    for (let i = 0; i <= number; i++) {
        if (49 < i && i < 60) {
            console.log(i)
        }
    }
    return 'All done!'
}
console.log(showTheFifties(200))

showTheFiftiesAlt = (number) => {
    let fiftiesArray = []
    for (let i = 0; i <= number; i++) {
        if (49 < i && i < 60) {
            fiftiesArray.push(i)
        }
    }
    return fiftiesArray
}
console.log(showTheFiftiesAlt(200))

/*
 @Challenge 05 - Write a function that returns an array that is named `getTheTwenties` that loops from
 1 to 60 and returns an array of all the 20's
 Use a condition in the loop to push to an array when the number is greater than or equal to 20 and under 30
 @Example - Expect an array returned with value of [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
 @Test - console.log the result of a function call of  `getTheTwenties()` and expect to see an array value of
 [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
*/

function getTheTwenties(number) {
    let twentiesArray = []
    for (i = 0; i <= number; i++) {
        if (20 <= i && i < 30) {
            twentiesArray.push(i)
        }
    }
    return twentiesArray
}
console.log(getTheTwenties(60))

getTheTwentiesAlt = (number) => {
    let twentiesArray = []
    for (let i = 0; i <= number; i++) {
        if (20 <= i && i < 30)
            twentiesArray.push(i)
    }
    return twentiesArray
}
console.log(getTheTwentiesAlt(60))

/*
 @Challenge 06 - Write a function that accepts an array names. Name the function `sayHiToJim` that loops through the array of names.
 Use a condition in the loop to check if the name is "Jim". If the name is "Jim" console.log a message to say "Hi Jim"
 Use conditional logic to console.log "Ignoring " and then the name of the person being ignored.
 @Example - Expect to see "Ignorning Jane" and "Ignoring Anita Bath" when the function is given an array of ["Jane", "Anita Bath"]
 @Test01 - Make a function call `sayHiToJim(["Jane", "Anita Bath"])`
 @Test02 - Make a function call `sayHiToJim(["Jane", "Anita Bath", "Jim", "Sam Sung"])`
*/

function sayHiToJim(names) {
    names.forEach(name => {
        if (name === 'Jim') {
            console.log('Hi ' + name)
        } else {
            console.log('Ignoring ' + name)
        }
    });
    return 'All done!'
}
console.log(sayHiToJim(["Jane", "Anita Bath"]))
console.log(sayHiToJim(["Jane", "Anita Bath", "Jim", "Sam Sung"]))

// this is telling me that names.ForEach is not a function, but I'm not sure why yet.
sayHiToJimAlt = (names) => {
    let greetingArray = []
    names.ForEach(name => {
        if (name === 'Jim') {
            greetingArray.push('Hi ' + name)
        } else {
            greetingArray.push('Ignoring ' + name)
        }
    });
    return greetingArray
}
console.log(sayHiToJimAlt(["Jane", "Anita Bath"]))

/*
 @Challenge 07 - Write a function name `getEveryLittleThing` that has an array with three objects and returns an array of all of those objects
 Objects in the array should all have properties such as `size`, `singin`, `saying`
 @Example - Expect to get an array of three birds
 [
     {
         size: 'little',
         singin: true,
         sayin: 'This is my message to you'
     },
     {
         size: 'little',
         singin: true,
         sayin: 'This is my message to you'
     },
     {
         size: 'little',
         singin: true,
         sayin: 'This is my message to you'
     }
 ]
 @Test - console.log the result of a function call to `getEveryLittleThing()` and expect to see an array of three objects
*/

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

/*
 @Challenge 09 - Write a function named `trackGallonsUsed` that uses a `while` loop and shows a countdown in the console of how many gallons are left until there are no gallons left
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


/*
 @Challenge 10 - Write a function named `getHighScore` that finds the highest value in an array of scores
 @Example - Sending the function a value of [1999,2020,3080,1111] will result in 3080
 @Test - Write a console.log that shows the value of `getHighScore([1999,2020,3080,1111])`
*/
