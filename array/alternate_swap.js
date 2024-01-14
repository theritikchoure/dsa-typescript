function alternateSwap(arr) {
    var _a;
    var i = 0;
    var j = 1;
    while (j < arr.length) {
        _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
        i = i + 2;
        j = j + 2;
    }
    console.log(arr);
}
var alternateArr = [1, 3, 2, 7, 11]; // 3 1 7 2 11
alternateSwap(alternateArr);
