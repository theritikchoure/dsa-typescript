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
    if (message) {
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
    let current = this.traverseToIndex(position - 1);
    let temp = current.next;
    current.next = temp.next;
    this.length--;
    // console.log(current);
  }
}

function checkIdentical(LOne, LTwo) {
    console.log(LOne)
    console.log(LTwo)
    if (LOne === LTwo) {
        console.log("Identical");
        return;
    } else {
        console.log("Not identical");
        return;
    }
}

let llOne = new LinkedList(1);
llOne.append(2);
llOne.append(3);
llOne.append(4);

llOne.print();


let llTwo = new LinkedList(1);
llTwo.append(2);
llTwo.append(3);
llTwo.append(4);

llTwo.print();

checkIdentical(llOne, llTwo);