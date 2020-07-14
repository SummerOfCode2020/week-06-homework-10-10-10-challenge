/* 
 @Challenge 06 - Write a function that accepts an array names. Name the function `sayHiToJim` that loops through the array of names.
 Use a condition in the loop to check if the name is "Jim". If the name is "Jim" console.log a message to say "Hi Jim"
 Use conditional logic to console.log "Ignoring " and then the name of the person being ignored.
 @Example - Expect to see "Ignorning Jane" and "Ignoring Anita Bath" when the function is given an array of ["Jane", "Anita Bath"]
 @Test01 - Make a function call `sayHiToJim(["Jane", "Anita Bath"])`
 @Test02 - Make a function call `sayHiToJim(["Jane", "Anita Bath", "Jim", "Sam Sung"])`
*/

function sayHiToJim(names){
  let ignoreNames = []
  let finalOutput = []
  let ignore = "Ignore "
  names.forEach(element => {
    if(element == "Jim"){
       finalOutput.push("Hi Jim")
    }
    else if(element !== "Jim"){
       ignoreNames.push(ignore.concat(element))
    }
  });
  if(finalOutput == "Hi Jim"){
  return finalOutput
  } else {
    return ignoreNames
  }
}

console.log(sayHiToJim(["Jane", "Anita Bath", "Jim", "Sam Sung"]))
console.log(sayHiToJim(["Jane", "Anita Bath"]))