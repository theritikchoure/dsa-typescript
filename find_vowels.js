var vowels = {
    'a': 1,
    'e': 2,
    'i': 3,
    'o': 4,
    'u': 5,
};
function findVowels(sentence) {
    var count = 0;
    for (var i = 0; i < sentence.length; i++) {
        var word = sentence[i].toLowerCase();
        if (vowels[word]) {
            count++;
        }
    }
    console.log(count);
}
findVowels("Hi there a");
