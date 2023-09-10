

// --------------------------------------------------------------------------------------------------------------------

// BRUTE FORCE APPROACH

// Time Complexity - O(n+m), where n is the length of the arr1 and m is the length of the arr2
// Space Complexity - O(n+m), where n is the length of the array1 and m is the length of the array2
function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
    // Initialize an empty array to store the merged result
    let mergeArr: number[] = [];

    // Initialize pointers for both input arrays
    let i = 0;
    let j = 0;

    // Initialize variables to track the current elements being compared
    let arr1Item = arr1[i];
    let arr2Item = arr2[j];

    // Handle the case when arr1 is empty
    if (arr1.length === 0) {
        mergeArr = arr2;
    }

    // Handle the case when arr2 is empty
    if (arr2.length === 0) {
        mergeArr = arr1;
    }

    // Continue the merging process until we reach the end of both arrays
    while (arr1Item !== undefined || arr2Item !== undefined) {
        if (arr2Item === undefined || (arr1Item !== undefined && arr1Item < arr2Item)) {
            // If arr2Item is undefined or arr1Item is smaller, push arr1Item to the result
            mergeArr.push(arr1Item);
            i++; // Move the pointer in arr1
            arr1Item = arr1[i]; // Update the current arr1Item
        } else {
            // If arr1Item is undefined or arr2Item is smaller, push arr2Item to the result
            mergeArr.push(arr2Item);
            j++; // Move the pointer in arr2
            arr2Item = arr2[j]; // Update the current arr2Item
        }
    }

    return mergeArr; // Return the merged array
}


// --------------------------------------------------------------------------------------------------------------------

// OPTIMAL SOLUTION (without using extra space)
// Time Complexity - O(min(m, n)) + O(n log n) + O(m log m), where n is the length of arr1 and m is the length of arr2
// Explanation: O(min(m, n)) to traverse the array, O(n log n) to sort the arr1 and O(m log m) to sort the arr2

// Space Complexity - O(1), we are not using extra space
function mergeSortedArraysWithoutExtraSpace(arr1:number[], arr2:number[]):void{
    let left:number = arr1.length;
    let right:number = 0;

    while(left>=0 && right < arr2.length) {
        if(arr1[left] > arr2[right]) {
            [arr1[left], arr2[right]] = [arr1[right], arr2[left]];
            left--;
            right++;
        } else {
            break;
        }
    }

    arr1.sort((a:number, b:number):number => a-b)
    arr2.sort((a:number, b:number):number => a-b)

    console.log(arr1, arr2)
}

const nums1: number[] = [1, 12, 15, 26, 38];
const nums2: number[] = [2, 13, 17, 30, 45];

const mergedArray: number[] = mergeSortedArrays(nums1, nums2);
console.log(mergedArray); // [0, 1, 2, 3, 5, 6, 7, 8, 9]



mergeSortedArraysWithoutExtraSpace(nums1, nums2);
