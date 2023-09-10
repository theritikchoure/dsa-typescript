//? Tag - EASY

// Given an unsorted array arr[] of size N having both negative and positive integers. The task is place all negative element at the end of 
// array without changing the order of positive element and negative element.

 
// Example 1:
// Input : arr[] = {1, -1, 3, 2, -7, -5, 11, 6 }
// Output : 1  3  2  11  6  -1  -7  -5

// Example 2:
// Input : arr[] = {-5, 7, -3, -4, 9, 10, -1, 11}
// Output : 7  9  10  11  -5  -3  -4  -1

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(N)

// ----------------------------------------------------------------------------------------------------------------------------------------------------

// Time complexity - O(N)
// Space complexity - O(N)
function moveNegativeElement(arr: number[]): void {
    // Initialize an empty array 'a' to hold the positive or zero elements
    let a: number[] = [];

    // Iterate through the input array 'arr'
    for (let i: number = 0; i < arr.length; i++) {
        // If the current element is greater than or equal to 0 (non-negative), add it to 'a'
        if (arr[i] >= 0) {
            a.push(arr[i]);
        }
    }

    // Iterate through the input array 'arr' again
    for (let i: number = 0; i < arr.length; i++) {
        // If the current element is negative, add it to 'a' (appending negative elements at the end)
        if (arr[i] < 0) {
            a.push(arr[i]);
        }
    }

    // Iterate through the input array 'arr' one more time
    for (let i: number = 0; i < arr.length; i++) {
        // Copy the elements from 'a' back to 'arr' to rearrange them
        arr[i] = a[i];
    }

    // Print the modified 'arr'
    console.log(arr);
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------


let moveNegEleArr:number[] = [1, -1, 3, 2, -7, -5, 11, 6];
moveNegativeElement(moveNegEleArr);