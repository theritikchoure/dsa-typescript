// This problem has only one solution, which is optimal but interviewer ask in interview to check how you implement the 
// solution and how clean code you write

function printSpiralMatrix(size) {
    // Initialize an empty n x n matrix filled with zeros
    const matrix = Array.from({ length: size }, () => Array(size).fill(0));

    let left = 0;
    let right = size - 1;
    let top = 0;
    let bottom = size - 1;
    let counter = 1;

    while (top <= bottom && left <= right) {
        // right
        for (let i = left; i <= right; i++) {
            matrix[top][i] = counter++;
        }
        top++;

        // bottom
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = counter++;
        }
        right--;

        // left
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = counter++;
        }
        bottom--;

        // up
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = counter++;
        }
        left++;
    }

    console.log(matrix);
}

printSpiralMatrix(6);
