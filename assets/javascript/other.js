function createRectangles() {
  if(tick % 10 == 0) {
    if (rectangleArray.length < 5) {
      rectangleArray.push({
        x: rectangle.x + dx,
        y: 0,
        speed: 2+Math.random()*3,
        width: 80,
        height: 200,
        colour: 'blue',
      });
    }
  }
}

function updateRectangles() {
  for(let i in rectangleArray) {
    let rectangle = rectangleArray[i];
    rectangle.y += rectangle.speed;
  }
}

function killRectangles(currentAnimation) {
  for(let i in rectangleArray) {
    let rectangle = rectangleArray[i];
    if (rectangle.y > canvas.height) {
      rectangle.y = 0;
      cancelAnimationFrame(currentAnimation);
    }
  }
}

function drawRectangles() {
  let ctx = canvas.getContext('2d');
  ctx.fillStyle = 'blue';
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for(let i in rectangleArray) {
    let rectangle = rectangleArray[i];
    ctx.beginPath();
    ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    ctx.closePath();
    ctx.fillStyle = rectangle.colour;
    ctx.fill();
  }
}

let canvas = document.getElementById('canvas');
let rectangleArray = [];
let tick = 0;
let dx = 150;
let x = 0;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

export default function rectangles() {
  let currentAnimation = requestAnimFrame(rectangles)
  createRectangles();
  updateRectangles();
  drawRectangles();
  killRectangles();
}
