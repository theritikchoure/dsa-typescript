function checkArmstrong(x: number):boolean {
    let originalNum: number = x;
    let sum:number = 0;

    while(x > 0) {
        let lastDigit:number = x%10;

        sum = sum + Math.pow(lastDigit, 3);

        x = Math.floor(x/10);
    }

    return sum === originalNum;
}

let armstrongNums: number = 371;

let isArmstrong: boolean = checkArmstrong(armstrongNums);

console.log(isArmstrong)