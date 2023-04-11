/* eslint-disable */ 


        const {arrayMergeSort} = require("../functions/arrayMergeSort"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for arrayMergeSort.
 */
function testArrayMergeSort() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "arrayMergeSort";

    try {
        const numbers = [5, 3, 4, 1, 2];
        const sortedNumbers = arrayMergeSort(numbers);
        if (JSON.stringify(sortedNumbers) === JSON.stringify([1, 2, 3, 4, 5])) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const strings = ["apple", "banana", "grape", "orange", "mango"];
        const sortedStrings = arrayMergeSort(strings);
        if (JSON.stringify(sortedStrings) === JSON.stringify(["apple", "banana", "grape", "mango", "orange"])) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const objects = [
            { name: "Alice", age: 40 },
            { name: "Bob", age: 30 },
            { name: "Carol", age: 25 },
        ];
        const sortedObjects = arrayMergeSort(objects, (a, b) => a.age - b.age);
        if (JSON.stringify(sortedObjects) === JSON.stringify([{ name: "Carol", age: 25 }, { name: "Bob", age: 30 }, { name: "Alice", age: 40 }])) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const largeArray = Array.from({ length: 10000 }, (_, i) => i).reverse();
        const sortedLargeArray = arrayMergeSort(largeArray);
        const expectedLargeArray = Array.from({ length: 10000 }, (_, i) => i);
        if (JSON.stringify(sortedLargeArray) === JSON.stringify(expectedLargeArray)) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const arrayWithDuplicates = [5, 3, 1, 3, 5, 1];
        const sortedArrayWithDuplicates = arrayMergeSort(arrayWithDuplicates);
        if (JSON.stringify(sortedArrayWithDuplicates) === JSON.stringify([1, 1, 3, 3, 5, 5])) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testArrayMergeSort
};