class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for(let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }

        return hash;
    }

    set(key, value) {
        let index = this._hash(key);
        let data = this.data[index];
        if(!data) {
            this.data[index] = [];
        } 

        this.data[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        let bucket = this.data[index];
        if(bucket && bucket.length > 0) {
            for(let i = 0; i < bucket.length; i++) {
                if(bucket[i][0] === key) {
                    return console.log(bucket[i][1]);
                }
            }
        }

        console.log(bucket);
    }

    keys() {
        const keysArr = [];

        for(let i = 0; i < this.data.length; i++) {
            let data = this.data[i];

            if(data) {
               if(data.length > 1) {
                for(let j = 0; j < data.length; j++) {
                    keysArr.push(data[j][0]);
                }
               } else {
                keysArr.push(data[0][0])
               }
            }
        }

        console.log(keysArr);
    }
}

const myHashTable = new HashTable(5);


myHashTable.set('grapes', 10000);
myHashTable.set('apples', 500);
myHashTable.set('banana', 200);

// myHashTable.get('grapes');
// myHashTable.get('banana');

myHashTable.keys();