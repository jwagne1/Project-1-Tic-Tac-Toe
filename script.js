//In section below I selected the elements using DOM to add event listeners when each square is clicked.
const body = document.querySelector("body");

const message = document.querySelector('#message');

const cell2 = document.querySelector('#cell2');
cell2.addEventListener('click', inputCell2);

const cell3 = document.querySelector('#cell3');
cell3.addEventListener('click', inputCell3);

const cell4 = document.querySelector('#cell4');
cell4.addEventListener('click', inputCell4);

const cell7 = document.querySelector('#cell7');
cell7.addEventListener('click', inputCell7);

const cell8 = document.querySelector('#cell8');
cell8.addEventListener('click', inputCell8);

const cell9 = document.querySelector('#cell9');
cell9.addEventListener('click', inputCell9);

const cell12 = document.querySelector('#cell12');
cell12.addEventListener('click', inputCell12);

const cell13 = document.querySelector('#cell13');
cell13.addEventListener('click', inputCell13);

const cell14 = document.querySelector('#cell14');
cell14.addEventListener('click', inputCell14);

const newGameButton = document.querySelector('#new-game');
newGameButton.addEventListener('click',clearSquare);

const grid = document.querySelectorAll('.square');

//Function below is used to clear the game when newGameButton is clicked. 
function clearSquare (){
    for (let i=0; i <grid.length; i++){
        grid[i].innerHTML='';
    }
    message.innerHTML = 'Player 1, click on a square to start';
    message.style.color = '#000000';
    message.style.backgroundColor = 'transparent';
    player = 1; 
    squareTaken = 0; 
    whoWon = 0;
      
}
//Function below is used to warn a player that a square has already been selected.
let squareTaken = 0;
function squaresFull (){
    squareTaken = squareTaken + 1;
}
//The functions below are used to evaluate if a winner has been determined yet, and fire function: squareTaken in case the square is full. Also to fire function: winner, so that the game ends once a player has won.
let player = 1;
function inputCell2(){
    if(whoWon !== 0){
        finalMessage();
    }else{
        if(cell2.innerHTML === 'X' || cell2.innerHTML === 'O'){
        message.innerHTML = "This square is taken, select an empty one";
        }else{
            if(player === 1){
            cell2.innerHTML = 'X';
            player = 0;
            message.innerHTML = 'Player 2, your turn.'
            }else{
            cell2.innerHTML = 'O';
            player = 1;
            message.innerHTML = 'Player 1, your turn.'
            } squaresFull();
        } winner();    
    }
}
function inputCell3(){    
    if(whoWon !== 0){
        finalMessage();
    }else{
        if(cell3.innerHTML === 'X' || cell3.innerHTML === 'O'){
        message.innerHTML = "This square is taken, select an empty one";
        }else{
            if(player === 1){
            cell3.innerHTML = 'X';
            player = 0;      
            message.innerHTML = 'Player 2, your turn.'  
            }else{
            cell3.innerHTML = 'O';
            player = 1;
            message.innerHTML = 'Player 1, your turn.'
            } squaresFull();
        } winner();  
    }
}
function inputCell4(){
    if(whoWon !== 0){
        finalMessage();
    }else{
        if(cell4.innerHTML === 'X' || cell4.innerHTML === 'O'){
        message.innerHTML = "This square is taken, select an empty one";
        }else{
            if(player === 1){
            cell4.innerHTML = 'X';
            player = 0;
            message.innerHTML = 'Player 2, your turn.'
            }else{
            cell4.innerHTML = 'O';
            player = 1;
            message.innerHTML = 'Player 1, your turn.'
            } squaresFull();
        } winner();  
    }
}
function inputCell7(){    
    if(whoWon !== 0){
        finalMessage();
    }else{
        if(cell7.innerHTML === 'X' || cell7.innerHTML === 'O'){
        message.innerHTML = "This square is taken, select an empty one";
        }else{
            if(player === 1){
            cell7.innerHTML = 'X';
            player = 0;
            message.innerHTML = 'Player 2, your turn.'
            }else{
            cell7.innerHTML = 'O';
            player = 1;
            message.innerHTML = 'Player 1, your turn.'
            } squaresFull();
        } winner();  
    }
}
function inputCell8(){
    if(whoWon !== 0){
        finalMessage();
    }else{
        if(cell8.innerHTML === 'X' || cell8.innerHTML === 'O'){
        message.innerHTML = "This square is taken, select an empty one";
        }else{
            if(player === 1){
            cell8.innerHTML = 'X';
            player = 0;
            message.innerHTML = 'Player 2, your turn.'
            }else{
            cell8.innerHTML = 'O';
            player = 1;
            message.innerHTML = 'Player 1, your turn.'
            } squaresFull();
        } winner();  
    }
}
function inputCell9(){
    if(whoWon !== 0){
        finalMessage();
    }else{    
        if(cell9.innerHTML === 'X' || cell9.innerHTML === 'O'){
        message.innerHTML = "This square is taken, select an empty one";
        }else{
            if(player === 1){
            cell9.innerHTML = 'X';
            player = 0;
            message.innerHTML = 'Player 2, your turn.'        
            }else{
            cell9.innerHTML = 'O';
            player = 1;
            message.innerHTML = 'Player 1, your turn.'
            } squaresFull();
        } winner();  
    }
}
function inputCell12(){
    if(whoWon !== 0){
        finalMessage();
    }else{    
        if(cell12.innerHTML === 'X' || cell12.innerHTML === 'O'){
        message.innerHTML = "This square is taken, select an empty one";
        }else{
            if(player === 1){
            cell12.innerHTML = 'X';
            player = 0;
            message.innerHTML = 'Player 2, your turn.'
            }else{
            cell12.innerHTML = 'O';
            player = 1;
            message.innerHTML = 'Player 1, your turn.'
            } squaresFull();
        } winner(); 
    }
}
function inputCell13(){    
    if(whoWon !== 0){
        finalMessage();
    }else{
        if(cell13.innerHTML === 'X' || cell13.innerHTML === 'O'){
        message.innerHTML = "This square is taken, select an empty one";
        }else{
            if(player === 1){
            cell13.innerHTML = 'X';
            player = 0;
            message.innerHTML = 'Player 2, your turn.'
            }else{
            cell13.innerHTML = 'O';
            player = 1;
            message.innerHTML = 'Player 1, your turn.'
            } squaresFull();
        } winner();  
    }
}
//Function: whoWon, coded below, evaluates if winner has been determined and stops player from selecting a new cell in case there is a winner, firing function: finalMessage, which reminds players if there is a winner or game ended in tie.
function inputCell14(){    
    if(whoWon !== 0){
        finalMessage();
    }else{
        if(cell14.innerHTML === 'X' || cell14.innerHTML === 'O'){
        message.innerHTML = "This square is taken, select an empty one";
        }else{
            if(player === 1){
            cell14.innerHTML = 'X';
            player = 0;
            message.innerHTML = 'Player 2, your turn.'
            }else{
            cell14.innerHTML = 'O';
            player = 1;
            message.innerHTML = 'Player 1, your turn.'
            } squaresFull();
        } winner(); 
    }
}
//Function winner, coded below, evaluates all possible win scenarios and displays the winner.
let whoWon = 0;
function winner() {
    if (whoWon === 0){    
        if ((cell2.innerHTML === 'X' && 
        cell3.innerHTML === 'X' && 
        cell4.innerHTML === 'X') 
        || 
        (cell7.innerHTML === 'X' && 
        cell8.innerHTML === 'X' && 
        cell9.innerHTML === 'X') 
        || 
        (cell12.innerHTML === 'X' && 
        cell13.innerHTML === 'X' && 
        cell14.innerHTML === 'X') 
        ||
        (cell2.innerHTML === 'X' && 
        cell7.innerHTML === 'X' && 
        cell12.innerHTML === 'X') 
        ||
        (cell3.innerHTML === 'X' && 
        cell8.innerHTML === 'X' && 
        cell13.innerHTML === 'X') 
        ||
        (cell4.innerHTML === 'X' && 
        cell9.innerHTML === 'X' && 
        cell14.innerHTML === 'X') 
        ||
        (cell2.innerHTML === 'X' && 
        cell8.innerHTML === 'X' && 
        cell14.innerHTML === 'X') 
        ||
        (cell4.innerHTML === 'X' && 
        cell8.innerHTML === 'X' && 
        cell12.innerHTML === 'X'))
        {
            message.classList.add('winMessage');
            const winMessage = document.querySelector('.winMessage');
            winMessage.innerHTML = 'Player 1 wins!';
            winMessage.style.color = '#0000cd';
            winMessage.style.backgroundColor = '#ffd700';
            whoWon = 1;        
        } else if((cell2.innerHTML === 'O' && 
        cell3.innerHTML === 'O' && 
        cell4.innerHTML === 'O') 
        ||
        (cell7.innerHTML === 'O' && 
        cell8.innerHTML === 'O' && 
        cell9.innerHTML === 'O') 
        ||
        (cell12.innerHTML === 'O' && 
        cell13.innerHTML === 'O' && 
        cell14.innerHTML === 'O') 
        ||
        (cell2.innerHTML === 'O' && 
        cell7.innerHTML === 'O' && 
        cell12.innerHTML === 'O') 
        ||
        (cell3.innerHTML === 'O' && 
        cell8.innerHTML === 'O' && 
        cell13.innerHTML === 'O')
        ||
        (cell4.innerHTML === 'O' && 
        cell9.innerHTML === 'O' && 
        cell14.innerHTML === 'O')
        ||
        (cell2.innerHTML === 'O' && 
        cell8.innerHTML === 'O' && 
        cell14.innerHTML === 'O')
        ||
        (cell4.innerHTML === 'O' && 
        cell8.innerHTML === 'O' && 
        cell12.innerHTML === 'O'))
        {    
            message.classList.add('winMessage');
            const winMessage = document.querySelector('.winMessage');
            winMessage.innerHTML = 'Player 2 wins!';
            winMessage.style.color = '#0000cd';
            winMessage.style.backgroundColor = '#ffd700';
            whoWon = 2;
        } else if((squareTaken === 9) && (whoWon === 0)) {
            message.classList.add('winMessage');
            const winMessage = document.querySelector('.winMessage');
            winMessage.innerHTML = 'It\'s a tie! Want to play again?';
            winMessage.style.color = '#000000';
            winMessage.style.backgroundColor = '#c0c0c0';;           
        }
    } //console.log(whoWon);
} 
//Function below stops players from continuing to play by displaying who the winner is and asking player if they want to play again.
function finalMessage(){
    if(whoWon === 1){
        message.innerHTML = 'Player 1 won! Want to play again?';
    } else { if(whoWon === 2){
        message.innerHTML = 'Player 2 won! Want to play again?';
        }
    }
}
//Functions to add color when hovering with mouse and remove it when mouse is out of square and button.

