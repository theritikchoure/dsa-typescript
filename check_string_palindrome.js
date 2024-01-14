function checkPalindrome(str) {
    if (str.length <= 1) {
        return console.log("String is palindrome");
    }
    var strArr = str.split('');
    var i = 0;
    var j = strArr.length - 1;
    var isPalindrome = false;
    while (i < j) {
        if (strArr[i] === str[j]) {
            isPalindrome = true;
            i++;
            j--;
        }
        else {
            isPalindrome = false;
            break;
        }
    }
    if (isPalindrome) {
        console.log("String is palindrome");
    }
    else {
        console.log("string is not palindrome");
    }
}
function checkPalindrome1(str) {
    var reverseStr = str.split('').reverse().join('');
    if (reverseStr === str) {
        console.log("String is palindrome");
    }
    else {
        console.log("String is not palindrome");
    }
}
checkPalindrome("abba");
checkPalindrome1("101");
