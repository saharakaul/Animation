//Draw Sunrise Assignment

//Set 
let cnv = document.getElementById('myCanvas');
let ctx = cnv.getContext('2d');
cnv.width = 400;
cnv.height = 400;

let cloudimg = document.getElementById('cloud');

//Drawing the sky = rectangle filled in with blue
ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, 400, 300);
//Green section
ctx.fillStyle = 'green';
ctx.fillRect(0, 300, 400, 100)
//Load image
ctx.drawImage(cloudimg, 125, 120);
ctx.drawImage(cloudimg, 150, 100);

//Drawing sunrise
ctx.lineWidth = 5
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(200, 300, 20, 0, Math.PI, 2*Math.PI, false);
ctx.fill();