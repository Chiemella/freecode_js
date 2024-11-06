

/* 

Constructing Strings with Variables
Sometimes you will need to build a string. By using the concatenation operator (+), you can insert one or more variables into a string you're building.

Example:

const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";
ourStr would have a value of the string Hello, our name is freeCodeCamp, how are you?.
*/
const myName = "Chiemella,";
const myStr = "My name is " + myName + " I am well!";
console.log(myStr)


/* Appending Variables to Strings
Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals (+=) operator.

Example:

const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
ourStr would have the value freeCodeCamp is awesome!.
 */

const someAdjective = "nice";
let myLtr = "Learning coding is ";

myLtr += someAdjective
console.log(myLtr)


/* Find the Length of a String
You can find the length of a String value by writing .length after the string variable or string literal.

console.log("Alan Peter".length);
The value 10 would be displayed in the console. Note that the space character between "Alan" and "Peter" is also counted.

For example, if we created a variable const firstName = "Ada", we could find out how long the string Ada is by using the firstName.length property.
 */
let lastNameLength = 0;
const lastName = "Love";

// Calculate the length of `lastName` and assign it to `lastNameLength`
lastNameLength = lastName.length;

console.log(lastNameLength); // Outputs: 4



/* 
Use Bracket Notation to Find the First Character in a String
Bracket notation is a way to get a character at a specific index within a string.

Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as Zero-based indexing.

For example, the character at index 0 in the word Charles is C. So if const firstName = "Charles", you can get the value of the first letter of the string by using firstName[0].

Example:

const firstName = "Charles";
const firstLetter = firstName[0];
firstLetter would have a value of the string C. 
*/
let firstLetterOfLastName = "";
const lastNameOf = "Lolace";

firstLetterOfLastName = lastNameOf[0];
console.log(firstLetterOfLastName);

