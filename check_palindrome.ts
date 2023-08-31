function checkPalindrome(str: string):void {

    if(str.length <= 1) {
        return console.log("String is palindrome")
    }

    let strArr:string[] = str.split('');
    let i:number = 0;
    let j:number = strArr.length-1;

    let isPalindrome:boolean = false;

    while(i < j) {
        if(strArr[i] === str[j]) {
            isPalindrome = true;
            i++;
            j--;
        } else {
            isPalindrome = false;
            break;
        }
    }

    if(isPalindrome) {
        console.log("String is palindrome");
    } else {
        console.log("string is not palindrome");
    }
}

function checkPalindrome1(str:string):void {
    let reverseStr:string = str.split('').reverse().join('');
    if(reverseStr === str) {
        console.log("String is palindrome");
    } else {
        console.log("String is not palindrome");
    }
}

checkPalindrome("abba")

checkPalindrome1("101");