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
console.log(dll.remove(2).val); // 15
console.log(dll.remove(100)); // undefined
console.log(dll.length); // 3
console.log(dll.head.val); // 5
console.log(dll.head.next.val); // 10
console.log(dll.head.next.next.val); // 20