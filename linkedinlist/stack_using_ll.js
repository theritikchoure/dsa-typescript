// Creating a node
var StackNode = /** @class */ (function () {
    function StackNode(value) {
        this.value = value;
        this.next = null;
    }
    return StackNode;
}());
// Class for Stack using LinkedList
var StackLinkedList = /** @class */ (function () {
    function StackLinkedList() {
        this.head = null;
        this.tail = null;
    }
    StackLinkedList.prototype.add = function (value) {
        var node = new StackNode(value);
        // It is first node
        if (this.head == null && this.tail == null) {
            this.head = node;
            this.tail = node;
        }
        else {
            if (this.tail) {
                this.tail.next = node;
                this.tail = node;
            }
        }
    };
    StackLinkedList.prototype.remove = function () {
        var _a;
        if (((_a = this.head) === null || _a === void 0 ? void 0 : _a.next) == null) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            return temp === null || temp === void 0 ? void 0 : temp.value;
        }
        else {
            var temp = this.head;
            while (temp.next.next != null) {
                temp = temp.next;
            }
            this.tail = temp;
            this.tail.next = null;
        }
    };
    return StackLinkedList;
}());
var StackLL = new StackLinkedList();
StackLL.add(6);
StackLL.add(10);
StackLL.add(14);
StackLL.add(18);
StackLL.add(22);
StackLL.add(26);
console.log(StackLL);
StackLL.remove();
console.log(StackLL);
