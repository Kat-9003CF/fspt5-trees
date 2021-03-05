/* ----------------------
Note: BEFORE tackling the class below,
read the tests in the test file.

//Last three methods are optional. Complete them only if you could tackle all the rest.
---------------------- */

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  // adds a child into the tree
  addChild(value) {
    let newNode = new Tree();
    // push a new tree into the current tree's children
    this.children.push(newNode);
  }

  // returns true/false if the value is in the tree
  contains(value) {
    // if the tree value matches the value passed in
    if (this.value === value) {
      // return true
      return true;
    }
    // else
    else {
      // loop through all the children
      for (let child of this.children) {
        if (this.value === value) {
          // return true
          return true;
        } else {
          // call the contains method located on each child (pass the value in)
          child.contains(value);
        }

        // return false if not found at all
        return false;
      }
    }
  }

  // applies the function to each child in the tree
  traverse(fn) {
    // fn(this);
    for (let child of this.children) {
      this.children.traverse(fn);
    }
  }

  // OPTIONAL
  //return the node with that value if found. Returns null otherwise
  find(value) {}

  // OPTIONAL
  //adds a node with "value" as a child of the node with refValue
  //returns the new node added
  //or null if refValue was not found
  insertChildUnder(refValue, value) {}

  // OPTIONAL
  //adds a node with "value" between refValue and childValue (which has to be a child of refValu)
  //returns the new node added
  insertBetween(refValue, childValue, value) {}
}

module.exports = Tree;
