// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Constraints: -231 <= x <= 231 - 1

// ----------------------------------------------------------------------------------------------------------------


let nums:number = -44587

function reverse(x:number):number {
    let reverseInt:number = 0
    let isNegative: boolean = false

    if(x < 0) {
        isNegative = true
        x = -1 * x
    }

    while(x > 0) {
        let lastDigit: number = x % 10;

        reverseInt = (reverseInt*10) + lastDigit

        x = Math.floor(x / 10);
    }

    if(isNegative) {
        reverseInt = -1 * reverseInt
    }

    return reverseInt
}

let reverseInt:number = reverse(nums);


console.log(reverseInt);