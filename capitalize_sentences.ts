function capitalizeSentence(sentence:string):void {
    let capitalizeSentence:string[] = [];

    let splitSentence:string[] = sentence.split(' ')

    for (let i:number = 0; i < splitSentence.length; i++) {
        capitalizeSentence.push(splitSentence[i][0].toUpperCase() + splitSentence[i].slice(1))
    }

    console.log(capitalizeSentence.join(' '))
}

capitalizeSentence("hello. this is a test. it has multiple sentences")