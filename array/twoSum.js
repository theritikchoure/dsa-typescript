// let nums = [2,7,11,15], target = 9;
let nums = [3,2,4], target = 6;

// time complexity - O(n)
// space complexity - O(n)
function twoSum(nums, target) {
    let map = new Map();

    for(let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i];

        if(map.has(compliment)) {
            return [map.get(compliment), i];
        } 

        map.set(nums[i], i);
    }

    return [];
}

let indexes = twoSum(nums, target);

console.log(indexes);