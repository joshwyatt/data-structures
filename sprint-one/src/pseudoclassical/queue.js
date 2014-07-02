var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this._head = 0;
  this._tail = 0;
  this._storage = {};
};

Queue.prototype.size = function() {
  return this._tail - this._head;
};

Queue.prototype.enqueue = function(val){
  this._storage[this._tail++] = val;
};

Queue.prototype.dequeue = function() {
  if (this.size() > 0) {
    var res = this._storage[this._head];
    delete this._storage[this._head];
    this._head++;
    return res;
  }
}


