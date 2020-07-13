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
function increaseLevel(number) {
    // Increase number by 1
    number++
    return number
}

console.log(increaseLevel(10))
/* 
 @Challenge 02 - Write a function named `makeEchoes` that loops for the number of times indicated and console.log's "Echo!" in each loop
 @Example - Sending the function a value of 5 will result in 5 "Echo!"'s in the terminal
 @Test - Make a function call of  `makeEchoes(5)`
*/
//initially used an if statement, then re-did the problem
/*function makeEchoesOne(numberRepeats) {
    // set the message to be printed
        const msg = 'Echo!';
        // if the numberRepeats is greater than 0, go into if statement
    if (numberRepeats > 0) {
        // return the message the repeated number of times requested
        return msg.repeat(numberRepeats)
    } else {
        return ""
}
}

console.log(makeEchoesOne(5))
*/
function makeEchoesTwo(numberRepeats) {
    // using a while loop
    // set the message to be looped
    const msg = 'Echo! ';
    // an empty string to fill with the message
    string = "";
    // while the number of repeats is greater than 0, do the following
    while (numberRepeats > 0) {
        // the string is now equal to the string + the message
        //since the string had nothing in it to start, the string equals "Echo! "
        string = string + msg;
        // the number of repeats (5) is equal to the number of repeats - 1
        numberRepeats = numberRepeats - 1
        // the number of repeats equals 4
        // string now equals "Echo! Echo! "
        // the number of repeats equals 3
        // string now equals "Echo! Echo! Echo! "
        // and so on...
    }
    return string
}

console.log(makeEchoesTwo(5))

