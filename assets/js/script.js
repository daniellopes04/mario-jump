const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const score = document.querySelector('.score')
let gameOver = false

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const cloudsPosition = clouds.offsetLeft
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px`

        mario.src = './assets/images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
        gameOver = true
    }
}, 10)

document.addEventListener('keydown', (event) => {
    const keyCode = event.code;

    if (keyCode === 'Space') {
        mario.classList.add('jump');
    
        setTimeout(() => {
            mario.classList.remove('jump');

            if (!gameOver)
                score.innerHTML = +score.innerHTML + 1
        }, 600);
    }
})