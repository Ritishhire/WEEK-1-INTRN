// Function declaration method
function filterEvenNumbers(arr) {
    return arr.filter(function(num) {
        return num % 2 === 0;
    });
}

// Arrow function method
const filterEvenNumbersArrow = (arr) => arr.filter(num => num % 2 === 0);

// Example usage
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNumbers(numbers)); // Output: [2, 4, 6, 8, 10]
console.log(filterEvenNumbersArrow(numbers)); // Output: [2, 4, 6, 8, 10]
