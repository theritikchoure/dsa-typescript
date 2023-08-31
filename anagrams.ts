function checkAnagrams(str1:string, str2:string):boolean {

    let str1Map:Map<any, any> = new Map();
    let str2Map:Map<any, any> = new Map();

    if(str1.length !== str2.length) {
        return false;
    }

    for(let i = 0; i < str1.length; i++) {
        if(str1Map.get(str1[i])) {
            let value:number = str1Map.get(str1[i]) + 1;
            str1Map.set(str1[i], value); 
        } else {
            str1Map.set(str1[i], 1); 
        }

        if(str2Map.get(str2[i])) {
            let value:number = str2Map.get(str2[i]) + 1;
            str2Map.set(str2[i], value); 
        } else {
            str2Map.set(str2[i], 1); 
        }
    }

   
    for(let i:number = 0; i < str1.length; i++) {
        if(str1Map.get(str1[i]) !== str2Map.get(str1[i])) {
            return false;
        }
    }

    return true;

}

let isAnagram = checkAnagrams("listen", "silent");

console.log(isAnagram)