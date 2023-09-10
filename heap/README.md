# Heap

## What is a Heap?
A heap is a specialized tree-based data structure that satisfies the heap property. There are two types of heaps: Max Heap and Min Heap.

- **Max Heap:** For any given node `I`, the value of `I` is greater than or equal to the values of its children. The maximum element is at the root.
- **Min Heap:** For any given node `I`, the value of `I` is less than or equal to the values of its children. The minimum element is at the root.

## Common Operations on Heaps
1. **Insertion (Push):** Adding a new element to the heap.
2. **Deletion (Pop):** Removing the maximum (_in a max heap_) or minimum (_in a min heap_) element from the heap.
3. **Peek (Top Element):** Getting the maximum (_in a max heap_) or minimum (_in a min heap_) element without removing it.
4. **Heapify:** Converting an array of elements into a valid heap structure.
5. **Heap Sort:** Sorting elements using a heap.

## Complexities

| Operation/Algorithm               | Time Complexity               | Space Complexity             |
|-----------------------------------|-------------------------------|-----------------------------|
| Heap Insertion (Push)             | O(log n)                      | O(1)                        |
| Heap Deletion (Pop)               | O(log n)                      | O(1)                        |
| Heap Peek (Accessing the Top)     | O(1)                          | O(1)                        |
| Build Heap from Array (Heapify)   | O(n)                          | O(1) or O(n)                |
| Heap Sort                         | O(n log n)                    | O(1)                        |
| Finding kth Largest/Smallest      | O(n + k log n)                | O(n)                        |
| Dijkstra's Algorithm              | O((V + E) log V)               | O(V)                        |
| Prim's Algorithm                  | O((V + E) log V)               | O(V)                        |


### Insertion (Push) Operation
Pseudocode for inserting an element into a max heap:

```
function insertMaxHeap(heap, element):
    heap.append(element)  // Add the element to the end of the heap.
    currentIndex = heap.length - 1
    while currentIndex > 0:
        parentIndex = (currentIndex - 1) / 2
        if heap[currentIndex] > heap[parentIndex]:
            swap(heap[currentIndex], heap[parentIndex])  // Swap with parent if greater.
            currentIndex = parentIndex
        else:
            break
```

### Deletion (Pop) Operation
Pseudocode for removing the maximum element from a max heap:

```
function removeMax(heap):
    if heap.isEmpty():
        return null
    maxElement = heap[0]  // The root contains the maximum element.
    lastElement = heap.pop()  // Replace root with the last element.
    heap[0] = lastElement
    currentIndex = 0
    while true:
        leftChildIndex = 2 * currentIndex + 1
        rightChildIndex = 2 * currentIndex + 2
        largestIndex = currentIndex
        if leftChildIndex < heap.length and heap[leftChildIndex] > heap[largestIndex]:
            largestIndex = leftChildIndex
        if rightChildIndex < heap.length and heap[rightChildIndex] > heap[largestIndex]:
            largestIndex = rightChildIndex
        if largestIndex != currentIndex:
            swap(heap[currentIndex], heap[largestIndex])  // Swap with largest child.
            currentIndex = largestIndex
        else:
            break
    return maxElement
```

### Heap Sort
Heap sort is an efficient comparison-based sorting algorithm that uses a max heap to sort elements in ascending order.

Pseudocode for heap sort:

```
function heapSort(arr):
    buildMaxHeap(arr)  // Convert the input array into a max heap.
    for i from arr.length - 1 down to 0:
        swap(arr[0], arr[i])  // Swap root (max element) with the last element.
        maxHeapify(arr, 0, i)  // Restore max heap property for the remaining elements.

function buildMaxHeap(arr):
    for i from arr.length / 2 down to 0:
        maxHeapify(arr, i, arr.length)

function maxHeapify(arr, index, heapSize):
    left = 2 * index + 1
    right = 2 * index + 2
    largest = index
    if left < heapSize and arr[left] > arr[largest]:
        largest = left
    if right < heapSize and arr[right] > arr[largest]:
        largest = right
    if largest != index:
        swap(arr[index], arr[largest])
        maxHeapify(arr, largest, heapSize)
```

## When to Use Heaps
You should consider using heaps when:
- You need quick access to the maximum or minimum element in a collection.
- You need to efficiently maintain a priority queue.
- You want to efficiently sort elements using heap sort.

## Important Concepts
- **Heapify:** The process of converting an array into a valid heap structure.
- **Priority Queue:** An abstract data type that provides efficient access to the maximum or minimum element.
- **Heap Sort:** A sorting algorithm that uses the heap data structure.

## Resources

1. [Heap - Heap Sort - Heapify - Priority Queues by Abdul Bari](https://www.youtube.com/watch?v=HqPJF2L5h9U)
2. [Heap by Aditya Verma](https://www.youtube.com/playlist?list=PL_z_8CaSLPWdtY9W22VjnPxG30CXNZpI9)
3. [Priority Queue by William Fiset](https://www.youtube.com/watch?v=wptevk0bshY)