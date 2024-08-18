function countWays(n) {

    console.log(n)

    //base cases
    if (n === 0) return 1;
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n === 3) return 4;

    return countWays(n - 1) + countWays(n - 2) + countWays(n - 3);
}


console.log(`Number of ways to reach step ${n}:`, countWays(n));