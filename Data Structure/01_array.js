// 01_array
// good : Fast lookup, Fast push/pop, Ordered
// bad : Slow inserts, Slow deletes, Slow searching, Fixed size(when using static array)

class jsArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    // 1. get
    get(index) {
        return this.data[index];
    }

    // 2. push
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    // 3. delete
    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
    }
    
    // 4. shift
    shiftItems(index) {
        for(let i = index; i < index.length; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }

    // 5. pop
    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1]; // delete : delete attribute
        this.length--;
        return lastItem;
    }
}