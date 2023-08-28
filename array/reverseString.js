let str = "Hello world!";

console.log(str);

// time complexity - O(n)
// space complexity - O(n)
function reverse(s) {
    let strArr = s.split("");

    let reverseArr = [];

    for (let i = strArr.length-1; i >= 0; i--) {
        reverseArr.push(strArr[i]);
    }

    let reverseStr = reverseArr.join("");

    console.log(reverseStr);
}

reverse(str);

// time complexity - O(n)
// space complexity - O(1)
function reverseStr1(str) {
    let strArr = str.split("");
    let length = strArr.length-1;

    for (let i = 0; i < length+1/2; i++) {
        let temp = strArr[i];
        strArr[i] = str[length];
        strArr[length] = temp;
        length--;
    }

    let reverseStr = strArr.join("");

    console.log(reverseStr);
}

reverseStr1(str);

function reverse2(str) {
    console.log(str.split("").reverse().join(""))
}

reverse2(str);