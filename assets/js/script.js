const can = document.getElementById('can');
const ctx = can.getContext('2d');
can.width = window.innerWidth;
can.height = window.innerHeight;
const ballSpeed = 8;
const ball = { x: can.width/2, y: can.height/2 };
const vel = { x: ballSpeed, y: ballSpeed };
let panel1 = can.height/2;
let panel2 = can.height/2;
const keys = {};
let score1 = 0;
let score2 = 0;

window.addEventListener('keydown', (e) => {
    keys[e.code] = true;
});
window.addEventListener('keyup', (e) => {
    keys[e.code] = false;
});

function mainloop() {
    draw();
    gameloop();
    requestAnimationFrame(mainloop);
}

mainloop();
function draw() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, can.width, can.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(10, panel1-50, 10, 100);
    ctx.fillRect(can.width-20, panel2-50, 10, 100);
    ctx.fillRect(ball.x-5, ball.y-5, 10, 10);
    ctx.font = '30px Arial';
    ctx.fillText(score1, 100, 100);
    ctx.fillText(score2, can.width-100, 100);
}
function gameloop () {
    ball.x += vel.x;
    ball.y += vel.y;
    if (ball.y < 0 || ball.y > can.height) {
        vel.y *= -1;
    }
    if (ball.x < 0) {
        score2++;
        vel.x = ballSpeed*0.8;
        vel.y = ballSpeed*0.8;
        ball.x = can.width/2;
        ball.y = can.height/2;
    }
    if (ball.x > can.width) {
        score1++;
        vel.x = -ballSpeed*0.8;
        vel.y = ballSpeed*0.8;
        ball.x = can.width/2;
        ball.y = can.height/2;
    }
    if (ball.x < 20 && ball.y > panel1-50 && ball.y < panel1+50) {
        vel.x = ballSpeed;
        vel.x *= (Math.random() * 0.6)+0.8              ;
        vel.y *= (Math.random() * 0.6)+0.7;
        ball.x = 20;
    }
    if (ball.x > can.width-20 && ball.y > panel2-50 && ball.y < panel2+50) {
        ball.x = can.width-20;
        vel.x *= (Math.random() * 0.6)+0.8;
        vel.y *= (Math.random() * 0.6)+0.7;
        vel.x = -ballSpeed;
    }
    if (keys['KeyW'] && panel1 > 50) {
        panel1 -= 6;
    }
    if (keys['KeyS'] && panel1 < can.height-50) {
        panel1 += 6;
    }
    if (keys['ArrowUp'] && panel2 > 50) {
        panel2 -= 6;
    }
    if (keys['ArrowDown'] && panel2 < can.height-50) {
        panel2 += 6;
    }
}