

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


/* Understand String Immutability
In JavaScript, String values are immutable, which means that they cannot be altered once created.

For example, the following code will produce an error because the letter B in the string Bob cannot be changed to the letter J:

let myStr = "Bob";
myStr[0] = "J";
Note that this does not mean that myStr could not be re-assigned. The only way to change myStr would be to assign it with a new value, like this:

let myStr = "Bob";
myStr = "Job"; */
 let Mstr = "Jello World";
 Mstr = "Hello World";
 console.log(Mstr);

 /*  */
 const firstName = "Ada";
const secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName);

/* Use Bracket Notation to Find the Last Character in a String
In order to get the last letter of a string, you can subtract one from the string's length.

For example, if const firstName = "Ada", you can get the value of the last letter of the string by using firstName[firstName.length - 1].

Example:

const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
lastLetter would have a value of the string a.
 */

const hopeAny = "Nwanne";
const anyHope = hopeAny[hopeAny.length - 1];
console.log(anyHope);


/* Word Blanks
You are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.

Consider this sentence:

It was really ____, and we ____ ourselves ____.
This sentence has three missing pieces- an adjective, a verb and an adverb, and we can add words of our choice to complete it. We can then assign the completed sentence to a variable as follows:

const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
 */

const legText = "dog";
const handText = "fat"
const eyeText = "a";

const wordText = "This " + "is " + eyeText + " " + handText + " " + legText;
console.log(wordText)


/* Store Multiple Values in one Variable using JavaScript Arrays
With JavaScript array variables, we can store several pieces of data in one place.

You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:

const sandwich = ["peanut butter", "jelly", "bread"];
 */

/* const myArray = ["hope", 12,];
console.log(myArray); */



/* Nest one Array within Another Array
You can also nest arrays within other arrays, like below:

const teams = [["Bulls", 23], ["White Sox", 45]];
This is also called a multi-dimensional array. */

/* const muArray = [["Hope"], [12]];
console.log(muArray); */


/* Access Array Data with Indexes
We can access the data inside arrays using indexes.

Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array has an index of 0.


Example

const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
The console.log(array[0]) prints 50, and data has the value 60. */

const muArray = [12, 30, 90];
const myData = muArray[0];

console.log(myData);



/* Modify Array Data With Indexes
Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.

Example

const ourArray = [50, 40, 30];
ourArray[0] = 15;
ourArray now has the value [15, 40, 30].

Note: There shouldn't be any spaces between the array name and the square brackets, like array [0]. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

Modify the data stored at index 0 of myArray to a value of 45.

*/


const ouArray = [23, 37, 80];
ouArray[0] = 100;
console.log(ouArray);
