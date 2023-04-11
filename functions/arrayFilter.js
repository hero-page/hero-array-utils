/* eslint-disable */ 

/**
 * Filters an array based on the provided callback function. The callback
 * function should return a boolean value. It will keep elements in the final
 * output array when the callback function returns 'true' and remove them when
 * it returns 'false'.
 *
 * @param {Array} arr - The array to be filtered
 * @param {function} callback - The callback function to determine filter condition
 * @return {Array} The filtered array based on the callback function
 * @example
 * arrayFilter([1, 2, 3, 4, 5], (num) => num % 2 === 0); // [2, 4]
 */
function arrayFilter(arr, callback) {
    const filteredArray = [];

    for (const item of arr) {
        if (callback(item)) {
            filteredArray.push(item);
        }
    }

    return filteredArray;
}

module.exports = {
    arrayFilter,
};