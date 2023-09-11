class MaxHeap {
    public arr:number[] = [];
    public size:number = 0;

    constructor() {
        this.arr[0] = -1;
        this.size = 0;
    }

    // Time complexity - O(log n)
    insert(value:number):void {
        this.size = this.size + 1;
        let index:number = this.size;

        this.arr[index] = value;

        while(index > 1) {
            let parent:number = Math.floor(index/2);

            if(this.arr[parent] < this.arr[index]) {
                [this.arr[parent], this.arr[index]] = [this.arr[index], this.arr[parent]];
                index = parent;
            } else {
                break;
            }
        }
    }

    // Time complexity - O(log n)
    delete():void {
        if(this.size === 0) {
            return;
        }

        [this.arr[1], this.arr[this.size]] = [this.arr[this.size], this.arr[1]];

        this.size--;

        // take root node to its correct position
        let i:number = 1;
        while(i<this.size) {
            let leftIndex:number = 2*i;
            let rightIndex:number = 2*i+1;

            if(leftIndex < this.size && this.arr[i] < this.arr[leftIndex]) {
                [this.arr[i], this.arr[leftIndex]] = [this.arr[leftIndex], this.arr[i]];
                i = leftIndex;
            } else if(rightIndex < this.size && this.arr[i] < this.arr[rightIndex]) {
                [this.arr[i], this.arr[rightIndex]] = [this.arr[rightIndex], this.arr[i]];
                i = rightIndex;
            } else {
                break;
            }
        } 
    }

    print(): void {
        for(let i:number = 1; i <= this.size; i++) {
            console.log(this.arr[i]);
        }
    }
}

// Time complexity - O(log n)
// Time complexity - O(log n)
function heapify(arr: number[], size: number, index: number): void {
    let largest = index;
    const left = 2 * index + 1; // Adjusted the index calculation
    const right = 2 * index + 2; // Adjusted the index calculation

    if (left < size && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < size && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== index) {
        [arr[index], arr[largest]] = [arr[largest], arr[index]];
        heapify(arr, size, largest);
    }
}

function heapSort(arr: number[]): void {
    const size = arr.length;

    // // Build a max-heap
    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
        heapify(arr, size, i);
    }

    // Extract elements one by one
    for (let i = size - 1; i >= 0; i--) {
        // Move the current root to the end
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Call heapify on the reduced heap
        heapify(arr, i, 0);
    }
}

let maxHeap = new MaxHeap();

maxHeap.insert(50);
maxHeap.insert(55);
maxHeap.insert(53);
maxHeap.insert(52);
maxHeap.insert(54);

maxHeap.print()

maxHeap.delete();

console.log("Delete")
maxHeap.print();


let heapifyArr:number[] = [-1, 54, 53, 55, 52, 50];

for(let i:number = Math.floor(heapifyArr.length/2); i > 0; i--) {
    heapify(heapifyArr, heapifyArr.length, i);
}

console.log("After Heapify")
for(let i:number = 1; i < heapifyArr.length; i++) {
    console.log(heapifyArr[i]);
}


heapSort(heapifyArr);

console.log("After heap sort");
for(let i:number = 1; i < heapifyArr.length; i++) {
    console.log(heapifyArr[i]);
}


// console.log(maxHeap)