function checkAnagrams(str1, str2) {
    var str1Map = new Map();
    var str2Map = new Map();
    if (str1.length !== str2.length) {
        return false;
    }
    for (var i = 0; i < str1.length; i++) {
        if (str1Map.get(str1[i])) {
            var value = str1Map.get(str1[i]) + 1;
            str1Map.set(str1[i], value);
        }
        else {
            str1Map.set(str1[i], 1);
        }
        if (str2Map.get(str2[i])) {
            var value = str2Map.get(str2[i]) + 1;
            str2Map.set(str2[i], value);
        }
        else {
            str2Map.set(str2[i], 1);
        }
    }
    for (var i = 0; i < str1.length; i++) {
        if (str1Map.get(str1[i]) !== str2Map.get(str1[i])) {
            return false;
        }
    }
    return true;
}
var isAnagram = checkAnagrams("listen", "silent");
console.log(isAnagram);
