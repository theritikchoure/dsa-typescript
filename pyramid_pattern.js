function printPyramid(pyramid) {
    for (let i = 0; i < pyramid; i++) {
        let str = '';

        // space
        for (let j = 0; j < pyramid - i - 1; j++) {
            str = str + '-';
        }

        // star
        for (let j = 0; j < 2 * i + 1; j++) {
            str = str + '*';
        }

        // space
        for (let j = 0; j < pyramid - i - 1; j++) {
            str = str + '-';
        }

        console.log(str);
    }
}

printPyramid(5);
