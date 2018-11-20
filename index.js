fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (element in collection) {
        callback(collection[element]);
      }
      return collection;
    },

    map: function(collection, callback) {
      const newArray = []
      for (element in collection) {
        newArray.push(callback(collection[element]))
      }
      return newArray;
    },

    reduce: function(collection, callback, acc) {
      let endVal = 0;
      if (acc) {
        endVal = acc;
      }
      else {
        endVal = 0;
      }

      for (element in collection) {
        endVal = callback(endVal, collection[element], collection)
      }
      return endVal;
    },

    find: function(collection, predicate) {
      for (element in collection) {
        if (predicate(collection[element])) {
          return collection[element]
        }
      }
    },

    filter: function(collection, predicate) {
      let endArr = [];
      for (element in collection) {
        if (predicate(collection[element])) {
          endArr.push(collection[element])
        }
      }
      return endArr;
    },

    size: function(collection) {
      let index = 0;
      for (element in collection) {
        index++;
      }
      return index;
    },

    first: function(collection, n) {
      const newArr = [];
      if (n) {
        for (let i = 0; i < n; i++) {
          newArr.push(collection[i]);
        }
        return newArr;
      } else {
        return collection[0];
      }
    },

    last: function(array, n) {
      const newArr = [];
      if (n) {
        for (let i = array.length - n; i < array.length; i++) {
          newArr.push(array[i]);
        }
        return newArr;
      } else {
        return array[array.length - 1];
      }
    },

    compact: function(array) {
      const newArr = [];
      for (element of array) {
        if (element) {
          newArr.push(element)
        }
      }
      return newArr;
    },

    sortBy: function(array, callback) {
      const newArray = [];
      for (value of array) {
        newArray.push(value);
      }
      return newArray.sort(function(a, b){
        return callback(a) - callback(b);
      })
    },

    // [1, [2, 3], [[4, 5], 6, [7, [8, 9]]]]
    flatten: function(array, shallow) {
      let newArray = [];
      for (element of array) {
        if (shallow) {
          newArray.push(element);
        } else {
          if (typeof element == 'object') {
            newArray =  newArray.concat(fi.flatten(element))
          } else {
            newArray.push(element);
          }
        }
      }
      console.log(newArray);
      return newArray;
    },

    uniq: function(array, isSorted, callback) {
      const newArray = [];

      for (element of array) {
        let unique = true;
        if (isSorted) {
          if (element === newArray[newArray.length-1]) {
            unique = false;
          }
        }
        else {
          for (item of newArray) {
            if (callback) {
              if (callback(element) === callback(item)) {
                unique = false;
              }
            }
            else {
              if (element === item) {
                unique = false;
              }
            }
          }
        }
        if (unique) {
          newArray.push(element);
        }
      }
      return newArray;
    },

    keys: function(object) {
      const newArray = [];
      for (element in object) {
        newArray.push(element)
      }
      return newArray;
    },

    values: function(object) {
      const newArray = [];
      for (element in object) {
        newArray.push(object[element])
      }
      return newArray;
    },

    functions: function(object) {
      const newArray = [];
      for (element in object) {
        if (typeof object[element] == 'function') {
          newArray.push(element)
        }
      }
      return newArray.sort();
    },

    giveMeMore: function() {
      return true;
    }

  }
})()

fi.libraryMethod()
