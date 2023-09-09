# Sliding Window Technique

> Form a window over some **portion** of **sequential** date, then **move** that window throughout the date to **capture** different parts of it.

## Definition
The Sliding Window technique is an algorithmic approach used to efficiently solve problems that involve maintaining a "window" or a subarray within an array or string while iterating through it.

## Objective
The primary goal is to optimize time complexity by reducing the number of iterations, making it more efficient than brute-force or nested-loop solutions.

## Use Cases
The Sliding Window technique is especially useful for solving problems involving subarray or substring computations, such as finding maximum/minimum sums, averages, longest/shortest subarrays, and substring patterns.

## Basic Idea
It involves maintaining two pointers, typically a "start" and "end" pointer, that define the current window. These pointers slide through the data structure while efficiently updating the window's state.

## How Sliding Window Optimizes Solutions

1. **Reduced Time Complexity:** The Sliding Window approach reduces time complexity by avoiding nested loops. It typically achieves linear or near-linear time complexity, O(N) or O(N + M), where N is the length of the array or string, and M is the window size.

2. **Efficient Updates:** By efficiently updating the window's state when sliding, it avoids redundant calculations, leading to faster execution.

3. **Space Efficiency:** The approach often maintains a constant amount of additional space, making it memory-efficient.

## Key Steps to Implement Sliding Window

1. **Initialize Pointers:** Set up initial pointers (e.g., start and end) to define the first window.

2. **Process Initial Window:** Calculate initial values within the window.

3. **Iterate through Data:** Loop through the data structure while updating the window's state (e.g., slide the window to the right).

4. **Update Results:** Update the result or perform calculations based on the current window.

5. **Maintain Constraints:** Ensure that the window adheres to problem-specific constraints (e.g., window size, valid subarrays).

## Example - Maximum Sum Subarray (Kadane's Algorithm)
```typescript
function maxSubarraySum(arr: number[]): number {
    let maxSum = -Infinity;
    let currentSum = 0;
    
    for (let num of arr) {
        currentSum = Math.max(num, currentSum + num);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}
```

## Example - Maximum Sum of Subarray of Length K
```typescript
function maxSubarraySumK(arr: number[], k: number): number {
    let maxSum = 0;
    let currentSum = 0;
    
    for (let i = 0; i < k; i++) {
        currentSum += arr[i];
    }
    
    maxSum = currentSum;
    
    for (let i = k; i < arr.length; i++) {
        currentSum = currentSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}
```

## Tips for Using Sliding Window
- Identify the problem's characteristics that suggest a sliding window approach, such as subarray computations.
- Carefully initialize pointers and handle edge cases.
Update the window efficiently by avoiding redundant calculations.
- Ensure that the window maintains any constraints specified by the problem.
- Analyze the problem's time and space complexity to verify efficiency gains.