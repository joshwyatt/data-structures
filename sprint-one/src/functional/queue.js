var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var head = 0;
  var tail = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[tail++] = value;
  };

  someInstance.dequeue = function(){
    if(someInstance.size() > 0){
      var res = storage[head];
      delete storage[head++];
      return res;
    }
  };

  someInstance.size = function(){
    return tail - head;
  };

  return someInstance;
};
