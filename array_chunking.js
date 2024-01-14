var arrForChunking = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
function arrayChunking(arr, n) {
    var chunkedArr = [];
    for (var i = 0; i < arr.length; i++) {
        var lastChunk = chunkedArr[chunkedArr.length - 1];
        if ((lastChunk === null || lastChunk === void 0 ? void 0 : lastChunk.length) < n) {
            lastChunk.push(arr[i]);
        }
        else {
            chunkedArr.push([arr[i]]);
        }
    }
    console.log(chunkedArr);
}
arrayChunking(arrForChunking, 5);
