
// Pivot element, smallest element of the second array
// i/p = [7, 9, 1, 2, 3];
// 1st array [7, 9], 2nd array [1, 2, 3]
// Pivot is 1 and index is 2;

// --------------------------------------------------------------------------------------------------------------------------------------------

function pivotInRotatedArray(arr:number[]): number {
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

let pivotArray:number[] = [7, 9, 1, 2, 3];

console.log(pivotInRotatedArray(pivotArray))