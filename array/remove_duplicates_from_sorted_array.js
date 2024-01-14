var sorted_array = [1, 1, 2];
function removeDuplicates(nums) {
    var unique = [];
    var number = -101;
    for (var i = 0; i < nums.length; i++) {
        if (number !== nums[i]) {
            unique.push(nums[i]);
        }
        number = nums[i];
    }
    return unique.length;
}
;
var res = removeDuplicates(sorted_array);
console.log(res);
