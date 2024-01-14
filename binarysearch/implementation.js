function binarySearch(arr, target) {
    // Initialize left and right pointers to the start and end of the array
    var left = 0;
    var right = arr.length - 1;
    // Calculate the initial mid-point
    var mid = left + Math.floor((right - left) / 2);
    // Continue searching while the left pointer is less than or equal to the right pointer
    while (left <= right) {
        // Check if the middle element is equal to the target
        if (arr[mid] === target) {
            // If found, return the index of the target
            return mid;
        }
        // If the middle element is greater than the target, adjust the right pointer
        if (arr[mid] > target) {
            right = mid - 1;
        }
        // If the middle element is less than the target, adjust the left pointer
        if (arr[mid] < target) {
            left = mid + 1;
        }
        // Recalculate the mid-point for the next iteration
        mid = left + Math.floor((right - left) / 2);
    }
    // If the target is not found, return 0 (or another suitable value)
    return 0;
}
// Example usage:
var binarySearchSortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(binarySearchSortedArr, 7)); // Output: 6 (index of 7 in the array)
