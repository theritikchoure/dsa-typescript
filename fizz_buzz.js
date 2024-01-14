function checkIsDivisibleBy(n, d) {
    if (n % d === 0)
        return true;
    else
        return false;
}
function fizzBuzz(n) {
    for (var i = 1; i <= n; i++) {
        if (checkIsDivisibleBy(i, 3) && checkIsDivisibleBy(i, 5)) {
            console.log("FizzBuzz");
        }
        else if (checkIsDivisibleBy(i, 3) && !checkIsDivisibleBy(i, 5)) {
            console.log("Fizz");
        }
        else if (checkIsDivisibleBy(i, 5) && !checkIsDivisibleBy(i, 3)) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzz(15);
