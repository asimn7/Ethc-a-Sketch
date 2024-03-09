let color='black';
let click=true;
function boardSize(size){
    let board=document.querySelector('.board');
    let squares=document.querySelectorAll('.board div');
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
    if (click){
        if(input>1 && input<100){
            boardSize(input);
        }
        else{
            console.log("error, too many squares");
        }
    }
}

function colorSquare(){
    if(click){
        if(color==='random'){
       this.style.backgroundColor=`hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else{
        this.style.backgroundColor=color;
    }
}
}

function changeColor(choice){
    color=choice;
}

function resetSketchpad(){
    let board=document.querySelector('.board');
    let squares=document.querySelectorAll('.board div');
    squares.forEach((div)=>div.style.backgroundColor='white');
    }


document.querySelector("body").addEventListener("click",(e)=>{
    const mode=document.querySelector(".mode");
if(e.target.tagName != 'BUTTON'){
    click = !click;
if(click){
    mode.textContent="Mode: Coloring";

}
else{
    mode.textContent="Mode: Not Coloring"
}
mode.style.fontSize="20px";
mode.style.fontStyle="italic";
}
});