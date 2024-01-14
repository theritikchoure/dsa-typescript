function heapifyMaxHeap(arr, size, index) {
    var _a;
    var largest = index;
    var left = 2 * index + 1;
    var right = 2 * index + 2;
    if (left < size && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < size && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== index) {
        _a = [arr[index], arr[largest]], arr[largest] = _a[0], arr[index] = _a[1];
        heapifyMaxHeap(arr, size, largest);
    }
}
function buildMaxHeap(arr) {
    var size = arr.length;
    for (var i = Math.floor(size / 2) - 1; i >= 0; i--) {
        heapifyMaxHeap(arr, size, i);
    }
}
var arrForMaxHeap = [7, 10, 4, 20, 15];
buildMaxHeap(arrForMaxHeap);
console.log(arrForMaxHeap);
