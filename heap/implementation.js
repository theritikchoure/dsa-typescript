var MaxHeap = /** @class */ (function () {
    function MaxHeap() {
        this.arr = [];
        this.size = 0;
        this.arr[0] = -1;
        this.size = 0;
    }
    // Time complexity - O(log n)
    MaxHeap.prototype.insert = function (value) {
        var _a;
        this.size = this.size + 1;
        var index = this.size;
        this.arr[index] = value;
        while (index > 1) {
            var parent_1 = Math.floor(index / 2);
            if (this.arr[parent_1] < this.arr[index]) {
                _a = [this.arr[index], this.arr[parent_1]], this.arr[parent_1] = _a[0], this.arr[index] = _a[1];
                index = parent_1;
            }
            else {
                break;
            }
        }
    };
    // Time complexity - O(log n)
    MaxHeap.prototype.delete = function () {
        var _a, _b, _c;
        if (this.size === 0) {
            return;
        }
        _a = [this.arr[this.size], this.arr[1]], this.arr[1] = _a[0], this.arr[this.size] = _a[1];
        this.size--;
        // take root node to its correct position
        var i = 1;
        while (i < this.size) {
            var leftIndex = 2 * i;
            var rightIndex = 2 * i + 1;
            if (leftIndex < this.size && this.arr[i] < this.arr[leftIndex]) {
                _b = [this.arr[leftIndex], this.arr[i]], this.arr[i] = _b[0], this.arr[leftIndex] = _b[1];
                i = leftIndex;
            }
            else if (rightIndex < this.size && this.arr[i] < this.arr[rightIndex]) {
                _c = [this.arr[rightIndex], this.arr[i]], this.arr[i] = _c[0], this.arr[rightIndex] = _c[1];
                i = rightIndex;
            }
            else {
                break;
            }
        }
    };
    MaxHeap.prototype.print = function () {
        for (var i = 1; i <= this.size; i++) {
            console.log(this.arr[i]);
        }
    };
    return MaxHeap;
}());
// Time complexity - O(log n)
// Time complexity - O(log n)
function heapify(arr, size, index) {
    var _a;
    var largest = index;
    var left = 2 * index + 1; // Adjusted the index calculation
    var right = 2 * index + 2; // Adjusted the index calculation
    if (left < size && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < size && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== index) {
        _a = [arr[largest], arr[index]], arr[index] = _a[0], arr[largest] = _a[1];
        heapify(arr, size, largest);
    }
}
function heapSort(arr) {
    var _a;
    var size = arr.length;
    // // Build a max-heap
    for (var i = Math.floor(size / 2) - 1; i >= 0; i--) {
        heapify(arr, size, i);
    }
    // Extract elements one by one
    for (var i = size - 1; i >= 0; i--) {
        // Move the current root to the end
        _a = [arr[i], arr[0]], arr[0] = _a[0], arr[i] = _a[1];
        // Call heapify on the reduced heap
        heapify(arr, i, 0);
    }
}
var maxHeap = new MaxHeap();
maxHeap.insert(50);
maxHeap.insert(55);
maxHeap.insert(53);
maxHeap.insert(52);
maxHeap.insert(54);
maxHeap.print();
maxHeap.delete();
console.log("Delete");
maxHeap.print();
var heapifyArr = [-1, 54, 53, 55, 52, 50];
for (var i = Math.floor(heapifyArr.length / 2); i > 0; i--) {
    heapify(heapifyArr, heapifyArr.length, i);
}
console.log("After Heapify");
for (var i = 1; i < heapifyArr.length; i++) {
    console.log(heapifyArr[i]);
}
heapSort(heapifyArr);
console.log("After heap sort");
for (var i = 1; i < heapifyArr.length; i++) {
    console.log(heapifyArr[i]);
}
// console.log(maxHeap)
