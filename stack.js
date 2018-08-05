var stack = function(){
    this.storage = {}
    this.size=0;
}
  stack.prototype.push = function(value){
    this.storage[this.size] = value
      this.size += 1
}
stack.prototype.pop = function()
{
 if (this.size ==0) {return null}
    var result = this.storage[this.size];
    delete this.storage[this.size];
    this.size -=1;
    return result;
}
    
    stack.prototype.peek = function(){
    if (this.size ==0){return null}
    var result = this.storage[this.size];
    return result;
}

stack1 = new stack
stack1.push(1)
console.log(stack1)
stack1.pop()
console.log(stack1)
a = stack1.peek()
console.log(a)