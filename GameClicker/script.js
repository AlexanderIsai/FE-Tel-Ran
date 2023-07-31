let hitScore;
let gameObject = document.querySelector('.game-object');
let startButton = document.querySelector('button');
let gameArea = document.querySelector('.game-area')
startButton.innerText = "Start"


function startGame(){
    hitScore = 0;
    gameObject.classList.add('move')
    if (startButton.textContent === "Start") {
        startButton.innerText = "Stop"
    } else {
        startButton.innerText = "Start"
        gameObject.classList.remove('move')

    }
}

function miss(event){
    if(event.target.className === "game-area")
    hitScore--;
    document.title = `Score ${hitScore}`;
    if (hitScore < 0){
        gameObject.classList.remove('move')
        startButton.innerText = "Start"
        alert("You are loser")
    }
}

function hit(){
    hitScore++;
    document.title = `Score ${hitScore}`;
    gameObject.classList.remove('move')
    void gameObject.offsetWidth // MAGIC
    gameObject.classList.add('move')
    gameObject.style.background = getRandomColor();
    let randomLeft = getRandomPosition();
    gameObject.style.left = randomLeft + 'px';
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomPosition() {
    const maxWidth = gameArea.offsetWidth - gameObject.offsetWidth; 
    return Math.floor(Math.random() * maxWidth);
}
