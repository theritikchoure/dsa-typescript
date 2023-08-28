class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);

    this.tail = this.head;
    this.length = 1;
  }

  get(position) {
    let current = this.traverseToIndex(position);

    console.log(current.value);
  }

  append(value) {
    let node = new Node(value);

    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    let node = new Node(value);

    node.next = this.head;

    this.head = node;
    this.length++;
  }

  print(message = null) {

    if(message) {
        console.log(`\n${message}`);
    }

    let current = this.head;

    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  traverseToIndex(index) {
    let counter = 0;
    let current = this.head;

    while (counter < index - 1) {
      current = current.next;
      counter++;
    }

    return current;
  }

  insert(index, value) {
    if (index > this.length) {
      return this.append(value);
    }

    let node = new Node(value);

    let current = this.traverseToIndex(index);
    node.next = current.next;
    current.next = node;

    this.length++;
  }

  remove(position) {
    let current = this.traverseToIndex(position-1);
    let temp = current.next;
    current.next = temp.next;
    this.length--;
    // console.log(current);
  }
}

let ll = new LinkedList(10);

ll.append(12);
ll.append(15);

ll.prepend(8);
ll.prepend(6);
ll.prepend(4);

ll.insert(3, 9);
ll.insert(4, 9.2);
ll.insert(22, 9.3);
ll.insert(20, 9.5);

ll.print('Before Removing');
console.log(ll.length)

ll.remove(5);
ll.remove(5);


ll.print('After Removing');
console.log(ll.length)


console.log('\nGet value of the node at given position');
ll.get(5);