// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.



let twoSumArr:number[] = [1, 3, 7, 9, 2];

// Brute force - Time Complexity - O(N^2) || Space Complexity - O(1)
function twoSum(arr:number[], target:number):void {

    // Initialize two variables to store the fist index, the second index
    let firstIndex:number = 0;
    let secondIndex:number = 0;

    // Take element from array
    for(let i:number = 0; i < arr.length; i++) {

        // Find compliment for each element
        let compliment:number = target - arr[i];

        // find complement in given array
        for(let j:number = i; j < arr.length; j++) {

            // If complement found in array, then assign i and j to the first index and second index, and then break the loop
            if(arr[j] === compliment) {
                firstIndex = i;
                secondIndex = j;
                break; 
            }

        }
    } 

    // Console the first index and second index
    console.log(firstIndex, secondIndex);
} 

// Optimal Solution - Time Complexity - O(n) || Space Complexity - O(n)
function twoSum1(arr:number[], target:number):void {

    let numMap:Map<number, number> = new Map<number, number>();

    // Iterate through each element 
    for(let i:number = 0; i < arr.length; i++) {

        // Find the compliment
        let compliment:number = target - arr[i];

        // Check if compliment is in the map, if it is, then return its index, and current element's index;
        if(numMap.get(compliment)) {
            console.log(numMap.get(compliment), i);
            break;
        } 

        // If not then store current element as key and it's index as value in numMap;
        numMap.set(arr[i], i);
    }
}

twoSum(twoSumArr, 10);

twoSum1(twoSumArr, 10);