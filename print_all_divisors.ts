function printAllDivisors(x:number): void {
    
    let divisors:number[] = [];

    for(let i:number = 1; i <= Math.sqrt(x); i++) {
        if(x%i == 0) {
            divisors.push(i);

            if(x/i !== i) {
                divisors.push(x/i)
            }
        }
    }

    divisors.sort((a,b) => a - b);

    console.log(divisors.join(', '))

} 

let numsForDivisors:number = 27

printAllDivisors(numsForDivisors);