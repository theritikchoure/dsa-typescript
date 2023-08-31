function printPyramid(pyramid: number): void {
    for (let i:number = 0; i < pyramid; i++) {
        let str:string = '';

        // space
        for(let j:number = 0; j < pyramid-i-1; j++) {
            str = str + '-';
        }

        // star
        for(let j:number = 0; j < 2*i+1; j++) {
            str = str + '*';
        }


        // space
        for (let j:number = 0; j < pyramid-i-1; j++) {
            str = str + '-';
        }

        console.log(str)
    }
}

printPyramid(5)