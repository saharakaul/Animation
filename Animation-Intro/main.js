// Animation Intro

// Set  up Canvas and graphics context
let cnv = document.getElementById('myCanvas');
let ctx = cnv.getContext('2d');
cnv.width = 600;
cnv.height = 400;
//Global Variables
let rectX = 200;
let rectSize = 80
let rectBlue = 255;
rectRed = 0;

let frameCount = 0;
//Main Program Loop (60 FPS)
requestAnimationFrame(loop);

function loop() {
    //Update Variables
    frameCount ++;
    
    //rectX += Math.random() * 10 - 5;
    if (rectBlue>0) {
        rectX += 1;
        rectSize += 0.1;
        rectBlue--;
        rectRed ++;
    }
    
    //Draw Background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    //Draw a Square
    ctx.fillStyle = "rgb(" + rectRed +", 0, " + rectBlue + ")";
    ctx.fillRect(rectX, 150, rectSize, rectSize);
    requestAnimationFrame(loop);

}