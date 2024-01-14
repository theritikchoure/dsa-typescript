function printSteps(step) {
    for (let i = 0; i <= step; i++) {
        let stp = '';
        for (let j = 0; j <= step; j++) {
            if (j < i) {
                stp = "#" + stp;
            } else {
                stp = stp + " ";
            }
        }
        console.log(stp);
    }
}

printSteps(5);
