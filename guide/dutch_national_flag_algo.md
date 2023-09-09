# Dutch National Flag Algorithm

## Overview
The Dutch National Flag Algorithm is a sorting algorithm designed to partition an array of values into three sections: values less than a given pivot, values equal to the pivot, and values greater than the pivot. It was named after the Dutch national flag, which consists of three horizontal bands of red, white, and blue, symbolizing the three partitions.

<p style="text-align: center;">
[0, low-1] ---> 0 (extreme left)
[low, mid-1] ---> 1 
[mid, ]
</p>


## Why We Need It
The Dutch National Flag Algorithm is particularly useful in various scenarios, such as sorting an array of 0s, 1s, and 2s, which is a common problem in computer science. It optimizes the sorting process by minimizing the number of swaps and comparisons.

## Intuition
The algorithm works by maintaining three pointers: `low`, `mid`, and `high`, representing the current positions of the three sections. Initially, `low` and `mid` point to the beginning of the array, and `high` points to the end.

1. Start with `low` and `mid` at the beginning and `high` at the end of the array.
2. Iterate through the array using `mid` as the moving pointer.
3. If `arr[mid]` is 0, swap `arr[low]` and `arr[mid]`, increment both `low` and `mid`.
4. If `arr[mid]` is 1, leave it in place and just increment `mid`.
5. If `arr[mid]` is 2, swap `arr[mid]` and `arr[high]`, decrement `high`.
6. Repeat steps 2-5 until `mid` crosses `high`, which means all elements have been processed.

## Example
Let's say we have the array `[2, 0, 1, 1, 0, 2]` and want to sort it using the Dutch National Flag Algorithm.

- Initially, `low` = 0, `mid` = 0, and `high` = 5.
- We start by checking `arr[mid]`, which is 2. So, we swap `arr[mid]` and `arr[high]` and decrement `high`.
- Now, `arr[mid]` is still 2, so we continue swapping with `high` until `mid` crosses `high`.
- After processing all elements, the array is sorted.

## Key Points
- The Dutch National Flag Algorithm is an efficient way to sort or partition arrays with multiple distinct values.
- It reduces the number of swaps and comparisons compared to traditional sorting algorithms.
- It's often used in scenarios where you need to sort or group elements into categories based on a specific criterion.
