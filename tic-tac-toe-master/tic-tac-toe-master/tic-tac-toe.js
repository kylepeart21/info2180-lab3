document.addEventListener('DOMCintentLoaded', function(){
    const squares = document.querySelectorAll('#game-board div');

        let currentPlayer = 'X';

        let gameState = Array(squares.length).fill(null);

        const winningCombinations = [
            [0, 1, 2], 
            [3, 4, 5], 
            [6, 7, 8], 
            [0, 3, 6], 
            [1, 4, 7], 
            [2, 5, 8], 
            [0, 4, 8], 
            [2, 4, 6]  
        ];

        let gameOver = false;

        function checkForWinner(){
            for(const combination of winningCombinations){
                const [a,b,c] = combination;
                if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]){
                    return gameState[a];
                }
            }
            return null;
        }

    function displayWinner(wwinner){
        const statusDiv = document.getElementById('status');
        statusDiv.textContent = 'COngratulations! ${winner} is the winner';
        statusDiv.classList.add('you-won');
    }
    
    squares.forEach(function(square){
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

        square.addEventListener('mouseout',function(){
            sqyare.classList.remove('hover');
        });
    });
});