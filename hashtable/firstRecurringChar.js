const inputArr = [2, 5, 1, 5, 3, 5, 1, 2, 4];

// Brute force 
// Time complexity - O(n^2)
// Space complexity - O(1)
function firstRecurringChar(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return console.log(input[i]);
      }
    }
  }

  return console.log(undefined);
}

firstRecurringChar(inputArr);

// Using HashTable
// Time complexity - O(n)
// Space complexity - O(n)
function firstRecurringChar2(input) {
    let map = {};

    for(let i = 0; i < input.length; i++) {
        if(map[input[i]] !== undefined) {
            return console.log(input[i])
        } 

        map[input[i]] = i;
    }

    return console.log(undefined);
}


firstRecurringChar2(inputArr);