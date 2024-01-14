function checkPrimeNumber(nums) {
    var count = 0;
    for (var i = 1; i <= Math.sqrt(nums); i++) {
        if (nums % i == 0) {
            count++;
            if (nums / i != i) {
                count++;
            }
        }
    }
    return count === 2;
}
var prime = 11;
var isPrime = checkPrimeNumber(prime);
console.log(isPrime);
