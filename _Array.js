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
 * Insert item to Array at the given index
 * @param {Array} array
 * @param {Number} index
 * @param {*} value
 */
export function insertAt(array, index, value) {
  array.splice(index, 0, value);
}

/**
 * Remove item from Array at the given index
 * @param {Array} array
 * @param {Number} index
 */
export function removeAt(array, index) {
  array.splice(index, 1);
}

export default {
  move, insertAt, removeAt
}