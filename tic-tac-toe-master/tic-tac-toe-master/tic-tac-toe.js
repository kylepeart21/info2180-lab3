document.addEventListener('DOMCintentLoaded', function(){
    const squares = document.querySelectorAll('#game-board div');

        let currentPlayer = 'X';

        let gameState = Array(squares.length).fill(null);
    squares.forEach(function(square){
        square.classList.add('square');

        square.addEventListener('click',function(){
            if(!gameState[index]){
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                gameState[index] = currentPlayer;
                currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
            }
        });

        square.addEventListener('mouseout',function(){
            sqyare.classList.remove('hover');
        });
    });
});