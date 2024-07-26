const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;
    
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    
    const directions = [
        [1, 0],  // down
        [-1, 0], // up
        [0, 1],  // right
        [0, -1]  // left
    ];
    
    function dfs(row, col) {
        // Mark this cell as visited
        visited[row][col] = true;
        
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            
            if (newRow >= 0 && newRow < rows &&
                newCol >= 0 && newCol < cols &&
                !visited[newRow][newCol] &&
                grid[newRow][newCol] === 'L') {
                dfs(newRow, newCol);
            }
        }
    }
    
    let islandCount = 0;
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 'L' && !visited[i][j]) {
                dfs(i, j);
                islandCount++;
            }
        }
    }
    
    return islandCount;
};

module.exports = getTotalIsles;