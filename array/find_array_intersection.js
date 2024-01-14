function findArrayIntersection(arr1, arr2) {
    var i = 0;
    var j = 0;
    var ans = [];
    arr1.sort(function (a, b) { return a - b; });
    arr2.sort(function (a, b) { return a - b; });
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            i++;
        }
        if (arr1[i] > arr2[j]) {
            j++;
        }
        if (arr1[i] === arr2[j]) {
            ans.push(arr1[i]);
            i++;
            j++;
        }
    }
    return ans;
}
var intersectionArr1 = [4, 9, 5];
var intersectionArr2 = [9, 4, 9, 8, 4];
var intersectionArr = findArrayIntersection(intersectionArr1, intersectionArr2);
console.log(intersectionArr);
