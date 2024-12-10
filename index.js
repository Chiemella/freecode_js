

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


// TASK
// Given the array numberGroups, use bracket notation to access the value 12 and assign it to the variable selectedNumber.

const numberGroups = [
  [5, 6, 7],                      //arr[0]
  [8, 9, 10],                     //arr[1]
  [11, 12, 13],                   //arr[2]
  [[14, 15, 16], 17, 18]          //arr[3]
];

const selectNumber = numberGroups[2][1];
console.log(selectNumber);


/* 
const colorsArr = ["red", "blue", "green", "yellow"];

// Your task: Use .pop() to remove the last color from colorsArr 
// and store it in the variable lastColor.

const lastColor = ""; // Change this line

console.log(lastColor); // This should display: "yellow"
console.log(colorsArr); // This should display: ["red", "blue", "green"]

*/

const colorsArr = ["red", "blue", "green", "yellow"];
const lastColor = colorsArr.pop();

console.log(lastColor);
console.log(colorsArr);





/* Task
Given the array fruitsArr, use the .shift() method to remove the first fruit and store it in a variable called firstFruit. Then, print both firstFruit and fruitsArr to see the results.
*/

const fruitsArrv = ["apple", "banana", "cherry", "date"];
const firstFruit = fruitsArrv.shift()
console.log(fruitsArrv);
console.log(firstFruit);




/* 
Given the array animalsArr, use the .shift() method to remove the first animal and then use the .unshift() method to add a new animal to the beginning of the array. Store the removed animal in a variable called removedAnimal, and then print both removedAnimal and animalsArr to see the results.



*/


const animalsArr = ["lion", "tiger", "bear", "zebra"];

const removedAnimal = animalsArr.shift();
console.log(removedAnimal);

animalsArr.unshift("Elephant");
console.log(animalsArr);


/* 
Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity.


*/
const myList = [
  ["Garri", 50],
  ["Beans", 20],
  ["Rice", 30],
  ["Egg", 100],
  ["Tea", 500]
];


/* 
Create a function called greetUser that takes a parameter name. The function should output the string "Hello, [name]!" to the console, where [name] is replaced by the actual name passed to the function.

Then, call greetUser with a sample name, like "Alice", and check the output in the console.

*/

function greetUser(name) {
  console.log("Hello " + name + "!");
}
greetUser("Williams");


/* 
Task:

Create a function called calculateArea that takes two arguments: length and width. The function should calculate the area of a rectangle using these dimensions and return the result.

*/

function calculateArea(length, width) {
  console.log(length + width);
}

calculateArea(2, 10)
calculateArea(10, 10)



/* 

Task: Create a Multiplication Function

Define a function called multiplyByTen that takes a single argument num.
Inside the function, return the result of num multiplied by 10.
Call the function with the following numbers: 3, 7, and 0.5.
Store each result in a separate variable and then log each result to the console.
Example
If your function is working correctly, calling multiplyByTen(3); should return 30. Similarly, multiplyByTen(7); should return 70, and multiplyByTen(0.5); should return 5.

 */


function multiplyByTen(num) {
  return num * 10
}

const answer1 = multiplyByTen(3);
const answer2 = multiplyByTen(7);
const answer3 = multiplyByTen(0.5);

console.log(answer1);
console.log(answer2);
console.log(answer3);




/* 
This code demonstrates the difference between a globally scoped variable declared with let and a global variable created without let or const inside a function.
*/

// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


/* 

Task: Practice with Global and Local Scope

Define a global variable called city and assign it the value "Paris".

Create a function called visitPlace.

Inside this function, define a local variable called city with the value "Tokyo".

The function should return the value of city.

Call the function visitPlace and store the returned result in a variable called placeToVisit.

Log placeToVisit and city to the console.


Expected Output:

Calling visitPlace should return "Tokyo" because the local city inside the function takes priority.
Logging city outside the function should output "Paris" because that is the global city variable.

*/


const city = "Paris";

function visitToPlace(Tokyo) {
  const city = "Tokyo";
  return city;


}

console.log(visitToPlace());
console.log(city);

// Task - Write a function that accepts an array of numbers and returns the sum of all positive numbers in the array. If the array is empty or has no positive numbers, the function should return 0.

let nameOp = "tobi"

function greet(John) {
  nameOp = "Parkins"
  return nameOp;
}

console.log(greet());
console.log(nameOp)






// Another Task: Write two functions, addTen and addTwenty, that modify a global variable total. The addTen function should add 10 to total, and addTwenty should add 20. Neither function should return any value (they should return undefined).

let total = 0;
function addTen() {
  total = 10 + total;
}

function addTwenty() {
  total = 20 + total;

}

addTen()
addTwenty()
console.log(total) // 0


// Another Task: Write a Function and Assign its Result to a Variable

function calculateResult(num) {
  return (num * 4 + 6) / 2;
}

let finalResult = calculateResult(8);
console.log(finalResult)




/* 

Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.

*/


function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();

}

let testArr = [1, 2, 3, 4, 5];


// Boolean: TRUE OR FALSE & IF Statement
function test(myCondition) {
  if (myCondition) {
    return "Y"
  }

  return "N"

}


console.log(test(true));
console.log(test(false));


/*


function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if (wasThatTrue){
  return "Yes, that was true"
}

return "No, that was false"

  // Only change code above this line

}

trueOrFalse(true)
trueOrFalse(false)

*/


function testVal(myValx) {
  if (myValx == 10) {
    return "Equal"
  }

  return "Not Equal"
}

console.log(testVal(5))



