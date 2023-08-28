class newNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new newNode(value);
    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;

    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          return;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = node;
          return;
        } else {
          current = current.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      console.log("No element in tree");
      return null;
    }

    let current = this.root;

    while (current) {
      if (value > current.value) {
        current = current.right;
      } else if (value < current.value) {
        current = current.left;
      } else if (value === current.value) {
        console.log("Element Found");
        return;
      }
    }

    console.log("Element not found");
  }

  remove(value) {
    if (!this.root) {
      return console.log("Tree is empty");
    }

    let current = this.root;
    let parent = null;
    let direction = "";

    while (current) {
      if (value > current.value) {
        parent = current;
        current = current.right;
        direction = "right";
      } else if (value < current.value) {
        parent = current;
        current = current.left;
        direction = "left";
      } else if (value === current.value) {
        // we have found the node to be removed

        // Case 1: Current node has no left and no right child
        if (!current.left && !current.right) {
          if (direction === "") {
            this.root = null;
          } else {
            parent[direction] = null;
          }
        }

        // Case 2: Current has no left child
        if (!current.left) {
          if (direction === "") {
            this.root = current.right;
          } else {
            parent[direction] = current.right;
          }
        }

        // Case 3: Current has no right child
        if (!current.right) {
          if (direction === "") {
            this.root = current.left;
          } else {
            parent[direction] = current.left;
          }
        }

        // Case 4: Current has both right and left
        if (current.right && current.left) {
          let successor = current.right;
          let successorParent = current;

          while (successor.left) {
            successorParent = successor;
            successor = successor.left;
          }

          current.value = successor.value; // updated the value

          // remove the successor node
          if (successor.right) {
            successorParent.left = successor.right;
          } else {
            successorParent.left = null;
          }
        }
      }
    }
    console.log("Element not found")
  }

  // Level Order traversal
  bfsTraversal() {
    if (!this.root) {
      return [];
    }

    let result = [];
    let queue = [this.root];

    while (queue.length > 0) {
      let node = queue.shift();

      result.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    console.log(result);
  }
}

let tree = new BST();

tree.insert(9);
tree.insert(5);
tree.insert(12);
tree.insert(10);
tree.insert(13);
tree.insert(2);
tree.insert(7);
tree.insert(1);
tree.insert(3);
tree.insert(6);
tree.insert(8);
tree.insert(4);

// tree.lookup(3);

// tree.remove(5);

tree.bfsTraversal();

tree.remove(9);

tree.bfsTraversal();
