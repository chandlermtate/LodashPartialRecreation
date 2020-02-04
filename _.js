let _ = {
  // Clamp Method
  clamp(num, lower, upper) {
    let lowerClampedValue = Math.max(num, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  // inRange Method
  inRange(num, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    };
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    let isInRange = start <= num && num < end;
    return isInRange;
  },
  // Words Method
  words(str) {
    let words = str.split(' ');
    return words;
  },
  // Pad Method
  pad(str, length) {
    if (str.length >= length) {
      return str;
    }
    let startPadding = Math.floor((length - str.length) / 2); // 1
    let endPadding = length - str.length - startPadding; // 2
    let paddedString = ' '.repeat(startPadding) + str + ' '.repeat(endPadding);
    return paddedString;
  },
  // Has Method
  has(object, key) {
    let hasValue = object[key];
    if (hasValue != undefined) {
      return true;
    } else {
      return false;
    };
  },
  // Invert Method
  invert(object) {
    let invertedObject = {};
    for (let prop in object) {
      let originalValue = object[prop];
      invertedObject = {originalValue : prop};
    }
    return invertedObject;
  },
  // Find Key Method
  findKey(object, predicate) {
    for (let key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue === true) {
        return key;
      };
      return undefined;
    };
  },
  // Drop Method
  drop(arr, num) {
    if (num === undefined) {
      num = 1;
    };
    let droppedArray = arr.slice(num, arr.length);
    return droppedArray;
  },
  // dropWhile Method
  dropWhile(array, predicate) {
    const cb = (element, index) => {
      return !predicate(element, index, array);
    };
    let dropNumber = array.findIndex(cb);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  // Chunk Method
  chunk(array, size=1) {
    let arrayChunks = [];
    for (let i = 0; i < array.length; i += size) {
      let arrayChunk = array.slice(i, + i+size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
}




// Do not write or modify code below this line.
module.exports = _;