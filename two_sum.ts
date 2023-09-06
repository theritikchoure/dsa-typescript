// Given an array of integers twoSumArr and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Define an array of numbers
let twoSumArr: number[] = [1, 3, 7, 9, 2];

// Brute force approach to find two numbers that add up to a target.
// Time Complexity: O(N^2) || Space Complexity: O(1)
function twoSum(arr: number[], target: number): void {

    // Take each element from the array
    for (let i: number = 0; i < arr.length; i++) {
        // Find the complement for each element
        let compliment: number = target - arr[i];

        // Iterate through the array to find the complement
        for (let j: number = i; j < arr.length; j++) {
            // If the complement is found in the array, log the ith index, jth index and break the loop
            if (arr[j] === compliment) {
                console.log(i, j);
                return;
            }
        }
    }

    // If no solution is found, log null
    console.log(null);
}

// Optimal solution to find two numbers that add up to a target.
// Time Complexity: O(N) || Space Complexity: O(N)
function twoSum1(arr: number[], target: number): void {

    // Initialize the Map
    let numMap: Map<number, number> = new Map<number, number>();

    // Iterate through each element in the array
    for (let i: number = 0; i < arr.length; i++) {
        // Find the complement
        let complement: number = target - arr[i];

        // Check if the complement is in the map; if it is, return its index and the current element's index
        if (numMap.get(complement) !== undefined) {
            console.log(numMap.get(complement), i);
            return;
        }

        // If the complement is not in the map, store the current element as a key and its index as a value in numMap
        numMap.set(arr[i], i);
    }

    // If no solution is found, log null
    console.log(null);
}

// Call the brute force function to find the indices of two numbers that add up to 5
twoSum(twoSumArr, 5);

// Call the optimal solution function to find the indices of two numbers that add up to 5
twoSum1(twoSumArr, 5);
