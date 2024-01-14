// Given an array arr[] and an integer K where K is smaller than size of array, the task is to find the 
// Kth smallest element in the given array. It is given that all array elements are distinct.
// Example 1:
// Input: arr[] = 7 10 4 3 20 15, K = 3
// Output : 7
// Explanation : 3rd smallest element in the given array is 7.
// Example 2:
// Input: arr[] = 7 10 4 20 15, K = 4
// Output : 15
// Explanation : 4th smallest element in the given array is 15.
// ------------------------------------------------------------------------------------------------------
// Brute force approach
// Explain - Sort array in ascending order using sorting algorithm or built-in sorting function. And then kth smallest
// element will be at k-1 index in the sorted array (0 based indexing)
// Time complexity - O(n log n) due to the sorting step of n elements
// ------------------------------------------------------------------------------------------------------
// Using heap
// Time complexity -  O(n + k * log n), where:
// O(n): Building the min-heap initially takes O(n) time, where n is the size of the input array.
// O(k * log n): Extracting the minimum element (root) from the heap k times involves heapify operations, each taking O(log n) time.
// Space complexity - O(1)
// Function to perform heapify operation to maintain min-heap property
function heapify1(arr, size, index) {
    var _a;
    var smallest = index;
    var left = 2 * index + 1; // Calculate the left child index
    var right = 2 * index + 2; // Calculate the right child index
    // Check if the left child exists and is smaller than the current smallest element
    if (left < size && arr[left] < arr[smallest]) {
        smallest = left;
    }
    // Check if the right child exists and is smaller than the current smallest element
    if (right < size && arr[right] < arr[smallest]) {
        smallest = right;
    }
    // If the smallest element is not the current element, swap them and continue heapifying
    if (smallest !== index) {
        _a = [arr[smallest], arr[index]], arr[index] = _a[0], arr[smallest] = _a[1];
        heapify1(arr, size, smallest);
    }
}
// Function to build a min-heap from an array
function buildMinHeap(arr) {
    var size = arr.length;
    // Start from the last non-leaf node and heapify each node in reverse order
    for (var i = Math.floor(size / 2) - 1; i >= 0; i--) {
        heapify1(arr, size, i);
    }
}
// Function to find the kth smallest element in an array
function kthElement1(arr, k) {
    var _a;
    var size = arr.length;
    // Build a min-heap from the input array
    buildMinHeap(arr);
    console.log(arr);
    // Remove the root (minimum element) k-1 times
    for (var i = 0; i < k - 1; i++) {
        _a = [arr[size - 1], arr[0]], arr[0] = _a[0], arr[size - 1] = _a[1];
        size--; // Reduce the size of the heap
        heapify1(arr, size, 0);
    }
    // The kth smallest element is now at the root of the min-heap
    return arr[0];
}
// Example array and k value
var kthArray1 = [7, 10, 4, 20, 15];
var kValue1 = 3;
// Find and print the kth smallest element
console.log(kthElement1(kthArray1, kValue1)); // Output: 15
