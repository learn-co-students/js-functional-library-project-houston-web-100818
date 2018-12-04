fi = {
  libraryMethod: function() {
    return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
  },

  each: function(collection, callback) {
    for (var key in collection) {
      var element = collection[key];
      callback(element, key, collection);
    }
    return collection;
  },

  map: function(collection, callback) {
    newArray = [];
    for (var key in collection) {
      var element = collection[key];
      someValue = callback(element, key, collection);
      newArray.push(someValue);
    }
    return newArray;
  },

  reduce: function(collection, callback, acc = 0) {
    for (var key in collection) {
      var element = collection[key];
      acc = callback(acc, element, collection);
    }
    return acc;
  },

  find: function(collection, predicate) {
    for (var key in collection) {
      var element = collection[key];
      if (predicate(element) === true) {
        return element;
      }
    }
  },

  filter: function(collection, predicate) {
    arr = [];
    for (var key in collection) {
      var element = collection[key];
      if (predicate(element) === true) {
        arr.push(element);
      }
    }
    return arr;
  },

  size: function(collection) {
    let value = 0;
    for (var key in collection) {
      value++;
    }
    return value;
  },

  first: function(array, n) {
    if (n) {
      return array.slice(0, n);
    }
    return array[0];
  },

  last: function(array, n) {
    if (n) {
      return array.slice(array.length - n, array.length);
    } else {
      return array[array.length - 1];
    }
  },

  // last: function(array, n) {
  //   let result = fi.first(array.slice().reverse(), n);
  //   if (n) result = result.reverse();
  //   return result;
  // }

  compact: function(array) {
    let newArr = [];
    let i = 0;
    for (i = 0; i < array.length; i++) {
      if (array[i]) {
        newArr.push(array[i]);
      }
    }
    return newArr;
  },

  sortBy: function(array, callback) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
      newArr.push(array[i]);
    }
    newArr.sort(function(a, b) {
      return callback(a) - callback(b);
    });
    return newArr;
  }
};
//fi.libraryMethod();
