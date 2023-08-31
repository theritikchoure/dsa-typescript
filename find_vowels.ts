
const vowels:{[key: string]: number} = {
    'a': 1,
    'e': 2,
    'i': 3,
    'o': 4,
    'u': 5,
}

function findVowels(sentence:string):void {
    let count: number = 0;
    for (let i:number = 0; i < sentence.length; i++) {
        let word:string = sentence[i].toLowerCase();

        if(vowels[word]) {
            count++;
        }
    } 

    console.log(count)
}

findVowels("Hi there a");