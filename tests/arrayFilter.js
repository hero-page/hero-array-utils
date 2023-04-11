/* eslint-disable */ 


        const {arrayFilter} = require("../functions/arrayFilter"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}
/**
 * Test function for arrayFilter function.
 */
function testArrayFilter() {
    const name_of_function = "arrayFilter";
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;

    try {
        const input = [1, 2, 3, 4, 5];
        const output = arrayFilter(input, (num) => num % 2 === 0);
        const expectedOutput = [2, 4];

        if (JSON.stringify(output) === JSON.stringify(expectedOutput)) {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    try {
        const input = ["cat", "dog", "fish"];
        const output = arrayFilter(input, (str) => str.length > 3);
        const expectedOutput = ["fish"];

        if (JSON.stringify(output) === JSON.stringify(expectedOutput)) {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    try {
        const input = [];
        const output = arrayFilter(input, (num) => num % 2 === 0);
        const expectedOutput = [];

        if (JSON.stringify(output) === JSON.stringify(expectedOutput)) {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    try {
        const input = [
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" },
            { id: 3, name: "Charlie" },
        ];
        const output = arrayFilter(input, (obj) => obj.id % 2 === 0);
        const expectedOutput = [{ id: 2, name: "Bob" }];

        if (JSON.stringify(output) === JSON.stringify(expectedOutput)) {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    addToReadme(
        generateTestBadge(
            name_of_function,
            number_of_tests_passed,
            number_of_tests_failed
        )
    );
}

module.exports = {
    testArrayFilter,
};