cell2.addEventListener('mouseover', goldSquare);
cell2.addEventListener('mouseout', unColorSquare);
cell3.addEventListener('mouseover', greenSquare);
cell3.addEventListener('mouseout', unColorSquare);
cell4.addEventListener('mouseover', blueSquare);
cell4.addEventListener('mouseout', unColorSquare);
cell7.addEventListener('mouseover', greenSquare);
cell7.addEventListener('mouseout', unColorSquare);
cell8.addEventListener('mouseover', goldSquare);
cell8.addEventListener('mouseout', unColorSquare);
cell9.addEventListener('mouseover', redSquare);
cell9.addEventListener('mouseout', unColorSquare);
cell12.addEventListener('mouseover', blueSquare);
cell12.addEventListener('mouseout', unColorSquare);
cell13.addEventListener('mouseover', redSquare);
cell13.addEventListener('mouseout', unColorSquare);
cell14.addEventListener('mouseover', goldSquare);
cell14.addEventListener('mouseout', unColorSquare);

newGameButton.addEventListener('mouseover',greenSquare);
newGameButton.addEventListener('mouseout',function(e){
    e.target.style.backgroundColor = 'black'
});

function goldSquare (e){
    e.target.style.backgroundColor = '#ffdf00';
}
function greenSquare (e){
    e.target.style.backgroundColor = '#32cd32';
}
function blueSquare (e){
    e.target.style.backgroundColor = '#1e90ff';
}
function redSquare (e){
    e.target.style.backgroundColor = '#ff0000';
}
function unColorSquare (e){
    e.target.style.backgroundColor = 'transparent';
}
