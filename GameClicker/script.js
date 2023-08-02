let hitScore;
let gameObject = document.querySelector('.game-object');
let startButton = document.querySelector('button');
let gameArea = document.querySelector('.game-area')
startButton.innerText = "Start";
let soundWin = new Audio('sounds/win.wav');
let soundLose = new Audio('sounds/lose.mp3');
let soundGameOver = new Audio('sounds/game-over.wav');


function startGame() {
    hitScore = 0;
    gameObject.classList.add('move')
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
        soundLose.currentTime = 0;
        soundLose.play();
        increaseObject();
    }
    if (hitScore <= 0) {
        finishGame()
    }
}

function finishGame(){
    gameObject.classList.remove('move')
    startButton.innerText = "Start"
    soundGameOver.currentTime =0;
    soundGameOver.play();
    setTimeout(() =>
        alert("GAME OVER!"), 100 )

}

function hit() {
    hitScore++;
    document.title = `Score ${hitScore}`;
    gameObject.classList.remove('move')
    void gameObject.offsetWidth // MAGIC
    gameObject.classList.add('move')
    setRandomColor();
    setRandomPosition();
    decreaseObject();
    soundWin.currentTime = 0;
    soundWin.play();
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
    gameObject.style.left = Math.random() * maxWidth + 'px';
}

function decreaseObject() {
    gameObject.style.width = gameObject.offsetWidth * 0.9 + 'px';
}

function increaseObject() {
    gameObject.style.width = gameObject.offsetWidth * 1.1 + 'px';
}
