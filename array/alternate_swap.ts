function alternateSwap(arr:number[]):void {
    let i:number = 0;
    let j:number = 1;

    while(j < arr.length) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i = i+2;
        j = j+2;
    }

    console.log(arr)
}

let alternateArr:number[] = [1, 3, 2, 7, 11]; // 3 1 7 2 11

alternateSwap(alternateArr);