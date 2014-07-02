var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newQ = Object.create(queueMethods);
  newQ.head = 0;
  newQ.tail = 0;
  newQ.cache = {};
  return newQ;
};

var queueMethods = {
  size: function() {
    return this.tail - this.head;
  },
  enqueue: function(val){
    this.cache[this.tail++] = val;
  },
  dequeue: function() {
    if (this.size() > 0) {
      var res = this.cache[this.head];
      delete this.cache[this.head++];
      return res;
    }
  }
};


