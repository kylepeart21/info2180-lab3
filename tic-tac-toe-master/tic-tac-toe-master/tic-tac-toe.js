document.addEventListener('DOMCintentLoaded', function(){
    const squares = document.querySelectorAll('#game-board div');

    squares.forEach(function(square){
        square.classList.add('square');
    });
});