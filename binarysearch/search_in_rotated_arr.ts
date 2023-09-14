/* There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

? You must write an algorithm with O(log n) runtime complexity.

Input: nums = [4,5,6,7,0,1,2], target = 0 || Output: 4
Input: nums = [4,5,6,7,0,1,2], target = 3 || Output: -1
Input: nums = [1], target = 0 || Output: -1

--------------------------------------------------------------------------------------------------------------------------------------------
*/

function getPivot(arr:number[]):number {
    let start: number = 0;
    let end: number = arr.length - 1;

    let mid: number = Math.floor(start + (end - start) / 2);

    while (start < end) {
        if (arr[mid] >= arr[0]) {
            start = mid + 1;
        } else {
            end = mid;
        }

        mid = Math.floor(start + (end - start) / 2);
    }

    return start;
}

function BS(arr: number[], s:number, e:number, target: number): number {
    // Initialize left and right pointers to the start and end of the array
    let left: number = s;
    let right: number = e;

    // Calculate the initial mid-point
    let mid: number = left + Math.floor((right - left) / 2);

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

function searchInRotatedArr(arr:number[], target:number): number {
    let pivot:number = getPivot(arr);

    if(target >= arr[pivot] && target <= arr[arr.length - 1]) {
        return BS(arr, pivot, arr.length-1, target)
    } else {
        return BS(arr, 0, pivot-1, target);
    }
}

let rotatedArr:number[] = [4,5,6,7,0,1,2];

console.log(searchInRotatedArr(rotatedArr, 1));