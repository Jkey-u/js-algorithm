// 04_queue
// Linked List로 구현
// good : Fast Operation(removing, pushing), Fast Peek, Ordered
// bad : Slow Lookup

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    // 1. peek
    peek() {
        return this.first;
    }

    // 2. enQueue
    enqueue(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    // 3. deQueue
    dequeue() {
        if(!this.first) {
            return null;
        }
        if(this.first === this.last) {
            this.last = null;
        }
        const holdingPointer = this.first;
        this.first = this.first.next;
        this.length--;
        return this;
    }
}

// test
const myQueue = new Queue();
myQueue.enqueue('A'); //A
myQueue.enqueue('B'); //A, B
myQueue.enqueue('C'); //A, B, C
myQueue.enqueue('D'); //A, B, C, D
myQueue.dequeue(); //B, C, D