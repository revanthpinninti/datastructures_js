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
        this.length = null;      
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

    get(index) {
        if(index < 0 || index >= this.length) return undefined;

        if(index <= Math.floor(this.length/2)) {
            let count = 0;
            let current = this.head;
            while(count !== index) {
                current = current.next;
                count++;
            }
            return current;
        } else {
            let count = this.length-1;
            let current = this.tail;
            while(count !== index) {
                current = current.prev;
                count--;
            }
            return current;
        }
    }

    set(index, val) {
        let node = this.get(index);
        if(node) {
            node.val = val;
            return true;
        }
        return false;
    }
}

var dll = new DoublyLinkedList();
 
console.log(dll.push(5).push(10).push(15).push(20));
console.log(dll.set(0,10)); // true
console.log(dll.length); // 4
console.log(dll.head.val); // 10
 
console.log(dll.set(10,10)); // false
 
console.log(dll.set(2,100)); // true
console.log(dll.head.next.next.val); // 100