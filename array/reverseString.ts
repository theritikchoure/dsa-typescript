// Define a string variable
let str: string = "Hello world!";

// Log the original string to the console
console.log(str);

// Function to reverse a string using a loop
// Time complexity - O(n)
// Space complexity - O(n)
function reverse(s: string): void {
    // Convert the string into an array of characters
    let strArr: string[] = s.split("");

    // Initialize an empty array to store the reversed characters
    let reverseArr: string[] = [];

    // Iterate over the characters in reverse order
    for (let i: number = strArr.length - 1; i >= 0; i--) {
        // Append each character to the reversed array
        reverseArr.push(strArr[i]);
    }

    // Join the reversed characters to form the reversed string
    let reverseStr: string = reverseArr.join("");

    // Log the reversed string to the console
    console.log(reverseStr);
}

// Call the reverse function with the input string
reverse(str);

// Function to reverse a string in-place using a loop
// Time complexity - O(n)
// Space complexity - O(1)
function reverseStr1(str: string): void {
    // Convert the string into an array of characters
    let strArr: string[] = str.split("");
    
    // Calculate the length of the string
    let length: number = strArr.length - 1;

    // Iterate over the first half of the characters
    for (let i: number = 0; i < (length + 1) / 2; i++) {
        // Swap characters between the beginning and end of the string
        let temp: string = strArr[i];
        strArr[i] = strArr[length];
        strArr[length] = temp;

        // Update the end index
        length--;
    }

    // Join the reversed characters to form the reversed string
    let reverseStr: string = strArr.join("");

    // Log the reversed string to the console
    console.log(reverseStr);
}

// Call the reverseStr1 function with the input string
reverseStr1(str);

// Function to reverse a string using built-in JavaScript methods
function reverse2(str: string): void {
    // Use split, reverse, and join methods to reverse the string
    console.log(str.split("").reverse().join(""));
}

// Call the reverse2 function with the input string
reverse2(str);
