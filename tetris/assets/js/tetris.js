let canvas;
let ctx;
let gBArrayHeight = 20; // Height of the grid
let gBArrayWidth = 12; // Width of the grid
let startX = 4; // Starting X position for Tetromino
let startY = 0; // Starting Y position for Tetromino
let coordinateArray =[...Array(gBArrayHeight)].map(e => Array(gBArrayWidth).fill(0)); // Array that contains the grid