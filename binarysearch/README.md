# Binary Search

Binary search is an efficient algorithm used to find a specific target element in a **sorted array**. It works by repeatedly dividing the search range in half and comparing the middle element with the target element. Based on the comparison, it continues the search in either the left or right half until the target element is found or the search range is empty.

```
BinarySearch(arr, target):
    left = 0
    right = arr.length - 1
    while left <= right:
        mid = left + (right - left) / 2
        if arr[mid] == target:
            return mid
        else if arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1  // Target not found
```

## Visual Representation

```
Given sorted array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Target: 7

Initial State: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                ↑                           ↑
              left                        right

Find Mid Index: mid = left + (right - left) / 2 = 0 + (9-0) / 2 = 0 + 4 = 4;

Iteration 1 -

Initial State: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                ↑           ↑               ↑
               left        mid             right

Check value at mid index is equal to target value
    if(arr[mid] = target) return mid; // if yes return mid index;

Check value at mid index is less than target value
    if(arr[mid] < target) { // if yes update left with mid+1
        left = mid + 1;
    }

Else 
    right = mid - 1;


.
.
.

Iteration N (mid < target):
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                   ↑
                 left
                 right
                  mid

Target Found
```

## Time Complexity

The time complexity of binary search is `O(log n)`, where n is the number of elements in the sorted array. It's a highly efficient searching algorithm, especially for large datasets.

## When to Use

Use binary search when you have a sorted dataset, and you need to find or verify the existence of a specific element quickly. It's commonly used in scenarios where searching in large datasets is required, such as databases, dictionaries, or searching algorithms.

## Tips for Binary Search
- Ensure that the input array is sorted before applying binary search.
- Be mindful of the termination condition (while `left <= right`) to avoid infinite loops.
- Calculate the middle index as `mid = left + (right - left) / 2` to prevent integer overflow.
- Verify that the element you're searching for exists in the array before accessing it at the found index.
