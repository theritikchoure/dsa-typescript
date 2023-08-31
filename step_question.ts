function printSteps(step:number):void {
    for(let i: number = 0; i <= step; i++) {
        let stp: string = '';
        for(let j: number = 0; j <= step; j++) {
            if(j < i) {
                stp = "#" + stp
            } else {
                stp = stp + " "
            }

        }
        console.log(stp)
    }
}

printSteps(5);