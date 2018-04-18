function createSquares() {
  if (squareArray.length < 5 && arrayIsFilled === false) {
    squareArray.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      width: 100,
      height: 100,
      rotateAngle: 0,
      color: 'blue',
    });
    if (squareArray.length === 5) {
      arrayIsFilled = true
    }
  }
}

function updateSquares() {
  for(let i in squareArray) {
    let square = squareArray[i];
    if (square.rotateAngle < 90) {
      square.rotateAngle += 1
    }
  }
}

function killSquares(currentAnimation) {
  let ctx = canvas.getContext('2d');
  if (squareArray.length > 0) {
    for(let i in squareArray) {
      let square = squareArray[i];
      if (square) {
        if (square.rotateAngle >= 90) {
          window.setTimeout( () => {
            cancelAnimationFrame(currentAnimation)
            ctx.clearRect(0, 0, canvas.width, canvas.height)
          }, 1000
        )
          squareArray = []
          arrayIsFilled = false
        }
      }
    }
  }
}

function drawSquares() {
  let ctx = canvas.getContext('2d');
  ctx.fillStyle = 'blue';
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for(let i in squareArray) {
    let square = squareArray[i];
    ctx.beginPath();
    ctx.fillRect(square.x, square.y, square.width, square.height);
    ctx.closePath();
    ctx.rotate(square.rotateAngle * Math.PI / 180)
    ctx.fill();
  }
}

let canvas = document.getElementById('third-canvas');
let squareArray = [];
let tick = 0;
let dx = 150;
let x = 0;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let arrayIsFilled = false;

export default function squares() {
  let currentAnimation = requestAnimFrame(squares)
  createSquares();
  updateSquares();
  drawSquares();
  killSquares(currentAnimation);
}
