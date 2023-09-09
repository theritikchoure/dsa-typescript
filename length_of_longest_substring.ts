//? TAG - MEDIUM

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// ------------------------------------------------------------------------------------------------------------

// BRUTE FORCE APPROACH

// Time Complexity: O(N^2)
// Space Complexity: O(N)
function lengthOfLongestSubstring(str: string): number {
    // If the input string has a length of 0 or 1, return its length
    if (str.length <= 1) return str.length;

    let longest: number = 0; // Initialize the length of the longest substring

    for (let left: number = 0; left < str.length; left++) {
        let strMap: Map<string, any> = new Map(); // Create a map to track characters in the current substring
        let currentLength: number = 0; // Initialize the length of the current substring

        for (let right: number = left; right < str.length; right++) {
            let currentChar: string = str[right]; // Get the current character

            if (strMap.has(currentChar)) {
                // If the character is already in the substring, break the loop
                break;
            } else {
                currentLength++; // Increment the length of the current substring
                strMap.set(currentChar, true); // Mark the character as seen
                longest = Math.max(longest, currentLength); // Update the longest substring length
            }
        }
    }

    return longest; // Return the length of the longest substring without repeating characters
}

// ------------------------------------------------------------------------------------------------------------

// OPTIMAL SOLUTION
// Time Complexity: O(N)
// Space Complexity: O(m), where m is the number of unique characters in the string
function lengthOfLongestSubstring2(str: string): number {

    // If the input string has a length of 0 or 1, return its length
    if (str.length <= 1) return str.length;

    let left:number = 0;

    let longest:number = 0;

    let strMap: Map<string, number> = new Map();

    for(let right: number = 0; right < str.length; right++) {
        let currentChar:string = str[right];

        // Get the previous seen position of the current character
        let previousSeenPos:number | undefined = Number(strMap.get(currentChar));

        // If the previous seen position is greater than or equal to the current left pointer position
        if(previousSeenPos >= left) {

            // Update the left pointer to the position after the previous seen position
            left = previousSeenPos + 1;
        }

        // Update the map with the current character's position
        strMap.set(currentChar, right);

        // Calculate the length of the current substring and update the longest length if needed
        longest = Math.max(longest, right - left + 1);
    }

    return longest;
}



// ------------------------------------------------------------------------------------------------------------

let s:string = "abccbe";

console.log("Brute force approach: ", lengthOfLongestSubstring(s)) // Call brute force function

console.log("Sliding window approach: ", lengthOfLongestSubstring2(s)) // Call optimal solution function