/*

Comparison with the Strict Equality Operator
Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

*/


function testStrict(valp) {
  if (valp === 7) {
    return "Yes"
  }
  return "No"

}


console.log(testStrict(7))
console.log(testStrict(0))
console.log(testStrict(12))


/* 

Comparison with the Inequality Operator
The inequality operator (!=) is the opposite of the equality operator. Inequality means not equal. The inequality operator returns false when the equality operator would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

*/

function testNotEqual(Nun) {
  if (Nun != 99) {
    return "Hope dey"
  }
  return "Hope no dey"

}

console.log(testNotEqual(99));


/* 

The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.

*/

function testStrictNotEqual(oka) {
  if (oka !== 17) {
    return "Failed";
  }
  return "Pass";
}

console.log(testStrictNotEqual(10));





/*

Comparison with the Greater Than Operator

The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, the greater than operator will convert data types of values while comparing.

Examples

*/

function testGreaterThan(sapa) {
  if (sapa > 100) {
    return "Sapa Above 100"
  }
  if (sapa > 10) {
    return "Sapa Above 10"
  }
  return "10 or Under"
}

console.log(testGreaterThan(10));


/*
You run a store where:

People aged between 18 and 25 (inclusive) are eligible for a discount.
If the person is outside this age range, they are not eligible.

*/

function checkDiscountEligibility(age) {
  // Check if the age is between 18 and 25 (inclusive)
  if (age <= 18 && age >= 25) {
    return "Eligible for Discount"
  }
  // Return not eligible if the condition is not met
  return "Not ELigible "

}


// Test the function with different ages
console.log(checkDiscountEligibility(17)); // Not eligible for discount
console.log(checkDiscountEligibility(18)); // Eligible for discount
console.log(checkDiscountEligibility(20)); // Eligible for discount
console.log(checkDiscountEligibility(25)); // Eligible for discount
console.log(checkDiscountEligibility(26)); // Not eligible for discount



/*

Task:

Write a function checkEligibility(age) that returns "Eligible" if the person is eligible for a driver's license based on the following conditions:

Age is 18 or older, or
The person has been authorized by a guardian if they are under 18 (this means there’s a variable hasGuardianApproval that will be true or false).
If neither of the conditions are met, return "Not Eligible".

Use the logical OR (||) operator to combine the conditions.

Hint:

If age >= 18 or hasGuardianApproval === true, return "Eligible".
Otherwise, return "Not Eligible".

*/

function checkEligibility(afo, hasGuardianApproval) {
  // Check if the person is eligible based on age or guardian approval

  if (afo >= 18 || hasGuardianApproval === true) {
    return "Yes";
  }
  return "No";
}

console.log(checkEligibility(20));




/*

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  if (val < 5) {
    return "Smaller than 5";
  }

  return "Between 5 and 10";
}

testElseIf(7);                       

*/

function testElseIf(fol) {
  if (fol > 10) {
    return "Greater than 10"; w
  } else if (fol < 5) {
    return "Smaller than 5";
  } else {
    return "Btw 5 and 10";
  }
}


console.log(testElseIf(7));



//  Further workings

function orderMyLogic(okay) {
  if (okay < 5) {
    return "Less than 5"
  } else if (okay < 10) {
    return "Less than 10"
  } else {
    return "Greater than or equal to 10"
  }
}

console.log(orderMyLogic(7))



// if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:

function testSize(fam) {
  if (fam < 5) {
    return "Tiny";
  } else if (fam < 10) {
    return "Small"
  } else if (fam < 15) {
    return "Big"
  } else if (fam < 20) {
    return "Huge"
  } else {
    return "Void"
  }
}

console.log(testSize(25));






/*

We are trying to write a function golfScore that takes two inputs:

par — the expected number of strokes for a golfer to complete the hole.
strokes — the actual number of strokes the golfer used to complete the hole.
The goal is to return a string based on how many strokes the golfer took compared to the par value. Here's a breakdown of the possible strings we need to return:

1 stroke → "Hole-in-one!"
2 strokes less than par or more → "Eagle"
1 stroke less than par → "Birdie"
Exactly equal to par → "Par"
1 stroke more than par → "Bogey"
2 strokes more than par → "Double Bogey"
3 or more strokes more than par → "Go Home!"

*/


const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes === 1) {
    return names[0]; // "Hole-in-one!"
  } else if (strokes <= par - 2) {
    return names[1]; // "Eagle"
  } else if (strokes === par - 1) {
    return names[2]; // "Birdie"
  } else if (strokes === par) {
    return names[3]; // "Par"
  } else if (strokes === par + 1) {
    return names[4]; // "Bogey"
  } else if (strokes === par + 2) {
    return names[5]; // "Double Bogey"
  } else {
    return names[6]; // "Go Home!"
  }
}



/*
If you need to match one value against many options, you can use a switch statement. A switch statement compares the value to the case statements which define various possible values. Any valid JavaScript statements can be executed inside a case block and will run from the first matched case value until a break is encountered.
*/


function caseInSwitch(lol) {
  let answer = ""

  switch (lol) {

    case 1:
      answer = "Alpha"
      break;

    case 2:
      answer = "Mega"
      break;
  }
  return answer;
}

console.log(caseInSwitch(1));


/*

In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.

*/


function switchOfStuff(rom) {
  let answer = ""
  switch (rom) {

    case "a":
      answer = "Oops"
      break;

    case "b":
      answer = "Joh"
      break;

    default:
      answer = "Hmm"
  }
  return answer
}

console.log(switchOfStuff("a"));




