class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    addFront(value) {
        var newNode = new Node(value);
        if(this.head==null) {
            this.head = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
    removeFront() {
        var temp = this.head
        this.head = temp.next;
        temp.next = null;
        if(this.head==null){
            return null;
        }
        return this.head;
    }
    front() {
        if(this.head==null) {
            return null;
        }
        return this.head;
    }
    printList() {
        var temp = "";
        var curNode = this.head;
        while (curNode!=null) {
            temp = temp + curNode.data + " ";
            curNode = curNode.next;
        }
        console.log(temp);
    }
}

let SLL1 = new SLL();
SLL1.addFront(18);
SLL1.addFront(5);
SLL1.addFront(73);
SLL1.removeFront();
SLL1.removeFront();
SLL1.printList();
console.log(SLL1.front());
SLL1.removeFront();
console.log(SLL1.front());