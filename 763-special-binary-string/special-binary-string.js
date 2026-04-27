/**
 * 761. Special Binary String
 * Return lexicographically largest string after swaps
 * @param {string} s
 * @return {string}
 */
var makeLargestSpecial = function (s) {
    // Base case
    if (s.length <= 2) return s;

    let count = 0;
    let start = 0;
    let parts = [];

    for (let i = 0; i < s.length; i++) {
        count += s[i] === '1' ? 1 : -1;

        // Found one complete special substring
        if (count === 0) {
            // Recursively solve inside substring
            let inner = s.substring(start + 1, i);
            let largestInner = makeLargestSpecial(inner);

            parts.push("1" + largestInner + "0");
            start = i + 1;
        }
    }

    // Sort descending lexicographically
    parts.sort((a, b) => b.localeCompare(a));

    return parts.join('');
};
