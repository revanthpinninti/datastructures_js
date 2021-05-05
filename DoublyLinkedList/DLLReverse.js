class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLinkedList {
    constructor(){
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
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;

        return this;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let prevNode = null;
        let nextNode;

        while(node) {
            nextNode = node.next;
            node.next = prevNode;
            node.prev = nextNode;
            prevNode = node;
            node = nextNode;
        }
        return this;
    }
}


let dll = new DoublyLinkedList;
console.log(dll.push(5).push(10).push(15).push(20));
console.log(dll.reverse()); // singlyLinkedList;
console.log(dll.length); // 4
console.log(dll.head.val); // 20
console.log(dll.head.next.val); // 15
console.log(dll.head.next.next.val); // 10
console.log(dll.head.next.next.next.val); // 5