/* eslint-disable */ 

/**
 * Sorts an array using the merge sort algorithm, based on the provided compare function
 * or in ascending order if no compare function is provided. It is capable of sorting
 * numbers, strings, and objects. Extreme cases like sorting an array with only 
 * ascending or descending elements, handling equal elements, or very large input 
 * arrays must be properly addressed. Nested arrays and circular structures should be ignored.
 *
 * @param {Array} array - The array to be sorted.
 * @param {Function} [compare] - The compare function to use for custom sorting. Optional.
 * @return {Array} A sorted array based on the merge sort algorithm.
 * @example
 *    const numbers = [5, 3, 4, 1, 2];
 *    arrayMergeSort(numbers);
 *    // Returns [1, 2, 3, 4, 5]
 *
 *    const strings = ["apple", "banana", "grape", "orange", "mango"];
 *    arrayMergeSort(strings);
 *    // Returns ["apple", "banana", "grape", "mango", "orange"]
 *
 *    const objects = [
 *      { name: "Alice", age: 40 },
 *      { name: "Bob", age: 30 },
 *      { name: "Carol", age: 25 },
 *    ];
 *    arrayMergeSort(objects, (a, b) => a.age - b.age);
 *    // Returns [{ name: "Carol", age: 25 }, { name: "Bob", age: 30 }, { name: "Alice", age: 40 }]
 */
function arrayMergeSort(array, compare) {
    const defaultCompare = (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    };

    const merge = (left, right) => {
        const result = [];
        let i = 0;
        let j = 0;

        while (i < left.length && j < right.length) {
            const comparison = compare ? compare(left[i], right[j]) : defaultCompare(left[i], right[j]);
            if (comparison <= 0) {
                result.push(left[i++]);
            } else {
                result.push(right[j++]);
            }
        }

        while (i < left.length) result.push(left[i++]);
        while (j < right.length) result.push(right[j++]);

        return result;
    };

    const mergeSort = (array) => {
        if (array.length <= 1) return array;

        const middle = Math.floor(array.length / 2);
        const left = mergeSort(array.slice(0, middle));
        const right = mergeSort(array.slice(middle));

        return merge(left, right);
    };

    return mergeSort(array);
}

module.exports = {
    arrayMergeSort
};