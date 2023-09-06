function checkPrimeNumber(nums:number):boolean {

    let count: number = 0;

    for (let i = 1; i <= Math.sqrt(nums); i++) {
        if(nums%i == 0) {
            count++;

            if(nums/i != i) {
                count++;
            }
        }
    }

    return count === 2;
}

let prime: number = 11

let isPrime:boolean = checkPrimeNumber(prime);

console.log(isPrime)