class Set {
  constructor(array) {
    this.array = array;
  }

  add(value) {
    if(!this.array.includes(value)) this.array.push(value);
  }

  remove(value) {
    if(this.array.includes(value)) {
      const idx = this.array.indexOf(value);
      this.array.splice(idx, 1);
    }
  }

  has(value) {
    return this.array.includes(value);
  }

  intersection(set) {
    let newSet = new Set([]);
    this.array.forEach(val => {
      if(set.array.includes(val)) newSet.add(val);
    });
    return newSet;
  }

  union(set) {
    let newSet = new Set([]);
    this.array.forEach(val => {
      if(!newSet.has(val)) newSet.add(val); 
    });
    set.array.forEach(val => {
      if(!newSet.has(val)) newSet.add(val);
    });
    return newSet;
  }

}

module.exports = { 
  Set 
};