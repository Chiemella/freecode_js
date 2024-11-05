

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