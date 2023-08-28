let arr = [10, 14, 7, 6, 2, 4, 8, 9, 1];

function bubbleSort(arr) {

    for (var i = 0; i < arr.length-1; i++) {
        let swapped = false;
        for (var j = 0; j < arr.length-i-1; j++){
            // to sort in ascending order, arr[j] > arr[j+1]
            // to sort in descending order, arr[j] < arr[j+1]
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }

        if(!swapped) {
            break;
        } 
    }

    console.log("Finally Sorted Array")
    console.log(arr)
}

bubbleSort(arr)

let arr1 = [10, 14, 7, 6, 2, 4, 8, 9, 1];
// let arr1 = [1, 2, 3];
function selectionSort(arr) {
    
    for(let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    console.log("Selection Sort")
    console.log(arr);
}

selectionSort(arr1);


let arr2 = [10, 14, 7, 6, 2, 4, 8, 9, 1];

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {

        let j = i;

        while(j > 0 && arr[j-1] > arr[j]) {
            let temp = arr[j]
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            j--;
        }

    }

    console.log("Insertion Sort")
    console.log(arr)
}

insertionSort(arr2)


let arr3 = [10, 14, 7, 6, 2, 4, 8, 9, 1];

function mergeSort(arr) {

    if(arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    if (!left || !right) {
        return;
    }

    let result = [];

    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    while(leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    while(rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }
   

    return result;
}

function mergeSortFunction(arr) {
    mergeSort(arr);
}

let mergeSortedArr = mergeSort(arr3);
console.log(mergeSortedArr)



console.log('---------------Quick Sort --------------------')
let arr4 = [10, 14, 7, 6, 2, 4, 8, 9, 1];

function partition(arr, low, high) {
    const pivot = arr[low];
    let i = low+1;
    let j = high;

    while(i <= j) {
        while(i <= high && arr[i] <= pivot) {
            i++;
        }

        while(j >= low && arr[j] > pivot) {
            j--;
        }

        if(i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];

            i++;
            j--;
        }
    }

    [arr[low], arr[j]] = [arr[j], arr[low]];

    return j;
}

function quickSort(arr, low = 0, high = arr.length-1) {
    if(low < high) {
        let pivotIndex = partition(arr, low, high);

        quickSort(arr, low, pivotIndex-1);
        quickSort(arr, pivotIndex+1, high);
    }
}

quickSort(arr4);

console.log(arr4);

