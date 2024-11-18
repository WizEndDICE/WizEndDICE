const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const stop = 0;
const playerImage = new Image();
playerImage.src = "pictures/shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 2
let frameY = 2
function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
//    ctx.fillRect(100,50,100,100);
    ctx.drawImage(playerImage,frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    if (frameX < 6) frameX++;
    else frameX = 0;
        if (frameY < 6) frameY++;
      else frameY = 6;
    requestAnimationFrame(animate);
}
if (stop == 0)
    animate()