class Sorter {
  constructor () {
    this.storage = [];
    this.length = 0;
    this.comparator = (a, b) => a - b;
  }
  add (element) {
    this.storage.push(element);
    this.length = this.storage.length;
  }
  toArray () {
    return this.storage;
  }
  at (index) {
    return this.storage[index];
  }
  sort (indexes) {
    let sort = [];
    indexes.sort().forEach((index) => {
      if (this.storage[index] !== undefined) {
        sort.push(this.storage[index])
      }
    });
    sort.sort(this.comparator);
    indexes.forEach((index, val) => {
      if (this.storage[index] !== undefined) {
        this.storage[index] = sort[val]
      }
    });
  }
  setComparator (comparator) {
    this.comparator = comparator;
  }
}

module.exports = Sorter;