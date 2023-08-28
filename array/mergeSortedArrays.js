let nums1 = [1, 2, 3], nums2 = [2,5,6];

// [1 2 2 3 5 6]


// time complexity - O(arr1 + arr2)
// space complexity - O(arr1+arr2)
function mergeSortedArrays(arr1, arr2) {

    let mergeArr = [];
    let i = 1;
    let j = 1;

    let arr1Item = arr1[0];
    let arr2Item = arr2[0];

    
    if(arr1.length === 0) {
        mergeArr = arr2;
    }
    
    
    if(arr2.length === 0) {
        mergeArr = arr1;
    }

    while(arr1Item || arr2Item) {
        if(!arr2Item || arr1Item < arr2Item) {
            mergeArr.push(arr1Item);
            arr1Item = arr1[i];
            i++;
        } else {
            mergeArr.push(arr2Item);
            arr2Item = arr2[j];
            j++;
        }
    }
}

mergeSortedArrays(nums1, nums2);