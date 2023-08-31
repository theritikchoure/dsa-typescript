function maxChars(str:string):void {
    let m:Map<any, any> = new Map();
    let i:number = 0;

    let max:number = 0;
    let maxChar:string = '';

    while(i < str.length) {
        if(m.get(str[i])) {
            let value:number = m.get(str[i]) + 1;
            m.set(str[i], value)            

            if(max < m.get(str[i])) {
                max = m.get(str[i])
                maxChar = str[i];
            }
        } else {
            m.set(str[i], 1)     
        }
        i++;
    }


    console.log(maxChar, max)
    
}

maxChars("abccccd")