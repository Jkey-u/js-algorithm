// 03_stack
// Array, Linked List 모두 가능
// good : Fast Operation(removing, pushing), Fast Peek, Ordered
// bad : Slow Lookup

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    // 1. peek
    peek() {
        return this.top;
    }

    // 2. push
    push(value) {
        const newNode = new Node(value);

        if(this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    // 3. pop
    pop() {
        if(!this.top) return null;
        if(this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
    }
}

// test
const myStack = new Stack();
console.log(myStack);
myStack.peek(); //null
myStack.push('A');
myStack.push('B');
myStack.push('C');
myStack.pop();
myStack.pop();
myStack.pop(); //null