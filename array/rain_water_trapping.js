// Given n non-negative integers representing an elevation map where the width of each bar is 1, 
// compute how much water it can trap after raining.
// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
// In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9
// --------------------------------------------------------------------------------------------------------------------
// BRUTE FORCE APPROACH
// Time complexity - O(n);
// Space complexity - O(n);
function trappedWater(height) {
    // Get the length of the input array.
    var n = height.length;
    // Check if there are fewer than 3 elements, which cannot trap water.
    if (n <= 2)
        return 0; // Not enough elements to trap water.
    // Initialize arrays to store maximum heights to the left and right of each element.
    var leftMax = new Array(n);
    var rightMax = new Array(n);
    // Initialize the leftMax array.
    leftMax[0] = height[0];
    // Calculate the maximum height to the left of each element.
    for (var i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }
    // Initialize the rightMax array.
    rightMax[n - 1] = height[n - 1];
    // Calculate the maximum height to the right of each element.
    for (var i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }
    // Initialize a variable to store the total trapped water.
    var trappedWater = 0;
    // Calculate trapped water for each element.
    for (var i = 0; i < n; i++) {
        trappedWater += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    // Return the total trapped water.
    return trappedWater;
}
// --------------------------------------------------------------------------------------------------------------------
// OPTIMAL SOLUTION
// Time complexity - O(n);
// Space complexity - O(1)
function trappedWaterOptimized(height) {
    // Initialize variables to track maximum trapped water, left and right pointers.
    var maxWater = 0;
    var left = 0;
    var right = height.length - 1;
    // Initialize variables to track the maximum height on the left and right.
    var leftMax = height[left];
    var rightMax = height[right];
    // Continue until the left pointer is less than the right pointer.
    while (left < right) {
        // If the left side is lower, move the left pointer to the right.
        if (leftMax < rightMax) {
            left++;
            // Update the leftMax if the current height is higher.
            leftMax = Math.max(leftMax, height[left]);
            // Add the trapped water between leftMax and the current height to maxWater.
            maxWater = maxWater + leftMax - height[left];
        }
        else {
            // If the right side is lower or equal, move the right pointer to the left.
            right--;
            // Update the rightMax if the current height is higher.
            rightMax = Math.max(rightMax, height[right]);
            // Add the trapped water between rightMax and the current height to maxWater.
            maxWater = maxWater + rightMax - height[right];
        }
    }
    // Return the maximum trapped water.
    return maxWater;
}
var heightArr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trappedWater(heightArr));
console.log(trappedWaterOptimized(heightArr));
