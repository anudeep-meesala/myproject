var queue = function(){
    this.storage = {}
    this.tail = 0;
}

queue.prototype.enqueue = function(value){
    this.storage[this.tail] = value;
    this.tail += 1
}
queue.prototype.dequeue = function(){
    if (this.tail == 0){
        return null
    }
    var result = this.storage[0];
    delete this.storage[0];
    this.tail-=1;
    return result;
    
}
queue1 = new queue
queue1.enqueue(5)
queue1.enqueue(19)
queue1.enqueue(20)
console.log(queue1)
queue1.dequeue()
console.log(queue1)
