// This function checks if a given number is an Armstrong number.
// An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of 3.
function checkArmstrong(x: number): boolean {
    // Store the original number to compare with the calculated sum later
    let originalNum: number = x;
    let sum: number = 0;

    // Extract and process each digit of the number
    while (x > 0) {
        let lastDigit: number = x % 10; // Get the last digit
        sum = sum + Math.pow(lastDigit, 3); // Add the cube of the digit to the sum
        x = Math.floor(x / 10); // Remove the last digit
    }

    // Check if the sum of cubes of digits is equal to the original number
    return sum === originalNum;
}

// Test case: Check if 371 is an Armstrong number
let armstrongNums: number = 371;
let isArmstrong: boolean = checkArmstrong(armstrongNums);

console.log(isArmstrong); // Output: true (371 is an Armstrong number)
