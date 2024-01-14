function printAllDivisors(x) {
    var divisors = [];
    for (var i = 1; i <= Math.sqrt(x); i++) {
        if (x % i == 0) {
            divisors.push(i);
            if (x / i !== i) {
                divisors.push(x / i);
            }
        }
    }
    divisors.sort(function (a, b) { return a - b; });
    console.log(divisors.join(', '));
}
var numsForDivisors = 27;
printAllDivisors(numsForDivisors);
