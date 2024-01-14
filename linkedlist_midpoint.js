var newNode = /** @class */ (function () {
    function newNode(value) {
        this.value = value;
        this.next = null;
    }
    return newNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        this.head = new newNode(value);
        this.tail = this.head;
        this.length = 1;
    }
    LinkedList.prototype.get = function (position) {
        var current = this.traverseToIndex(position);
        console.log(current.value);
    };
    LinkedList.prototype.append = function (value) {
        var node = new newNode(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;
    };
    LinkedList.prototype.print = function (message) {
        if (message === void 0) { message = null; }
        if (message) {
            console.log("\n".concat(message));
        }
        var current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    };
    LinkedList.prototype.traverseToIndex = function (index) {
        var counter = 0;
        var current = this.head;
        while (counter < index - 1) {
            current = current.next;
            counter++;
        }
        return current;
    };
    // Brute force 
    LinkedList.prototype.findMidNode = function () {
        var current = this.head;
        var totalNode = 0;
        // 1st - calculate total nodes
        while (current !== null) {
            current = current.next;
            totalNode++;
        }
        // 2nd - find mid node number
        var mid = Math.floor(totalNode / 2) + 1;
        var counter = 1;
        var midNode = this.head;
        // 3rd - traverse to mid node
        while (counter < mid) {
            midNode = midNode.next;
            counter++;
        }
        console.log(midNode);
    };
    // Optimize solution - tortoise method (two pointer method)
    // slow pointer run one step, fast pointer run two steps
    // so when fast pointer reach the last node, slow pointer reach the mid node
    LinkedList.prototype.findMidNode2 = function () {
        var current = this.head;
        var slow = current; // slow pointer
        var fast = current; // fast pointer
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        console.log(slow);
    };
    return LinkedList;
}());
var ll = new LinkedList(10);
ll.append(12);
ll.append(15);
ll.append(8);
ll.append(6);
ll.append(4);
ll.findMidNode();
ll.findMidNode2();
