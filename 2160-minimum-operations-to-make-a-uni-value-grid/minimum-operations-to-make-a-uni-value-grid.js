/**
 * 2033. Minimum Operations to Make a Uni-Value Grid
 * Medium
 *
 * Idea:
 * 1. Flatten grid into one array.
 * 2. Check if all numbers have same remainder when divided by x.
 *    If not, impossible => return -1
 * 3. Sort array.
 * 4. Best target is median (minimizes total moves).
 * 5. Count operations = sum(abs(num - median) / x)
 *
 * Time: O(m*n log(m*n))
 * Space: O(m*n)
 */

var minOperations = function(grid, x) {
    let arr = [];

    // Flatten grid
    for (let row of grid) {
        for (let num of row) {
            arr.push(num);
        }
    }

    // Check possibility
    let rem = arr[0] % x;
    for (let num of arr) {
        if (num % x !== rem) return -1;
    }

    // Sort numbers
    arr.sort((a, b) => a - b);

    // Median target
    let median = arr[Math.floor(arr.length / 2)];

    // Count operations
    let ops = 0;
    for (let num of arr) {
        ops += Math.abs(num - median) / x;
    }

    return ops;
};