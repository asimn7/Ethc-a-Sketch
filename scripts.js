let color='hsl($(Math.random()*360),100%,50%)'
function boardSize(size){
    let board=document.querySelector('.board');
    let squares=document.querySelectorAll('.board .square');
    squares.forEach((div)=>div.remove());
board.style.gridTemplateColumns=`repeat(${size}, 1fr)`;
board.style.gridTemplateRows=`repeat(${size}, 1fr)`;

let amount=size*size;
for(let i=0;i<amount;i++){ 
let square=document.createElement('div'); //to create n div elements
square.addEventListener('mouseover',colorSquare);
square.style.background='white';
board.insertAdjacentElement("beforeend", square);
}
}

boardSize(16);

function changeSize(input){
    if(input>1 && input<100){
        boardSize(input);
    }
    else{
        console.log("error, too many squares");
    }
}

function colorSquare(){
    if(color==='random'){
       this.style.backgroundColor=`hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else{
        this.style.backgroundColor=color;
    }
}
function changeColor(choice){
    color=choice;
}
