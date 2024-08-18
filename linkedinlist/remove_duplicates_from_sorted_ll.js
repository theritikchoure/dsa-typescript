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

    print() {
        let tempHead = this.head;

        let llString;

        while(tempHead != null) {
            llString = llString ? llString + '->' + tempHead.value : tempHead.value
            tempHead = tempHead.next;
        }
        
        console.log(llString);
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

    removeDuplicates() {
        if(this.head === null) {
            return;
        }

        let currentNode = this.head;
        let nextNode = currentNode.next;

        while(nextNode != null) {
            if(currentNode.value === nextNode.value) {
                currentNode.next = nextNode.next;
                nextNode = nextNode.next;
            } else {
                currentNode = currentNode.next;
                nextNode = nextNode.next;
            }
        }

    }
}

function removeDuplicatesUsingRecursion(headNode) {
    if(headNode === null || headNode.next === null) return;
    if(headNode.value === headNode.next.value) {
        headNode.next = headNode.next.next;
        removeDuplicatesUsingRecursion(headNode)
    } else {
        removeDuplicatesUsingRecursion(headNode.next)
    }
}

// Example usage
let ll = new LL();

ll.add(2);
ll.add(3);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(7);
ll.add(7);
ll.add(9);
ll.add(9);

ll.print()

// ll.removeDuplicates();
removeDuplicatesUsingRecursion(ll.head)
ll.print()