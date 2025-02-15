# String Calculator

### Description

addStringNumbers is a JavaScript function that takes a string of numbers, separated by either commas (,) or newline characters (\n), and returns their sum. The function also supports custom delimiters, which can be defined at the beginning of the input string. Additionally, it throws an error if negative numbers are encountered.

### Features

Supports both , and \n as default delimiters.

Allows specifying a custom delimiter using //<delimiter>\n format.

Throws an error if negative numbers are included in the input.

Ignores empty input and returns 0.


## Usage


##### Add console.log statements to the end of the index.js file to test it
console.log(addStringNumbers("1,2,3")); // Output: 6
console.log(addStringNumbers("1\n2,3")); // Output: 6
console.log(addStringNumbers("//;\n1;2;3")); // Output: 6
console.log(addStringNumbers("")); // Output: 0

## Handling Negative Numbers

If the input contains negative numbers, an error is thrown:

// Output: Negative numbers not allowed: -2, -4

## Tests

To test the function, you can use Jest or any other testing framework.

```npm run test```
