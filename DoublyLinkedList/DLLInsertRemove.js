class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLinkedList {
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

    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
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

    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let prev = this.get(index-1);
        if(prev) {
            let temp = prev.next;
            prev.next = newNode;
            newNode.prev = prev;
            newNode.next = temp;
            temp.prev = newNode;
            this.length++;

            return true;
        }
        return false;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();

        let removedNode = this.get(index);
        let prevNode = removedNode.prev;
        let nextNode = removedNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        removedNode.prev = null;
        removedNode.next = null;
        this.length--;

        return removedNode;
    }
}

var dll = new DoublyLinkedList;
console.log(dll.push(5).push(10).push(15).push(20));
console.log(dll.insert(2,12)); // true
console.log(dll.insert(100,12)); // false
console.log(dll.length); // 5
console.log(dll.head.val); // 5
console.log(dll.head.next.val); // 10
console.log(dll.head.next.next.val); // 12
console.log(dll.head.next.next.next.val); // 15
console.log(dll.head.next.next.next.next.val); // 20
 
var dll2 = new DoublyLinkedList;
console.log(dll2.push(5).push(10).push(15).push(20));
console.log(dll2.remove(2).val); // 15
console.log(dll2.remove(100)); // undefined
console.log(dll2.length); // 3
console.log(dll2.head.val); // 5
console.log(dll2.head.next.val); // 10
console.log(dll2.head.next.next.val); // 20