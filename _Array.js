/**
 * Moves item in Array from one position to another
 * @param {Array} array
 * @param {Number} from
 * @param {Number} to
 */
export function move(array, from, to) {
  array.splice(to, 0, array.splice(from, 1)[0]);
}

/**
 * Moves multiple items in Array from one position to another
 * @param {Array} array 
 * @param {Number} start 
 * @param {Number} length 
 * @param {Number} to 
 */
export function moveMany(array, start, length, to) {
  array.splice(to, 0, ...array.splice(start, length));
}

/**
 * Insert item to Array at the given index
 * @param {Array} array
 * @param {Number} index
 * @param {*} value
 */
export function insertAt(array, index, value) {
  array.splice(index, 0, value);
}

/**
 * Insert multiple items to Array at the given index
 * @param {Array} array 
 * @param {Number} index 
 * @param  {...any} values 
 */
export function insertManyAt(array, index, ...values) {
  array.splice(index, 0, ...values);
}

/**
 * Remove item from Array at the given index
 * @param {Array} array
 * @param {Number} index
 */
export function removeAt(array, index) {
  array.splice(index, 1);
}

/**
 * Remove multiple items from Array starting at the given index
 * @param {Array} array 
 * @param {Number} index
 * @param {Number} length
 */
export function removeManyAt(array, index, length) {
  array.splice(index, length);
}

/**
 * Find the last index that matches the given predicate
 * @param {Array} array 
 * @param {Function} predicate 
 */
export function findLastIndex(array, predicate) {
  let idx = [...array].reverse().findIndex(predicate);
  return idx === -1 ? idx : array.length - 1 - idx;
}

/**
 * Combines arrays while removing duplicates
 * @param  {...Array} arrays 
 */
export function merge(...arrays) {
  return [...new Set([].concat(...arrays))]
}

/**
 * Returns values that are in both arrays
 * @param {Array} array1 
 * @param {Array} array2 
 */
export function same(array1, array2) {
  return array1.filter(function(value) {
    return array2.includes(value)
  }) 
}

/**
 * Returns values in array1 that are not in array2
 * @param {Array} array1
 * @param {Array} array2
 */
export function diff(array1, array2) {
  return array1.filter(function(value) {
    return !array2.includes(value)
  })
}

export default {
  move, moveMany, insertAt, insertManyAt, removeAt, removeManyAt, findLastIndex, merge, same, diff
}