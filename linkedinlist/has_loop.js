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
    }

    add(value) {
        let newNode = new Node(value);

        if (this.count === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.count++;
    }
}
/**
 * Detects if a linked list has a loop using hashing to store visited nodes.
 * @param {Node} head - The head of the linked list.
 * @returns {boolean} - True if a loop is detected, false otherwise.
 * 
 * Time Complexity: O(n) - where n is the number of nodes in the linked list.
 * Space Complexity: O(n) - in the worst case, hashmap stores information about all nodes.
 */
function hasLoopWithHashing(head) {
    // Create a hashmap to store visited nodes
    let hashmap = new Map();
    let tempNode = head;

    // Traverse the linked list
    while (tempNode != null) {
        // If the node is already in the hashmap, a loop is detected
        if (hashmap.has(tempNode)) {
            return true;
        }

        // Mark the current node as visited in the hashmap
        hashmap.set(tempNode, true);
        
        // Move to the next node
        tempNode = tempNode.next;
    }

    // No loop found
    return false;
}

/**
 * Detects if a linked list has a loop using Floyd's Tortoise and Hare algorithm.
 * @param {Node} head - The head of the linked list.
 * @returns {boolean} - True if a loop is detected, false otherwise.
 * 
 * Time Complexity: O(n) - where n is the number of nodes in the linked list.
 * Space Complexity: O(1) - constant space, uses two pointers only.
 */
function hasLoopWithTwoPointers(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    // No loop found
    return false;
}

/**
 * Finds the first node in the loop of a linked list using Floyd's Tortoise and Hare algorithm.
 * @param {Node} head - The head of the linked list.
 * @returns {Node|null} - The first node in the loop if a loop is detected, null otherwise.
 * 
 * Time Complexity: O(n) - where n is the number of nodes in the linked list.
 * Space Complexity: O(1) - constant space, uses two pointers only.
 */
function loopFirstNode(head) {
    let slow = head;
    let fast = head;
    let loopExists = false;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            loopExists = true;
            break;
        }
    }

    if (loopExists) {
        slow = head;
        while (slow !== fast) {
            fast = fast.next;
            slow = slow.next;
        }

        return slow;
    }

    // No loop found
    return null;
}

/**
 * Calculates the length of the loop in a linked list using Floyd's Tortoise and Hare algorithm.
 * @param {Node} head - The head of the linked list.
 * @returns {number} - The length of the loop if a loop is detected, 0 otherwise.
 * 
 * Time Complexity: O(n) - where n is the number of nodes in the linked list.
 * Space Complexity: O(1) - constant space, uses two pointers only.
 */
function loopLength(head) {
    let slow = head;
    let fast = head;
    let loopExists = false;
    let counter = 0;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            loopExists = true;
            break;
        }
    }

    if (loopExists) {
        fast = fast.next;
        counter = 1;
        while (slow !== fast) {
            fast = fast.next;
            counter++;
        }

        return counter;
    }

    // No loop found
    return 0;
}

// Create a linked list with a loop
let llWithLoop = new LL();

llWithLoop.add(1);
llWithLoop.add(2);
llWithLoop.add(3);
llWithLoop.add(4);

// Creating a loop by connecting the tail to the second node
llWithLoop.tail.next = llWithLoop.head.next;

// Test if the loop detection functions work
console.log(hasLoopWithHashing(llWithLoop.head)); // Expected output: true
console.log(hasLoopWithTwoPointers(llWithLoop.head)); // Expected output: true
console.log(loopFirstNode(llWithLoop.head)); // Expected output: Node with value 2
console.log(loopLength(llWithLoop.head)); // Expected output: 3