let hitScore;
let gameObject = document.querySelector('.game-object');
let startButton = document.querySelector('button');
let gameArea = document.querySelector('.game-area')
startButton.innerText = "Start";
let soundWin = new Audio('sounds/win.wav');
let soundLose = new Audio('sounds/lose.mp3');
let soundGameOver = new Audio('sounds/game-over.wav');
let soundGameWin = new Audio('sounds/game-win.wav');
let score = document.querySelector('.score');
let youWin = document.querySelector('.you-win');
let youLose = document.querySelector('.you-lose');



function startGame() {
    hitScore = 0;
    gameObject.classList.add('move')
    youLose.style.display = 'none';
    youWin.style.display = 'none';
    gameObject.style.width = 100 + "px";
    gameObject.style.animationDuration = 2 + "s";
    score.innerText = hitScore;
    if (startButton.textContent === "Start") {
        startButton.innerText = "Stop"
    } else {
        startButton.innerText = "Start"
        gameObject.classList.remove('move')
    }
}

function miss(event) {
    if (event.target.className === "game-area") {
        hitScore--;
        document.title = `Score ${hitScore}`;
        score.innerText = hitScore;
        soundLose.currentTime = 0;
        soundLose.play();
        increaseObject();
    }
    if (hitScore <= 0) {
        finishGameLose()
    }
}

function finishGameLose(){
    gameObject.classList.remove('move')
    startButton.innerText = "Start";
    youLose.style.display = 'block';
    soundGameOver.currentTime =0;
    soundGameOver.play();
}

function finishGameWin(){
    gameObject.classList.remove('move')
    startButton.innerText = "Start";
    youWin.style.display = 'block';
    soundGameWin.currentTime =0;
    soundGameWin.play();
}

function hit() {
    hitScore++;
    document.title = `Score ${hitScore}`;
    score.innerText = hitScore;
    gameObject.classList.remove('move')
    void gameObject.offsetWidth // MAGIC
    gameObject.classList.add('move')
    setRandomColor();
    setRandomPosition();
    decreaseObject();
    changeObjectSpeed()
    soundWin.currentTime = 0;
    soundWin.play();
    if (hitScore >= 7){
        finishGameWin();
    }
}

function setRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16 + 1)];
    }
    gameObject.style.background = color;
}

function setRandomPosition() {
    const maxWidth = gameArea.offsetWidth - gameObject.offsetWidth;
    gameObject.style.left = gameObject.offsetWidth + Math.random() * maxWidth / 2+ 'px';
}

function decreaseObject() {
    gameObject.style.width = gameObject.offsetWidth * 0.9 + 'px';
}

function increaseObject() {
    gameObject.style.width = gameObject.offsetWidth * 1.1 + 'px';
}

function changeObjectSpeed() {
    gameObject.style.animationDuration = 0.71 + Math.random() + 's';
}
