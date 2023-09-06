function findGCD( x: number, y: number ): number {

    // --------------------------------------------
    // Approach 1 (Start)

    // let gcd:number = 1;

    // for (let i:number = 1; i <= Math.min(x, y); i++) {
    //     if(x%i == 0 && y%i == 0) {
    //         gcd = Math.max(gcd, i);
    //     }
    // }

    // return gcd;
    
    // Approach 1 (End)
    // --------------------------------------------


    // --------------------------------------------
    // Approach 2 (Start)
    for ( let i: number = Math.min( x, y ); i >= 1; i--) {
        if ( x % i == 0 && y % i == 0 ) {
           return i;
        }
    }

    return 1;

    // Approach 2 (End)
    // --------------------------------------------

}

let x: number = 20;
let y: number = 40;

console.log( findGCD( x, y ) );