// Given an array A of size N of integers. Your task is to find the minimum and maximum elements in the array.
// Example 1:
// Input:
// N = 6
// A[] = {3, 2, 1, 56, 10000, 167}
// Output: 1 10000
// Explanation: minimum and maximum elements of array are 1 and 10000.
// Example 2:
// Input:
// N = 5
// A[]  = {1, 345, 234, 21, 56789}
// Output: 1 56789
// Explanation: minimum and maximum element of array are 1 and 56789.
// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)
// -------------------------------------------------------------------------------------------------------------------
// BRUTE FORCE APPROACH
// Time Complexity: O(N)
// Space Complexity: O(1)
function findMinMax(arr) {
    // Initialize variables to store the minimum and maximum values.
    var min = arr[0];
    var max = arr[0];
    // Iterate through the array starting from the second element (index 1).
    for (var i = 1; i < arr.length; i++) {
        // Check if the current element is smaller than the current minimum.
        if (min > arr[i]) {
            // If yes, update the minimum value.
            min = arr[i];
        }
        // Check if the current element is larger than the current maximum.
        if (max < arr[i]) {
            // If yes, update the maximum value.
            max = arr[i];
        }
    }
    // Print the minimum and maximum values.
    console.log(min, max);
}
var findMinMaxArr = [3, 2, 1, 56, 1000, 167];
var findMinMaxArr2 = [1, 345, 234, 21, 56789];
findMinMax(findMinMaxArr);
findMinMax(findMinMaxArr2);
