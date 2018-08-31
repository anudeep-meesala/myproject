var queue = function(){
    this.storage = []
    this.tail = 0;
}

queue.prototype.enqueue = function(value){
    this.storage[this.tail] = document.getElementById("value").value;
    this.tail += 1
}
queue.prototype.dequeue = function(){
    if (this.tail == 0){document.getElementById("answer").innerHTML = "list is empty"}
       else{

    var result = this.storage[0];
     this.storage.shift()
     this.tail-=1;
   document.getElementById("answer").innerHTML = result;}
       }
     queue.prototype.view = function(){
     document.getElementById("answer").innerHTML = this.storage.join();
     }

queue1 = new queue
/*queue1.enqueue(5)
queue1.enqueue(19)
queue1.enqueue(20)
console.log(queue1)
queue1.dequeue()
console.log(queue1)*/
