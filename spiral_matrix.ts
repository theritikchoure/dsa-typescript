// This problem has only one solution, which is optimal but interviewer ask in interview to check how you implement the 
// solution and how clean code you write

function printSpiralMatrix( size: number ): void {

    // Initialize an empty n x n matrix filled with zeros
    const matrix: number[][] = Array.from( { length: size }, () => Array( size ).fill( 0 ) );

    let m: number = size;
    let n: number = size

    let left: number = 0;
    let right: number = size - 1;

    let top: number = 0;
    let bottom: number = size - 1;

    let counter: number = 1;

    let ans_map: Array<number> = [];

    while ( top <= bottom && left <= right ) {


        // right
        for ( let i: number = left; i <= right; i++ ) {
            matrix[ top ][ i ] = counter;
            counter++;
        }
        top++;

        // bottom
        for ( let i: number = top; i <= bottom; i++ ) {
            matrix[ i ][ right ] = counter;
            counter++;
        }
        right--;

        // left
        for ( let i: number = right; i >= left; i-- ) {
            matrix[ bottom ][ i ] = counter;
            counter++;
        }
        bottom--;

        // up
        for ( let i: number = bottom; i >= top; i-- ) {
            matrix[ i ][ left ] = counter;
            counter++;
        }
        left++;

    }


    console.log( matrix )
}

printSpiralMatrix( 6 )