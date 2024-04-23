class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0
    }

    // adding new node to the end of list
    append(value) {
        if (this.head === null) {
            const node = new Node(value);
            this.head = node;
            this.count++
        }
        else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next
            }
            const node = new Node(value);
            current.next = node;
            this.count++;
        }
    }
    // adding new node to the start of list
    prepend(value) {
        if (this.head === null) {
            const node = new Node(value);
            this.head = node;
            this.count++
        }
        else {
            const old = this.head;
            const node = new Node(value, old);
            this.head = node;
            this.count++;
        }
    }
    // return size of list
    size() {
        return this.count;
    }
    // return head of list
    headList() {
        if (this.head !== null) {
            return this.head;
        }
    }
    // returns the last node in the list
    tail() {
        let current = this.head;
        while (current.next !== null) {
            current = current.next
        }
        return current;
    }
    // returns the node at the given index
    at(index) {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }
    // pop the last node of linkedlist
    pop() {
        if (this.head === null) {
            return 'Linkedlist has no nodes';
        }
        let current = this.head;
        let prev = current;
        while (current.next !== null) {
            prev = current;
            current = current.next
        }
        prev.next = null;
    }
    // check has linkedlist this value
    contains(value) {
        if (this.head === null) {
            return 'Linkedlist has no nodes';
        }
        let current = this.head;
        while (current.next !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    // returns the index of the node containing value, or null if not found
    find(value) {
        let current = this.head;
        for (let i = 0; i < this.count; i++) {
            if (current.value === value) {
                return i;
            }
            current = current.next
        }
        return null;
    }
    // represents linked list objects as string
    toString() {
        let output = ''
        let current = this.head
        for (let i = 0; i < this.count; i++) {
            output += `( ${current.value} ) ->`
            current = current.next;
        }
        output += ' null';
        return output;
    }

    // inserts a new node with provided value at the given index
    insertAt(value, index) {
        if (index > this.count)
            return `your index is invalid`;

        if (this.head == null)
            return 'LinkedList has no nodes'
        let current = this.head;
        let prev = current;
        for (let i = 0; i <index; i++) {
            prev = current;
            current = current.next;
        }
        const node = new Node(value, current);
        prev.next = node;
        this.count++;
    }
    // removes the node at the given index
    removeAt(index) {
        if (index > this.count)
            return `your index is invalid`;
        if (this.head == null)
            return 'LinkedList has no nodes';

        let current = this.head;
        let prev = current;
        for (let i = 0; i < index; i++) {
            prev = current;
            current = current.next;
        }
        prev.next = current.next
        this.count--;
    }
}

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
