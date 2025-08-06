class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else if (newNode.data > node.data) {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  inorder(node = this.root) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
}

const bst = new BST();
const values = [50, 30, 20, 40, 70, 60, 80];

values.forEach((value) => bst.insert(value));

console.log("In-order traversal of BST:");
bst.inorder();

//                                                            50
//                                                        /         \
//                                                      30           70
//                                                    /     \       /   \
//                                                  20      40     60    80
