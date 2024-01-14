// ? TAG - EASY
// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.
// Example 1:
// Input: arr[]= {0 2 1 2 0}
// Output: 0 0 1 2 2
// Explanation: 0s 1s and 2s are segregated into ascending order.
// Example 2:
// Input: arr[] = {0 1 0}
// Output: 0 0 1
// Explanation: 0s 1s and 2s are segregated into ascending order.
// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)
// -------------------------------------------------------------------------------------------------------------------
// BRUTE FORCE SOLUTION
// Time complexity: O(N)
// Space complexity: O(1)
function sort012(arr) {
    // Initialize count variables for 0s, 1s, and 2s.
    var count0 = 0;
    var count1 = 0;
    var count2 = 0;
    // Count the occurrences of 0s, 1s, and 2s in the array.
    for (var i_1 = 0; i_1 < arr.length; i_1++) {
        if (arr[i_1] === 0) {
            count0++;
        }
        else if (arr[i_1] === 1) {
            count1++;
        }
        else {
            count2++;
        }
    }
    // Initialize an index variable.
    var i = 0;
    // Fill the array with 0s first, followed by 1s, and then 2s.
    while (count0 > 0) {
        arr[i] = 0;
        i++;
        count0--;
    }
    while (count1 > 0) {
        arr[i] = 1;
        i++;
        count1--;
    }
    while (count2 > 0) {
        arr[i] = 2;
        i++;
        count2--;
    }
    // Output the sorted array.
    console.log(arr);
}
// ---------------------------------------------------------------------------------------------------------------------
// OPTIMAL SOLUTION (Using Dutch National Flag Algorithm (Checkout guide/dutch_national_flag_algo.md)) 
// Time complexity - O(N);
// Space complexity - O(1);
function sort012Again(arr) {
    var _a, _b;
    var low = 0; // Initialize a pointer for 0s at the beginning of the array
    var mid = 0; // Initialize a pointer for 1s in the middle of the array
    var high = arr.length; // Initialize a pointer for 2s at the end of the array
    for (var i = 0; i < arr.length; i++) {
        if (arr[mid] === 0) { // If the current element is 0, move it to the low section
            _a = [arr[mid], arr[low]], arr[low] = _a[0], arr[mid] = _a[1]; // Swap arr[low] and arr[mid]
            low++; // Move the low pointer to the right
            mid++; // Move the mid pointer to the right
        }
        if (arr[mid] === 1) { // If the current element is 1, it's in the correct place (mid)
            mid++; // Move the mid pointer to the right
        }
        if (arr[mid] === 2) { // If the current element is 2, move it to the high section
            _b = [arr[high], arr[mid]], arr[mid] = _b[0], arr[high] = _b[1]; // Swap arr[mid] and arr[high]
            high--; // Move the high pointer to the left
        }
    }
}
// ---------------------------------------------------------------------------------------------------------------------
var arr012 = [0, 2, 1, 2, 0];
var arr012Again = [0, 2, 1, 2, 0];
sort012(arr012);
sort012Again(arr012Again);
