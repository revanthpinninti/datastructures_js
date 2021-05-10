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

    BFS(){
        let data =[],
            queue = [],
            node = this.root;
        
            queue.push(node);
            while(queue.length) {
                node = queue.shift();
                data.push(node.val);
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            return data;
    }
}


let bst = new BST();
console.log(bst.insert(10));
console.log(bst.insert(5));
console.log(bst.insert(13));
console.log(bst.insert(11));
console.log(bst.insert(2));
console.log(bst.insert(16));
console.log(bst.insert(7));
console.log(bst.find(7));
console.log(bst.find(100));
console.log(bst.BFS());