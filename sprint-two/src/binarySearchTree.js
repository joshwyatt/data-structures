var makeBinarySearchTree = function(value){

  methods = {
    this.insert: function() {},
    this.contains: function() {},
    this.depthFirstLog: function() {}
  };

  newBinarySearchTree = Object.create(makeBinarySearchTree.methods);
  newBinarySearchTree.value = value;
	return newBinarySearchTree;
};

makeBinarySearchTree.methods = {
  this.insert = function() {};
  this.contains = function() {};
  this.depthFirstLog = function() {};
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
