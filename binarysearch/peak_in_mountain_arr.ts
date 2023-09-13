// An array arr is a mountain if the following properties hold:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

// You must solve it in O(log(arr.length)) time complexity.

// Example 1: Input: arr = [0,1,0] || Output: 1
// Example 2: Input: arr = [0,2,1,0] || Output: 1
// Example 3: Input: arr = [0,10,5,2] || Output: 1

// --------------------------------------------------------------------------------------------------------------------------------------------

function peakIndexInMountainArray(arr:number[]): number {
    // Initialize a variable `start` to 0, representing the start index of the search range.
    let start: number = 0;
    // Initialize a variable `end` to the last index of the input array, representing the end index of the search range.
    let end: number = arr.length - 1;

    // Calculate the initial midpoint index of the search range.
    let mid: number = Math.floor(start + (end - start) / 2);

    // Start a while loop that continues as long as `start` is less than `end`.
    while (start < end) {
        // Check if the value at the midpoint of the array is less than the value at the next index.
        if (arr[mid] < arr[mid + 1]) {
            // If the condition is true, update the `start` variable to be one index to the right of the midpoint.
            start = mid + 1;
        } else {
            // If the condition is false, update the `end` variable to be the midpoint itself.
            end = mid;
        }

        // Recalculate the midpoint index based on the updated `start` and `end` values.
        mid = Math.floor(start + (end - start) / 2);
    }

    // Return the `start` index, which represents the peak index of the mountain array.
    return start;
}

let mountainArray:number[] = [0, 15, 25, 2];

console.log(peakIndexInMountainArray(mountainArray))