class newNode {
    constructor(value) {
        this.value  = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(value) {
        let node = new newNode(value);

        if(this.length === 0) {
            this.top = node;
            this.bottom = node;
        } else {
            node.next = this.top;
            this.top = node;
        }

        this.length++;
    }

    peek() {
        if(this.length === 0) {
            console.log('Stack underflow');
            return;
        }

        console.log(this.top.value)
    }

    pop() {
        if(this.length === 0) {
            console.log('Stack underflow');
            return;
        }

        this.top = this.top.next;
        this.length--;
    }
}

let st = new Stack();

st.push(5);
st.push(8);
st.push(6);
st.push(9);
st.push(4);

st.peek();

st.pop();
st.pop();

st.peek();

console.log(st.length)

