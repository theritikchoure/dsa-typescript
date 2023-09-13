function heapifyMaxHeap(arr: number[], size: number, index: number): void {
    let largest: number = index;
    let left: number = 2 * index + 1;
    let right: number = 2 * index + 2;

    if (left < size && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < size && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== index) {
        [arr[largest], arr[index]] = [arr[index], arr[largest]];

        heapifyMaxHeap(arr, size, largest);
    }
}

function buildMaxHeap(arr: number[]): void {
    let size: number = arr.length;
    for (let i: number = Math.floor(size / 2) - 1; i >= 0; i--) {
        heapifyMaxHeap(arr, size, i);
    }
}

let arrForMaxHeap: number[] = [7, 10, 4, 20, 15];
buildMaxHeap(arrForMaxHeap);
console.log(arrForMaxHeap);