/* 
 @Challenge 03 - Write a function named `showMeTheMoney` that loops from 1 to 200. 
 Use a condition in the loop to console.log the number when it is over 190
 @Example - Expect to see 191, 192, 193, 194, 195, 196, 197, 198, 199, 200 in the terminal
 @Test - Make a function call of  `showMeTheMoney()`
*/
function showMeTheMoney(dollars) {
    // if dollars are more than 0, continue to the loop
    if (dollars > 0) {
        // loop from 0 to 200, increasing by 1
        for (let i = 0; i < 200; i++) {
            // if the iteration is greater than 190
            if (i > 190) {
                // print the iteration until the loop ends
                console.log(i)
            }
        }
    }
    return dollars
}
console.log(showMeTheMoney(200))
/*
 @Challenge 04 - Write a function named `showTheFifties` that loops from 1 to 200.
 Use a condition in the loop to console.log the number when it is over 49 and under 60
 @Example - Expect to see 50, 51, 52, 53, 54, 55, 56, 57, 58, 59 in the terminal
 @Test - Make a function call of  `showTheFifties()`
*/
function showTheFifties(vintageItem) {
    // if variable is greater than 0, continue to for loop
    if (vintageItem > 0) {
        // loop 0 to 200, increasing by an increment of 1
        for (let i = 0; i < 200; i++) {
            // if the iteration is between the numbers 49 and 60
            if (i > 49 && i < 60)
                // print those numbers, then continue increasing without
                // printing the numbers 60 to 200
                console.log(i)
        }
    }
    return vintageItem
}
console.log(showTheFifties(200))
/*
 @Challenge 05 - Write a function that returns an array that is named `getTheTwenties` that loops from 1 to 60 and returns an array of all the 20's
 Use a condition in the loop to push to an array when the number is greater than or equal to 20 and under 30
 @Example - Expect an array returned with value of [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
 @Test - console.log the result of a function call of  `getTheTwenties()` and expect to see an array value of [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
*/
function getTheTwenties(twenties) {
    // create a new array
    let arr = [];
    // set the start and end points for ease of reading
    let start = 20;
    let end = 30;
    // loop through the array 60 times
    for (let i = 0; i < 60; i++) {
        // when the iteration hits 20, push it to the new array
        // do this for all iterations until instructed to end
        // when the iteration hits 30, do not push to the array
        if (i > start && i < end) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(getTheTwenties(60))
/*
 @Challenge 06 - Write a function that accepts an array names. Name the function `sayHiToJim` that loops through the array of names.
 Use a condition in the loop to check if the name is "Jim". If the name is "Jim" console.log a message to say "Hi Jim"
 Use conditional logic to console.log "Ignoring " and then the name of the person being ignored.
 @Example - Expect to see "Ignorning Jane" and "Ignoring Anita Bath" when the function is given an array of ["Jane", "Anita Bath"]
 @Test01 - Make a function call `sayHiToJim(["Jane", "Anita Bath"])`
 @Test02 - Make a function call `sayHiToJim(["Jane", "Anita Bath", "Jim", "Sam Sung"])`
*/
// THIS FUNCTION KEEPS GETTING UNDEFINED FROM JANE AND ANITA'S ARRAY
function sayHiToJim(nameList) {
    // looping through each array's list of names
    for (i = 0; i < nameList.length; i++) {
        //if the array includes the string "Jim" return "Hi Jim"
        if (nameList.includes("Jim")) {
            return "Hi Jim";
            //otherwise forEach item/element in the array, console.log "Ignoring <person's name>"
        } else {
            return nameList.forEach(element => console.log("Ignoring " + element))
        }
    }
}

console.log(sayHiToJim(["Jane", "Anita Bath", "Jim", "Sam Sung"]))
console.log(sayHiToJim(["Jane", "Anita Bath"]))
/*
 @Challenge 07 - Write a function name `getEveryLittleThing` that has an array with three objects and returns an array of all of those objects
 Objects in the array should all have properties such as `size`, `singin`, `saying`
 @Example - Expect to get an array of three birds
 */

const arr1 = [
    {
        size: 'little',
        singin: 'tweettweet',
        sayin: 'I am a chickadee!'
    },

    {
        size: 'bigger',
        singin: 'chirpchirp',
        sayin: 'I am a robin!'
    },
    {
        size: 'biggest',
        singin: 'cawcaw',
        sayin: 'I am a crow!'
    }
]
function getEveryLittleThing(arr) {
    // create an array to return values to
    arr2 = []
    // loop through the array so long as the array has length, increase by 1
    for (i = 0; i < arr1.length; i++) {
        // from the original array, go to the first item and splice the location zero
        // first item: { size: 'little', singin: 'tweettweet', sayin: 'I am a chickadee!' }
        arr1.splice(i, 0);
        // push this spliced item to the new array
        arr2.push(arr1[i]);
        // loops through again cutting the second item out and pushing it to the end of the new array
    }
    return arr2
}
console.log(getEveryLittleThing(arr1))
/*
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
const letterGrade = ["H", "G", "F", "E", "D", "C", "B", "A"]

function showLetterGrades(letters) {
    // if letters is "E", return nothing
    if (letters == "E") {
        return ""
    } else {
        // otherwise return the letters in the array
        console.log(letters)
    }
}

letterGrade.forEach(showLetterGrades)

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
function trackGallonsUsed(gallons) {
    // set the msg variable to be the string to be printed
    const msg = " Gallons Remaining";
    // while loop to countdown the gallons remaining
    // while the gallons are more than 0
    while (gallons > 0) {
        // set the count to equal gallons remaining + the message
        count = gallons + msg;
        // reduce the number of gallons by 1
        gallons -= 1
        // print the gallons and msg for each iteration
        console.log(count)
    }
    // print when there are 0 Gallons remaining
    return gallons + msg

}

console.log(trackGallonsUsed(4))
/*
 @Challenge 10 - Write a function named `getHighScore` that finds the highest value in an array of scores
 @Example - Sending the function a value of [1999,2020,3080,1111] will result in 3080
 @Test - Write a console.log that shows the value of `getHighScore([1999,2020,3080,1111])`
*/

function getHighScore(score) {
    // found this Math.max which is supposed to
    // pull and return the largest number from an array
    // apply can take in two values/parameters/arrays
    // I only had one, so I put the other as null
    return Math.max.apply(null, score);
};
console.log(getHighScore([1999, 2020, 3080, 1111]))