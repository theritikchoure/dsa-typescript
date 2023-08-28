class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    // push element to array
    push(value) {
        this.data[this.length] = value;
        this.length++;
    }

    // insert element at specific index
    insert(index, value) {

        if(index > this.length || index < 0) {
            throw new Error('Index out of bounds');
        }

        for (var i = this.length; i > index; i--) {
            this.data[i] = this.data[i-1];
        }

        this.data[index] = value;
        this.length++;
    }

    // remove last element from array
    pop() {
        let lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;

        return lastItem;
    }

    // delete index element
    delete(index) {
        for(let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1];
        }

        delete this.data[this.length-1];
        this.length--;
    }

    slice(start, end) {
        let diff = end - start;
        for(let i = start; i < this.length-diff; i++) {
            console.log(i)
            this.data[i] = this.data[i+diff+1];
        }

        for(let i = this.length-1; i >= this.length - (end-start) - 1; i--) {
            delete this.data[i];
        }

        this.length = this.length - (end-start) - 1;
    }
}

let arr = new MyArray();

console.log(arr);

arr.push(5)
arr.push(6)
arr.push(7)
arr.push(8)

console.log(arr)

arr.push(10)
console.log(arr)

console.log(arr.pop())

console.log(arr.length)

arr.insert(4, 'x');

console.log(arr)

arr.delete(2);

console.log(arr)

arr.push('y')
arr.push('z')
arr.push('a')

console.log(arr)

arr.slice(2, 2);

console.log(arr)