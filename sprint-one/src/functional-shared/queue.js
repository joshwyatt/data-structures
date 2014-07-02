var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQ = {};
  newQ._head = 0;
  newQ._tail = 0;
  newQ._storage = {};
  _.extend(newQ, queueMethods);
  return newQ;
};

var queueMethods = {
  size: function() {
    return this._tail - this._head;
  },
  enqueue : function(val){
    var _tail = this._tail;
    this._storage[_tail] = val;
    this._tail++;
  },
  dequeue: function() {
    if (this.size() > 0) {
      var _head = this._head;
      var res = this._storage[_head];
      delete this._storage[_head];
      this._head++;
      return res;
    }
  }
};



