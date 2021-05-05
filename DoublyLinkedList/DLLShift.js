class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(){
        this.prev = null;
        this.next = null;      
        this.length = 0;      
    }
    push(val){
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
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

    shift() {
        if(!this.head) return undefined;
        let temp = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = temp.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp;
    }
}


var dll = new DoublyLinkedList;
console.log(dll.unshift(5)); // doublyLinkedList
console.log(dll.length); // 1
console.log(dll.head.val); // 5
console.log(dll.tail.val); // 5
console.log(dll.unshift(10)); // doublyLinkedList
console.log(dll.length); // 2
console.log(dll.head.val); // 10
console.log(dll.head.next.val); // 5
console.log(dll.tail.val); // 5
console.log(dll.unshift(15)); // doublyLinkedList
console.log(dll.length); // 3
console.log(dll.head.val); // 15
console.log(dll.tail.val); // 5
console.log(dll.head.next.next.val); // 5
 
console.log(dll.shift().val); // 15
console.log(dll.length); // 2
console.log(dll.shift().val); // 10
console.log(dll.length); // 1
console.log(dll.shift().val); // 5
console.log(dll.length); // 0
console.log(dll.pop()); // undefined
console.log(dll.length); // 0