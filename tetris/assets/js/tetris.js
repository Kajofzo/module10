let canvas;
let ctx;
let gBArrayHeight = 20; // Height of the grid
let gBArrayWidth = 12; // Width of the grid
let startX = 4; // Starting X position for Tetromino
let startY = 0; // Starting Y position for Tetromino
let coordinateArray = [...Array(gBArrayHeight)].map(e => Array(gBArrayWidth).fill(0)); 
let curTetromino = [[1,0], [0,1], [1,1], [2,1]]; 

class Coordinates {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

document.addEventListener('DOMContentLoaded', SetupCanvas);

function CreateCoordArray(){
    let i = 0, j = 0;
    for(let y = 9; y <= 446; y += 23){
        for(let x = 11; x <= 264; x += 23){
            coordinateArray[i][j] = new Coordinates(x, y);
            i++;
        }
        j++;
        i = 0;
    }
}

function SetupCanvas(){
    canvas = document.getElementById('my-canvas');
    ctx = canvas.getContext('2d');
    canvas.width = 936;
    canvas.height = 956;

    ctx.scale(2, 2);

    ctx.fillStyle = 'white';    
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'black';
    ctx.strokeRect(8, 8, 280, 462); 

    CreateCoordArray();
    drawtetromino();
}

function drawtetromino(){
    for(let i = 0; i < curTetromino.length; i++){
    
    }
}