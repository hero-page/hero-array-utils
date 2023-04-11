
                _This entire repository was created completely with **AI**, using the [hero-ai-package-creator](https://github.com/hero-page/hero-ai-package-creator), which is **open-source**, uses **GPT-4**, and is written & maintained by [**Sam Chahine**](https://hero.page/samir)_ ❣️🧞‍♀️ 



                # hero-array-utils

A collection of functions to enhance array manipulation, such as sorting, filtering, mapping, and reducing.

## Installation

```
npm install hero-array-utils
```

## Functions

### `arrayFilter()`

**Summary:** Filters an array based on the provided callback function. The callback function should return a boolean value. It will keep elements in the final output array when the callback function returns 'true' and remove them when it returns 'false'. The function handles numbers, strings, and objects. Extreme cases like empty arrays and large input arrays must be handled. However, it does not handle circular structures or nested arrays beyond level 1.

**Usage:**

```javascript
const { arrayFilter } = require('hero-array-utils');

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = arrayFilter(numbers, (num) => num % 2 === 0);
console.log(evenNumbers);
// Output: [2, 4]
```

### `arrayMergeSort()`

**Summary:** Sorts an array, using the merge sort algorithm, based on the provided compare function or in ascending order if no compare function is provided. It is capable of sorting numbers, strings, and objects. Extreme cases like sorting an array with only ascending or descending elements, handling equal elements, or very large input arrays must be properly addressed. Nested arrays and circular structures should be ignored.

**Usage:**

```javascript
const { arrayMergeSort } = require('hero-array-utils');

const numbers = [5, 2, 9, 3, 7];
const sortedNumbers = arrayMergeSort(numbers);
console.log(sortedNumbers);
// Output: [2, 3, 5, 7, 9]

const strings = ['apple', 'orange', 'banana', 'kiwi'];
const sortedStrings = arrayMergeSort(strings);
console.log(sortedStrings);
// Output: ['apple', 'banana', 'kiwi', 'orange']
```

## Author

[Sam Chahine](https://github.com/kingmeers), at [Hero](https://hero.page/)
                

### Tests for arrayFilter

![arrayFilter](https://img.shields.io/badge/arrayFilter()-4%20passed%2C%200%20failed.-13b285)

### Tests for arrayMergeSort

![arrayMergeSort](https://img.shields.io/badge/arrayMergeSort()-5%20passed%2C%200%20failed.-13b285)