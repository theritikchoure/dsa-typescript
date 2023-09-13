
function findArrayIntersection(arr1:number[], arr2:number[]):number[] {
    let i:number = 0;
    let j:number = 0;

    let ans:number[] = [];

    arr1.sort((a, b) => a-b);
    arr2.sort((a, b) => a-b);

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            i++;
        }

        if(arr1[i] > arr2[j]) {
            j++;
        }

        if(arr1[i] === arr2[j]) {
            ans.push(arr1[i]);
            i++;
            j++;
        }
    }

    return ans;
}

let intersectionArr1:number[] = [4, 9, 5];
let intersectionArr2:number[] = [9, 4, 9, 8, 4];

let intersectionArr:number[] = findArrayIntersection(intersectionArr1, intersectionArr2);

console.log(intersectionArr)