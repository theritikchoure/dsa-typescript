/**
 * Node class represents a node in a linked list.
 * @param {any} value - The value of the node.
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * Linked List class represents a sorted linked list.
 */
class LL {
    constructor() {
        this.head = null;
    }

    /**
     * Adds a new node with the specified value in a sorted manner in the linked list.
     * @param {any} value - The value to be added to the linked list.
     * 
     * Time Complexity: O(n) - where n is the number of nodes in the linked list.
     *   In the worst case, it may need to traverse the entire list to find the correct position.
     * Space Complexity: O(1) - constant space, no additional data structures used.
     */
    add(value) {
        let newNode = new Node(value);

        let tempHead = this.head;

        // If the list is empty or the new node's value is smaller than the head's value
        if (this.head === null || this.head.value >= newNode.value) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            // Traverse the list to find the correct position for the new node
            while (tempHead.next != null && tempHead.next.value < newNode.value) {
                tempHead = tempHead.next;
            }

            // Insert the new node in the sorted position
            newNode.next = tempHead.next;
            tempHead.next = newNode;
        }
    }

    reverse() {
        let previous = null;
        let current = this.head;
        let next;

        while(current != null) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        return previous;
    }
}

// Example usage
let ll = new LL();

ll.add(3);
ll.add(5);
ll.add(4);

console.log(ll);

console.log(ll.reverse())
