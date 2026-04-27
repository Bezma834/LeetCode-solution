/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // Directions: [dx, dy]
    const dirs = {
        1: [[0, -1], [0, 1]],   // left, right
        2: [[-1, 0], [1, 0]],   // up, down
        3: [[0, -1], [1, 0]],   // left, down
        4: [[0, 1], [1, 0]],    // right, down
        5: [[0, -1], [-1, 0]],  // left, up
        6: [[0, 1], [-1, 0]]    // right, up
    };

    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    const queue = [[0, 0]];
    visited[0][0] = true;

    while (queue.length > 0) {
        const [x, y] = queue.shift();

        if (x === m - 1 && y === n - 1) return true;

        for (let [dx, dy] of dirs[grid[x][y]]) {
            const nx = x + dx;
            const ny = y + dy;

            if (
                nx >= 0 && ny >= 0 &&
                nx < m && ny < n &&
                !visited[nx][ny]
            ) {
                // Check if next cell connects back
                for (let [rdx, rdy] of dirs[grid[nx][ny]]) {
                    if (nx + rdx === x && ny + rdy === y) {
                        visited[nx][ny] = true;
                        queue.push([nx, ny]);
                        break;
                    }
                }
            }
        }
    }

    return false;
};