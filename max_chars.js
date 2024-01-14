function maxChars(str) {
    var m = new Map();
    var i = 0;
    var max = 0;
    var maxChar = '';
    while (i < str.length) {
        if (m.get(str[i])) {
            var value = m.get(str[i]) + 1;
            m.set(str[i], value);
            if (max < m.get(str[i])) {
                max = m.get(str[i]);
                maxChar = str[i];
            }
        }
        else {
            m.set(str[i], 1);
        }
        i++;
    }
    console.log(maxChar, max);
}
maxChars("abccccd");
