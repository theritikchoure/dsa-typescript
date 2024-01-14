// Define a string variable
var str = "Hello world!";
// Log the original string to the console
console.log(str);
// Function to reverse a string using a loop
// Time complexity - O(n)
// Space complexity - O(n)
function reverse(s) {
    // Convert the string into an array of characters
    var strArr = s.split("");
    // Initialize an empty array to store the reversed characters
    var reverseArr = [];
    // Iterate over the characters in reverse order
    for (var i = strArr.length - 1; i >= 0; i--) {
        // Append each character to the reversed array
        reverseArr.push(strArr[i]);
    }
    // Join the reversed characters to form the reversed string
    var reverseStr = reverseArr.join("");
    // Log the reversed string to the console
    console.log(reverseStr);
}
// Call the reverse function with the input string
reverse(str);
// Function to reverse a string in-place using a loop
// Time complexity - O(n)
// Space complexity - O(1)
function reverseStr1(str) {
    // Convert the string into an array of characters
    var strArr = str.split("");
    // Calculate the length of the string
    var length = strArr.length - 1;
    // Iterate over the first half of the characters
    for (var i = 0; i < (length + 1) / 2; i++) {
        // Swap characters between the beginning and end of the string
        var temp = strArr[i];
        strArr[i] = strArr[length];
        strArr[length] = temp;
        // Update the end index
        length--;
    }
    // Join the reversed characters to form the reversed string
    var reverseStr = strArr.join("");
    // Log the reversed string to the console
    console.log(reverseStr);
}
// Call the reverseStr1 function with the input string
reverseStr1(str);
// Function to reverse a string using built-in JavaScript methods
function reverse2(str) {
    // Use split, reverse, and join methods to reverse the string
    console.log(str.split("").reverse().join(""));
}
// Call the reverse2 function with the input string
reverse2(str);
