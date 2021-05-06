class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        return ++this.length;
    }

    pop() {
        if(!this.head) return null;

        let poppedNode = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = poppedNode.next;
            poppedNode.next = null;
        }

        this.length--;

        return poppedNode.val;
    }
}

let stack = new Stack();
console.log(stack.push('First'));
console.log(stack.push('Second'));
console.log(stack.push(23));
console.log(stack.pop());
console.log(stack.push(97));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
