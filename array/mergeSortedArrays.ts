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

const nums1: number[] = [1, 2, 3];
const nums2: number[] = [2, 5, 6];

const mergedArray: number[] = mergeSortedArrays(nums1, nums2);
console.log(mergedArray); // [1, 2, 2, 3, 5, 6]
