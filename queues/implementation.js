class newNode {
    constructor(value) {
        this.value  = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    peek() {
        if(this.length === 0) {
            console.log('Queue is empty');
            return;
        } 

        console.log(this.head.value)
    }

    enqueue(value) {
        let node = new newNode(value);

        if(this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
    }

    dequeue() {
        if(this.length === 0) {
            console.log('Queue is empty');
            return;
        }

        if(this.length === 1) {
            this.tail = null;
        }

        this.head = this.head.next;

        this.length--;
    }
}

let que = new Queue();

console.log(que)

que.enqueue(5);
console.log(que);

que.dequeue();

console.log(que)

// que.enqueue(6);
// que.enqueue(8);
// que.enqueue(10);


// console.log(que)

// que.peek();

// que.dequeue();

// que.peek();

