

function sumOfIntegers(n) {
    if(n === 0) {
        return 0;
    }

    return n + sumOfIntegers(n-1);
}



let sum = sumOfIntegers(4);
console.log(sum)

function reverseString(s) {
    
   if(s === '') {
    return "";
   }

   return s[s.length-1] + reverseString(s.substring(0, s.length-1))
}

let reverse = reverseString('hello');

console.log(reverse)

function checkPalindrome(str) {
   if(str.length <= 1) {
    return true;
   }
 

   if(str[0] !== str[str.length-1]) {
    return false;
   }

    return checkPalindrome(str.slice(1, -1));
}

let isPalindrome = checkPalindrome('racecar');

console.log(isPalindrome)