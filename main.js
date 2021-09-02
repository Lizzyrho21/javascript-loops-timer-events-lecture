console.log("Sanity!");

// - Create an empty `name_array`
// - Ask the user ```Enter a word. Enter 'q' to quit.``` 
// Add each word they enter to the array
// - Create a while loop that will keep asking for words to add to the array 
// until they enter 'q'

// - When the user enters 'q'
//  use a **for** loop to print each word from the array

// - NOTE: Your code 
// should handle the case of the entered quite letter `Q`

let name_array = []; // empty array


let userQuestions = true; // starts as true because the user is asking questions 
let quit = 'Q'.toLowerCase(); // set a variable to equal 'q' or 'Q' for use to press to quit.

while(userQuestions) //while loop keeps running while true
{
let askUser = prompt("Enter a word or press q to quit"); // Ask user to enter a word or press q to quit.
name_array.push(askUser); // push whatever they enter into the array

if (askUser === quit) // what happens if user press 'q' or 'Q'??
{
 userQuestions === false; // turns to false or questions turns OFF.
 break; // break the loop
}
};
console.log(name_array); // store the entires in the console.log!!

// creating a while loop 

//===TYPES OF LOOPS===//

// types of loops 
// for loop -used the most 
// while loop -used the most 
// do-while loop the do while will only iterate once 

//example of a for loop
//here is the condition!
// 1. the index starts at 0, if the index is less than the set number, the index will keep counting up from 0 (0, 1, 2, 3,...9)
// for(let index = 0; index < 10; index++)
// {
//     // console.log(` current iteration is ${index}`);
// }

// let whileNotEddie = true; // flag or boolean.
// //keep asking the user for a cool name until they enter Eddie
// while(whileNotEddie){

//     let coolName = prompt("Enter a cool name!");
//     // did they enter eddie?
//     if(coolName === "Eddie") {
//         whileNotEddie === false;
//     }
// }