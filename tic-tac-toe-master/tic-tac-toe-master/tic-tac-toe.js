document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#game-board div');
    const statusDiv = document.getElementById('status');
    const newGameButton = document.getElementById('new-game');

    let currentPlayer = 'X';
    let gameState = Array(squares.length).fill(null);
    let gameOver = false;

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    function checkForWinner() {
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a];
            }
        }
        return null;
    }

    function displayWinner(winner) {
        statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
        statusDiv.classList.add('you-won');
    }

    squares.forEach(function(square, index) {
        square.classList.add('square');

        square.addEventListener('click', function() {
            if (gameOver || gameState[index]) return;

            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
            gameState[index] = currentPlayer;

            const winner = checkForWinner();
            if (winner) {
                gameOver = true;
                displayWinner(winner);
            } else {
                currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
            }
        });

        square.addEventListener('mouseover', function() {
            square.classList.add('hover');
        });
        square.addEventListener('mouseout', function() {
            square.classList.remove('hover');
        });
    });

    newGameButton.addEventListener('click', function() {
        gameState.fill(null);
        gameOver = false;
        currentPlayer = 'X';

        squares.forEach(function(square) {
            square.textContent = '';
            square.classList.remove('X', 'O');
        });

        statusDiv.textContent = 'Move your mouse over a square and click to play an X or an O.';
        statusDiv.classList.remove('you-won');
    });
});
