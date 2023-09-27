let playerState = 'dead';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change' , function(e){
    playerState = e.target.value;
})
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image()
playerImage.src = "imgs/shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523; 

let gameFrame = 0;
const staggerFrames = 4;
const spriteAnimation = [];
const animationState = [
    {
        name: 'idle',
        frame: 7,
    },
    {
        name: 'jump',
        frame: 7,
    },
    {
        name: 'fall',
        frame: 7,
    },
    {
        name: 'run',
        frame: 9,
    },
    {
        name: 'dizzy',
        frame: 11,
    },
    {
        name: 'sit',
        frame: 5,
    },
    {
        name: 'roll',
        frame: 7,
    },
    {
        name: 'bit',
        frame: 7,
    },
    {
        name: 'dead',
        frame: 12,
    },
    {
        name: 'getHit',
        frame: 4,
    },
]
animationState.forEach((state,index) => {
    let frames = {
        loc: [],
    }
    for(let i = 0 ; i < state.frame ; i++){
        let positionX = i * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX , y:positionY});
    }
    spriteAnimation[state.name] = frames;
})
console.log(spriteAnimation);

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH , CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames)% spriteAnimation[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimation[playerState].loc[position].y;
    ctx.drawImage(playerImage ,frameX, frameY , spriteWidth, spriteHeight , 0 , 0 ,spriteWidth , spriteHeight )

    gameFrame++;
    requestAnimationFrame(animate)
};
animate();