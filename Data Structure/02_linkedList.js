// 02_linkedList
// good : Fast Insertion, Fast Deletion, Ordered, Flexible Size
// bad : Slow lookup, More Memory

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;
        this.length = 1;
    }

    // 1. append
    append(value) {
        const newNode = {
            value: value,
            next: null,
        }
        this.tail.next = newNode; //refer
        this.tail = newNode; //value
        this.length++;
        return this;
    } 

    // 2. prepend
    prepend(value) {
        const newNode = {
            value: value,
            next: null,
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    // 3. printList
    printList() {
        const array = [];
        let currendNode = this.head;
        while(currendNode !== null) {
            array.push(currendNode);
            currendNode = currendNode.next;
        }
        return array;
    }

    // 4. insert
    insert(index, value){
        //Check for proper parameters;
        if(index >= this.length) {
          console.log('yes')
          return this.append(value);
        }
        
        const newNode = {
          value: value,
          next: null
        }
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }

    // 5. traverseToIndex - lookUp
    traverseToIndex(index) {
        // Check paramenters
        let counter = 0;
        let currendNode = this.head;
        while(counter !== index) {
            currendNode = currendNode.next;
            counter++;
        }
        return currendNode;
    }

    // 6. remove
    remove(index) {
        //check parameters
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
    }
}

// test
let myLinkedList = new LinkedList(10); //[10]
myLinkedList.append(5); //[10, 5]
myLinkedList.append(16); //[10, 5, 16]
myLinkedList.prepend(1); //[1, 10, 5, 16]
myLinkedList.insert(2, 99); //[1, 10, 99, 5, 16]
myLinkedList.insert(1, 88); //[1, 88, 10, 99, 5, 16]
myLinkedList.remove(2); //[1, 88, 99, 5, 16]