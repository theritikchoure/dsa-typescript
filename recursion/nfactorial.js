function factorial(n) {
    if(n === 1) return 1;

    return n * factorial(n - 1);
}


let f = factorial(5);

console.log(f)


// ----------------------------------
// using iterative approach

// function iterative(n) {
//     let factorial = 1;

//     for(i = 1; i <= n; i++) {
//         factorial = factorial * i;
//     }

//     return factorial;
// }

// console.log(iterative(4))