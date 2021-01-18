function Circular() {

    let Node = function (element) {
        this.element = element;
        this.next = null;
    }
    let length = 0;
    let head = null;

    this.append = function (element) {

        let node = new Node(element),
            current;

        if (head === null) {
            head = node;
        } else {

            current = this.getElementAt(length - 1);

            current.next = node;
        }
        node.next = head;
        length++;
    }
    this.insert = function (index, element) {
        if (index >= 0 && index <= length) {
            let node = new Node(element);
            let current = head;
            if (index === 0) {
                if (head === null) {
                    head = node;
                    node.next = head;
                } else {
                    node.next = current;
                    current = this.getElementAt(length);
                    head = node;
                    current.next = head;
                }
            } else {
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            length++;
            return true;
        }
        return false;
    }
    this.getElementAt = function (index) {
        if (index >= 0 && index <= length) {
            let node = head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }
    this.removeAt = function (index) {
        if (index >= 0 && index < length) {
            let current = head;
            if (index === 0) {
                if (length === 1) {
                    head = undefined;
                } else {
                    const removed = head;
                    current = this.getElementAt(length - 1);
                    head = head.next;
                    current.next = head;
                    current = removed;
                }
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            } 
            length--;
            return current.element;
        }
        return undefined;
    }
    this.toString = function (element) {
        let current = head,
            string = "",
            temp = head.element;

        while (current) {
            if (temp === current.next.element) {
                string += current.element + (current.next ? "" : "");
                break;
            }
            string += current.element + (current.next ? " - " : "");
            current = current.next;
        }
        return console.log(string);
    }
}


const e = () => {
    let list = new Circular();
    console.log("elemento 10, 21 y 32 ");
    list.append(10);
    list.append(22);
    list.append(33);
    list.toString();
    console.log();

    console.log("Element 500 inserted at index 1:");
    list.insert(1, 500);
    list.toString();
    console.log();

    console.log("Elemento borrado 1");
    list.removeAt(1);
    list.toString();
    console.log();

    list.getElementAt(1);
}
e();