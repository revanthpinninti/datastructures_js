class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if(this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true) {
            if(val === current.val) return undefined;
            if(val < current.val) {
                if(current.left === null) {
                    current.left = newNode;
                    return this;
                } 
                current = current.left;
            } else if(val > current.val) {
                if(current.right === null) {
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }

    find(val) {
        if(this.root === null) return false;

        let current = this.root,
            found = false;

        while(current && !found) {
            if(val < current.val) {
                current = current.left;
            } else if(val > current.val) {
                current = current.right;
            } else {
                found = true;
            }
        }
        return found;
    }

    DFSPreorder(){
        let data = [];
     
        function traverse(node) {
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    DFSInorder(){
        let data = [];
     
        function traverse(node) {
            if(node.left) traverse(node.left);
            data.push(node.val);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    DFSPostorder(){
        let data = [];
     
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(this.root);
        return data;
    }
}


let bst = new BST();
console.log(bst.insert(10));
console.log(bst.insert(6));
console.log(bst.insert(15));
console.log(bst.insert(3));
console.log(bst.insert(8));
console.log(bst.insert(20));

console.log(bst.DFSPreorder());
console.log(bst.DFSInorder());
console.log(bst.DFSPostorder());