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

    contains(value) {
        var runner = this.head;
        var bool = false;
        while (runner!=null) {
            if (runner.data == value) {
                bool = true;
            }
            runner = runner.next;
        }
        return bool;
    }
    length() {
        var runner = this.head;
        var length = 0;
        while(runner!=null) {
            length++;
            runner = runner.next;
        }
        return length;
    }
    display() {
        var list = "";
        var runner = this.head;
        while (runner!=null) {
            list = list + runner.data + ", ";
            runner = runner.next;
        }
        console.log(list);
    }
    max() {
        var runner = this.head;
        var max = runner.data;
        while(runner != null) {
            if(runner.data > max){
                max = runner.data;
            }
            runner = runner.next;
        }
        return(max);
    }
    min() {
        var runner = this.head;
        var min = runner.data;
        while(runner != null) {
            if(runner.data < min){
                min = runner.data;
            }
            runner = runner.next;
        }
        return(min);
    }
    average() {
        var runner = this.head;
        var avg = 0;
        while(runner != null) {
            avg += runner.data;
            runner = runner.next;
        }
        avg /= this.length();
        return(avg);
    }
}

var SLL1 = new SLL();
SLL1.addFront(5);
SLL1.addFront(7);
SLL1.addFront(2);
SLL1.addFront(12);
console.log(SLL1.max());
console.log(SLL1.min());
console.log(SLL1.average());