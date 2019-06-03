/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
  var Stack = function() {

    this.storage = [];
    this.lowest;
    this.secondLowest;

  // add an item to the top of the stack
    this.push = function(value) {
      if (this.storage.length === 0) {
        this.lowest = value;
        this.storage.push(value)
        return;
      }
      if (this.storage.length === 1) {
        if (value > this.lowest) {
          this.secondLowest = value;
          this.storage.push(value);
          return;
        }
        if (value < this.lowest) {
          this.secondLowest = this.lowest
          this.lowest = value;
          this.storage.push(value)
          return;
        }
        if (value === this.lowest) {
          this.storage.push(value);
          return;
        }
      }
      if (value < this.lowest) {
        this.secondLowest = this.lowest
        this.lowest = value;
        this.storage.push(value);
        return;
      }
      if (value === this.lowest) {
        this.storage.push(value);
        return;
      }
    };

  // remove an item from the top of the stack
    this.pop = function() {
      if (this.storage.length === 0) {
        return null;
      } 
      if (this.storage[this.storage.length] > this.secondLowest) {
        return this.storage.pop();
      }
      if (this.storage[this.storage.length] === this.lowest) {
        this.lowest = this.secondLowest;
        return this.storage.pop();
      }
      if (this.storage[this.storage.length] === this.secondLowest) {
        return this.storage.pop();
      }
      
    };

  // return the number of items in the stack
    this.size = function() {
      return this.storage.length; 
    };
  
  // return the minimum value in the stack
    this.min = function() {
      return this.lowest;
    };
  };

