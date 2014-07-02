var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someStack = {};
  someStack._size = 0;
  someStack._storage = {};
  _(someStack).extend(stackMethods);
  return someStack;
};

var stackMethods = {
  size: function() {
    return this._size;
  },
  push: function(val) {
    this._storage[this._size] = val;
    this._size++;
  },
  pop: function(){
    if(this._size > 0){
      var res = this._storage[this._size - 1];
      delete this._storage[this._size - 1];
      this._size--;
      return res;
    }
  }
};


