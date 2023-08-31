let arr = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

function arrayChunking(arr:number[], n:number):void {
    let chunkedArr:any = [];

    for(let i:number = 0; i < arr.length; i++) {
        let lastChunk:any = chunkedArr[chunkedArr.length - 1];

        if(lastChunk?.length < n) {
            lastChunk.push(arr[i])
        } else {
            chunkedArr.push([arr[i]])
        }
    }


    console.log(chunkedArr)
}


arrayChunking(arr, 5);
