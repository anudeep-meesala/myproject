var stack = function(){
    this.storage = []
    this.size=0;
}
  stack.prototype.push = function(){
      console.log( document.getElementById("value").value);
    this.storage[this.size] = document.getElementById("value").value;
      this.size += 1
}
stack.prototype.pop = function()
{
 if (this.size ==0) {document.getElementById("answer").innerHTML = "list is empty"}
     else{
    var result = this.storage[this.size-1];
    this.storage.pop()
    this.size -=1;

    document.getElementById("answer").innerHTML = result;}

}
    
   

 stack.prototype.view = function(){
     document.getElementById("answer").innerHTML = this.storage.join();
 }
stack1 = new stack
/*stack1.push(1)
console.log(stack1)
stack1.push(2)
console.log(stack1)
stack1.pop()
console.log(stack1)
a = stack1.peek()
console.log(a)*/
