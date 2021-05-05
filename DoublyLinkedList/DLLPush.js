class Node{
    constructor(val){
        this.val = val
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
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

    pop() {
        if(!this.head) return undefined;
        let poppedNode = this.tail;
        if(this.length===1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null
        }
       
        this.length--;

        return poppedNode;
    }
}

let dll = new DoublyLinkedList();
console.log(dll.push(5));   //doublyLinkedList
console.log(dll.length); //1
console.log(dll.head.val); //5
console.log(dll.tail.val); //5
console.log(dll.head.prev); //null

console.log(dll.push(10)); //list
console.log(dll.length); // 2
console.log(dll.head.val); // 5
console.log(dll.head.next.val); // 10
console.log(dll.tail.val); // 10
console.log(dll.head.next.prev.val); // 5
console.log(dll.push(15)); // doublyLinkedList
console.log(dll.length); // 3
console.log(dll.head.val); // 5
console.log(dll.tail.val); // 15
console.log(dll.tail.prev.val); // 10
console.log(dll.head.next.next.val); // 15
 
console.log(dll.pop().val); // 15
console.log(dll.length); // 2
console.log(dll.pop().val); // 10
console.log(dll.length); // 1
console.log(dll.pop().val); // 5
console.log(dll.length); // 0
console.log(dll.pop()); // undefined
console.log(dll.length); // 0