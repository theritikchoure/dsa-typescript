class newNode {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.previous = null;
    }
  }
  
  class DoublyLinkedList {
    constructor(value) {
      let node = new newNode(value);
      this.head = node;
      this.tail = node;

      this.length = 1;
    }
  
    get(position) {
      let current = this.traverseToIndex(position);
  
      console.log(current.value);
    }
  
    append(value) {
      let node = new newNode(value);
  
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
      this.length++;
    }
  
    prepend(value) {
      let node = new newNode(value);
  
      this.head.previous = node;
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

    printReverse() {
      let current = this.tail;

      while (current !== null) {
        console.log(current.value);
        current = current.previous;
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

      console.log(value)
  
      let node = new newNode(value);
  
      let current = this.traverseToIndex(index);
      let currentNext = current.next;
      node.next = current.next;
      node.previous = current;
      currentNext.previous = node;
      current.next = node;
  
      this.length++;
    }
  
    remove(position) {
      let current = this.traverseToIndex(position-1);
      let deleteNode = current.next;
      let followerNode = deleteNode.next;

      current.next = deleteNode.next;

      if(followerNode) {
        followerNode.previous = deleteNode.previous;
      } else {
        this.tail = current;
      }

      this.length--;
    }
  }
  
  let ll = new DoublyLinkedList(10);
  
  ll.append(12);
  ll.append(15);
  
  ll.prepend(8);
  ll.prepend(6);
  ll.prepend(4);
  
  
  
  ll.print('Before Removing');
  console.log("length: ", ll.length);

  ll.insert(2, 99);

  ll.print('After adding 99');
  
  ll.remove(5);
  
  
  ll.print('After Removing');
  console.log(ll.length)
  
  ll.remove(5);

  ll.print('After Removing');
  console.log(ll.length)
  
  console.log('\nGet value of the node at given position');
  // ll.get(5);

  console.log(ll)


  ll.printReverse();