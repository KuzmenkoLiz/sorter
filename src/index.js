class Sorter {
  constructor() {
    // your implementation
    this.array = [];
    this.compareFunction = function(a, b) {return a-b};
  }

  add(element) {
    // your implementation
    this.array.push(element);
  }

  at(index) {
    // your implementation
    return this.array[index];
  }

  get length() {
    // your implementation
    return this.array.length;
  }

  toArray() {
    // your implementation
    return this.array;
  }

  sort(indices) {
    // your implementation
    function compare(a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
    }
    indices.sort(compare);
    var mass = [];

    for (var i = 0; i < indices.length; i++) {
      mass.push(this.array[indices[i]]);
    }
    mass.sort(this.compareFunction);

    for (var i = 0; i < indices.length; i++){
      this.array.splice(indices[i], 1, mass[i]);
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;