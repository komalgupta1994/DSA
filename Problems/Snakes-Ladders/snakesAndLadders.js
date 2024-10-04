var snakesAndLadders = function(board) {
    const n = board.length;
    
    // Function to convert a square number to its row and column in the board
    function getCoordinates(square) {
        let row = Math.floor((square - 1) / n);
        let col = (square - 1) % n;
        if (row % 2 === 1) { // Odd row: reverse direction (right to left)
            col = n - 1 - col;
        }
        row = n - 1 - row; // Board rows are in reverse order
        return [row, col];
    }

    let visited = new Array(n * n + 1).fill(false);
    let queue = [[1, 0]]; // [current square, number of moves]
    visited[1] = true;

    while (queue.length > 0) {
        console.log('queue', [...queue]);
        let [currSquare, moves] = queue.shift();

        // If we reached the last square, return the number of moves
        if (currSquare === n * n) {
            return moves;
        }

        // Try all possible moves from 1 to 6
        for (let i = 1; i <= 6; i++) {
            let nextSquare = currSquare + i;
            
            if (nextSquare > n * n) break; // Don't go out of bounds

            let [row, col] = getCoordinates(nextSquare);

            // If there's a snake or ladder, move to its destination
            if (board[row][col] !== -1) {
                nextSquare = board[row][col];
            }
            
            
            // If we haven't visited this square yet, add it to the queue
            if (!visited[nextSquare]) {
                visited[nextSquare] = true;
                queue.push([nextSquare, moves + 1]);
            }
        }
    }

    // If we exhaust the queue without reaching the last square, return -1
    return -1;
};

const board =
[[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,15,-1,-1]]

// const board = [[-1,-1,-1],[-1,9,8],[-1,8,9]];

snakesAndLadders(board);