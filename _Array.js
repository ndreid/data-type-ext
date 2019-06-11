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
  let idx = array.reverse().findIndex(predicate);
  return idx === -1 ? idx : array.length - 1 - idx;
}

export default {
  move, moveMany, insertAt, insertManyAt, removeAt, removeManyAt, findLastIndex
}