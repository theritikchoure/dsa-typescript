class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LL {
    constructor() {
        this.head = null;
        this.tail = null;

        this.count = 0;

        // A hashmap to store nodes at each position for efficient lookups
        this.hashmap = new Map();
    }

    // Adds a new node to the end of the linked list
    add(value) {
        let newNode = new Node(value);

        if(this.count === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.count++;

        // Store the new node in the hashmap with its position as the key
        this.hashmap.set(this.count, newNode);
    } 

    // Finds the kth node from the end using the count of nodes
    findKthNodeFromEndUsingCount(k) {
        let count = (this.count - k);
        let tempCount = 0;
        let tempNode = this.head;

        while(tempNode.next != null && tempCount < count) {
            tempNode = tempNode.next;
            tempCount++;
        }

        // Log the value of the kth node from the end
        console.log(tempNode.value);
    }

    // Finds the kth node from the end using a hashmap for efficient lookups
    findKthNodeFromEndUsingHashmap(k) {
        // Retrieve the kth node directly from the hashmap
        console.log((this.hashmap.get(this.hashmap.size - k + 1)).value);
    }

    // Finds the kth node from the end using two pointers
    findKthNodeFromEndUsingTwoPointers(k) {
        // Initialize two pointers, pTemp and kthTemp, with a gap of k-1 nodes
        let pTemp = this.head;
        let kthTemp = this.head;

        // Move pTemp to the kth node from the start
        for (let i = 0; i < k-1; i++) {
            pTemp = pTemp.next;
        }

        // Move both pointers until pTemp reaches the end
        while(pTemp.next != null) {
            pTemp = pTemp.next;
            kthTemp = kthTemp.next;
        }

        // Log the value of the kth node from the end
        console.log(kthTemp.value);
    }
}

// Example usage
let ll = new LL();

ll.add(5)
ll.add(10)
ll.add(15)
ll.add(20)
ll.add(25)
ll.add(30)
ll.add(35)

console.log(ll)

// Find kth node from end using count
ll.findKthNodeFromEndUsingCount(5);

// Find kth node from end using hashmap
ll.findKthNodeFromEndUsingHashmap(5);

// Find kth node from end using two pointers
ll.findKthNodeFromEndUsingTwoPointers(5);
