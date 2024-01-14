// Pivot element, smallest element of the second array
// i/p = [7, 9, 1, 2, 3];
// 1st array [7, 9], 2nd array [1, 2, 3]
// Pivot is 1 and index is 2;
// --------------------------------------------------------------------------------------------------------------------------------------------
function pivotInRotatedArray(arr) {
    var start = 0;
    var end = arr.length - 1;
    var mid = Math.floor(start + (end - start) / 2);
    while (start < end) {
        if (arr[mid] >= arr[0]) {
            start = mid + 1;
        }
        else {
            end = mid;
        }
        mid = Math.floor(start + (end - start) / 2);
    }
    return start;
}
var pivotArray = [7, 9, 1, 2, 3];
console.log(pivotInRotatedArray(pivotArray));
