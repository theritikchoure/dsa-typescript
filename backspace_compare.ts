//? Tag - EASY

// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

// --------------------------------------------------------------------------------------------------------------------------------------------------

// BRUTE FORCE SOLUTION

// Time complexity = O(m+n);
// Space complexity = O(m+n);
// Function to remove backspaces ('#') from a string
function removeBackspace(s: string): string {
    let str = s.split("");    // Convert the input string to an array of characters
    let strFinal: string[] = []; // Create an array to store the characters after backspace removal

    for (let i: number = 0; i < str.length; i++) {
        if (str[i] === '#') {
            strFinal.pop(); // If a backspace is encountered, remove the last character from strFinal
        } else {
            strFinal.push(str[i]); // If a character other than a backspace, push it onto strFinal
        }
    }

    return strFinal.join(""); // Convert the array of characters back to a string and return it
}

// Function to compare two strings after applying backspace removal
function backspaceCompare(s1: string, s2: string): boolean {
    let s1FinalString: string = removeBackspace(s1); // Remove backspaces from the first string
    let s2FinalString: string = removeBackspace(s2); // Remove backspaces from the second string

    // Check if the lengths of the final strings are different
    if (s1FinalString.length !== s2FinalString.length) {
        return false;
    }

    // Compare the characters in the final strings character by character
    for (let i: number = 0; i < s1FinalString.length; i++) {
        if (s1FinalString[i] !== s2FinalString[i]) {
            return false; // Characters don't match, strings are not equal
        } else {
            return true; // Characters match, continue checking the next character
        }
    }

    return false; // If all characters match, return true; otherwise, return false
}


// -----------------------------------------------------------------------------------------------------------------------------------------------

// OPTIMAL SOLUTION

// Time Complexity:
// In the worst-case scenario, the while loop iterates through both strings, comparing characters and handling backspace characters.
// The worst-case time complexity is O(max(N, M)), where N is the length of s1, and M is the length of s2.
// This is because in the worst case, you may need to iterate through both strings entirely.

// Space Complexity:
// The space complexity of this function is O(1), which means it uses a constant amount of additional space regardless of the input string lengths.
// The function uses only a few integer variables (i, j, backCount) and does not use any data structures or arrays that depend on the input size.
function backspaceCompare2(s1: string, s2: string): boolean {
    // Initialize two pointers at the end of both strings
    let i: number = s1.length - 1;
    let j: number = s2.length - 1;

    // Start iterating from the end of both strings
    while (i >= 0 && j >= 0) {
        // Check if the current characters are backspaces ('#') in either string
        if (s1[i] === '#' || s2[j] === '#') {
            // Handle backspaces in s1
            if (s1[i] === '#') {
                let backCount: number = 2;

                // Continue counting consecutive backspaces
                while (backCount > 0) {
                    i--;
                    backCount--;

                    // Handle cases with multiple consecutive backspaces
                    if (s1[i] === '#') {
                        backCount = backCount + 2;
                    }
                }
            }

            // Handle backspaces in s2
            if (s2[j] === '#') {
                let backCount: number = 2;

                // Continue counting consecutive backspaces
                while (backCount > 0) {
                    j--;
                    backCount--;

                    // Handle cases with multiple consecutive backspaces
                    if (s2[j] === '#') {
                        backCount = backCount + 2;
                    }
                }
            }
        } else {
            // If current characters are not backspaces, compare them
            if (s1[i] !== s2[j]) {
                return false; // Characters don't match, strings are not equal
            } else {
                // Characters match, move both pointers one position to the left
                i--;
                j--;
            }
        }
    }

    // After the loop, if both pointers reached the beginning of the strings, the strings are equal
    return i < 0 && j < 0;
}


// -----------------------------------------------------------------------------------------------------------------------------------------------

let str1 = "ab#c";
let str2 = "add##c";

let isSame:boolean = backspaceCompare(str1, str2); 
let isSameAgain:boolean = backspaceCompare2(str1, str2); 

console.log(isSame)
console.log(isSameAgain)