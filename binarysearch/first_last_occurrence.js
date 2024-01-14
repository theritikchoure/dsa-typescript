"use strict";
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
Object.defineProperty(exports, "__esModule", { value: true });
exports.findFirstLastOccurrence = exports.findLastOccur = exports.findFirstOccur = void 0;
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// --------------------------------------------------------------------------------------------------------------------------------------------------
// ? Time complexity - O(Log N)
//? Space complexity - O(1)
function findFirstOccur(nums, target) {
    // Initialize the position to -1 (in case the target is not found)
    var pos = -1;
    // Initialize left and right pointers to the start and end of the array
    var left = 0;
    var right = nums.length - 1;
    // Calculate the initial mid-point
    var mid = left + Math.floor((right - left) / 2);
    // Continue searching while the left pointer is less than or equal to the right pointer
    while (left <= right) {
        if (nums[mid] === target) {
            // If the middle element is equal to the target, update the position and move left
            pos = mid;
            right = mid - 1;
        }
        else if (nums[mid] > target) {
            // If the middle element is greater than the target, adjust the right pointer
            right = mid - 1;
        }
        else {
            // If the middle element is less than the target, adjust the left pointer
            left = mid + 1;
        }
        // Recalculate the mid-point for the next iteration
        mid = left + Math.floor((right - left) / 2);
    }
    // Return the position where the target was found (or -1 if not found)
    return pos;
}
exports.findFirstOccur = findFirstOccur;
function findLastOccur(nums, target) {
    // Initialize the position to -1 (in case the target is not found)
    var pos = -1;
    // Initialize left and right pointers to the start and end of the array
    var left = 0;
    var right = nums.length - 1;
    // Calculate the initial mid-point
    var mid = left + Math.floor((right - left) / 2);
    // Continue searching while the left pointer is less than or equal to the right pointer
    while (left <= right) {
        if (nums[mid] === target) {
            // If the middle element is equal to the target, update the position and move right
            pos = mid;
            left = mid + 1;
        }
        else if (nums[mid] > target) {
            // If the middle element is greater than the target, adjust the right pointer
            right = mid - 1;
        }
        else {
            // If the middle element is less than the target, adjust the left pointer
            left = mid + 1;
        }
        // Recalculate the mid-point for the next iteration
        mid = left + Math.floor((right - left) / 2);
    }
    // Return the position where the target was found (or -1 if not found)
    return pos;
}
exports.findLastOccur = findLastOccur;
function findFirstLastOccurrence(nums, target) {
    // Find the first and last occurrences of the target using the two helper functions
    var first = findFirstOccur(nums, target);
    var last = findLastOccur(nums, target);
    // Return an array containing the first and last occurrences
    return [first, last];
}
exports.findFirstLastOccurrence = findFirstLastOccurrence;
var findOccurrenceArr = [5, 7, 7, 8, 8, 8, 10];
console.log(findFirstLastOccurrence(findOccurrenceArr, 7));
