class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return ++this.length;
    }

    dequeue() {
        if(!this.head) return null;

        let removedNode = this.head;
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedNode.next;
            removedNode.next = null;
        }
        this.length--;

        return removedNode.val;
    }
}


let queue = new Queue();
console.log(queue.enqueue('FIRST'));
console.log(queue.enqueue('Second'));
console.log(queue.enqueue(232));
console.log(queue.enqueue('Hello'));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.enqueue('CORONA'));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
