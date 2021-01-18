function Queue() {
    let array = [];
    this.enqueue = function (element) {array.push(element); }
    this.dequeue = function () {return array.shift(); }
    this.front =   function () { return array[0]; }
    this.isEmpty = function () { return array.length == 0; }
    this.size =    function () { return array.length; }
    this.show =    function () { console.log(array.toString()); }
}
function PriorityQueue() {
    let array = [];
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function (element, priority) {
        let queueElement = new QueueElement(element, priority);
        let added = false;
        for (let i = 0; i < array.length; i++) {
            if (queueElement.priority < array[i].priority) {
                array.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if (!added) array.push(queueElement);  
    }
    this.dequeue = function () {return array.shift(); }
    this.front = function () { return array[0]; }
    this.isEmpty = function () { return array.length == 0; }
    this.size = function () {return array.length; }
    this.show = function () {
        for (let i = 0; i < array.length; i++) {
            console.log(`${array[i].element} -
            ${array[i].priority}`);
        }
    };
}
function e(){
    let priorityQueue = new PriorityQueue();
    priorityQueue.enqueue("Nombre1",2);
    priorityQueue.enqueue("Nombre2",3);
    priorityQueue.enqueue("Nombre3",2);
    priorityQueue.enqueue("Nombre4",1);
    priorityQueue.show();
}
e();


