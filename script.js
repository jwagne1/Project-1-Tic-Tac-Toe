console.log('Here!');

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

let player = 1;
function inputCell2(){
    if(player === 1){
        cell2.innerHTML = 'X';
        player = 0;
        message.innerHTML = 'Player 2, your turn.'
    }else{
        cell2.innerHTML = 'O';
        player = 1;
        message.innerHTML = 'Player 1, your turn.'
    }
}
function inputCell3(){
    if(player === 1){
        cell3.innerHTML = 'X';
        player = 0;      
        message.innerHTML = 'Player 2, your turn.'  
    }else{
        cell3.innerHTML = 'O';
        player = 1;
        message.innerHTML = 'Player 1, your turn.'
    }
}
function inputCell4(){
    if(player === 1){
        cell4.innerHTML = 'X';
        player = 0;
        message.innerHTML = 'Player 2, your turn.'
    }else{
        cell4.innerHTML = 'O';
        player = 1;
        message.innerHTML = 'Player 1, your turn.'
    }
}
function inputCell7(){
    if(player === 1){
        cell7.innerHTML = 'X';
        player = 0;
        message.innerHTML = 'Player 2, your turn.'
    }else{
        cell7.innerHTML = 'O';
        player = 1;
        message.innerHTML = 'Player 1, your turn.'
    }
}
function inputCell8(){
    if(player === 1){
        cell8.innerHTML = 'X';
        player = 0;
        message.innerHTML = 'Player 2, your turn.'
    }else{
        cell8.innerHTML = 'O';
        player = 1;
        message.innerHTML = 'Player 1, your turn.'
    }
}
function inputCell9(){
    if(player === 1){
        cell9.innerHTML = 'X';
        player = 0;
        message.innerHTML = 'Player 2, your turn.'        
    }else{
        cell9.innerHTML = 'O';
        player = 1;
        message.innerHTML = 'Player 1, your turn.'
    }
}
function inputCell12(){
    if(player === 1){
        cell12.innerHTML = 'X';
        player = 0;
        message.innerHTML = 'Player 2, your turn.'
    }else{
        cell12.innerHTML = 'O';
        player = 1;
        message.innerHTML = 'Player 1, your turn.'
    }
}
function inputCell13(){
    if(player === 1){
        cell13.innerHTML = 'X';
        player = 0;
        message.innerHTML = 'Player 2, your turn.'
    }else{
        cell13.innerHTML = 'O';
        player = 1;
        message.innerHTML = 'Player 1, your turn.'
    }
}
function inputCell14(){
    if(player === 1){
        cell14.innerHTML = 'X';
        player = 0;
        message.innerHTML = 'Player 2, your turn.'
    }else{
        cell14.innerHTML = 'O';
        player = 1;
        message.innerHTML = 'Player 1, your turn.'
    }
}

// function winner() {
//     if(cell2.innerHTML === 'X' && cell3.innerHTML === 'X'&& cell4.innerHTML === 'X'){
//     console.log("Player 1 wins");
//     }
// }
// winner();
// body.onclick = e => {
//     console.log(e.target.id);
// }


// function player1(){
// const xCharacter = document.createElement('p');
// xCharacter.setAttribute('id','xLetter');
// xCharacter.innerText = 'X';
// cell2.appendChild(xCharacter);
// }
// const grid = document.querySelectorAll('.grid');

// function player2(){
//     const oCharacter = document.createElement('p');
//     oCharacter.setAttribute('id','oLetter');
//     oCharacter.innerText = 'O';
//     cell3.appendChild(oCharacter);
//     }
    
// body.onclick = e => {
//    return e.target.id;  // to get the element
// //     // console.log(e.target.class);  // to get the element tag name alone




