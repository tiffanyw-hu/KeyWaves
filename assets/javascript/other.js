function createRectangles() {
  if(tick % 10 == 0 && tick < 60) {
    if (rectangleArray.length < 5 && arrayIsFilled === false) {
      let startingX = 50
      if (rectangleArray.length >= 1) {
        startingX = rectangleArray[rectangleArray.length - 1]['x'] + 100
      }
      console.log(rectangleArray)
      console.log(startingX)
      rectangleArray.push({
        x: startingX,
        y: 0,
        speed: 10,
        width: 80,
        height: 200,
        colour: 'blue',
      });
      if (rectangleArray.length === 5) {
        arrayIsFilled = true
      }
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
  if (rectangleArray.length > 0) {
    for(let i in rectangleArray) {
      let rectangle = rectangleArray[i];
      if (rectangle) {
        if (rectangle.y > canvas.height + 150) {
          rectangle.y = 0;
          cancelAnimationFrame(currentAnimation)
          rectangleArray = []
        }
      }
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
let arrayIsFilled = false;

export default function rectangles() {
  let currentAnimation = requestAnimFrame(rectangles)
  createRectangles();
  updateRectangles();
  drawRectangles();
  killRectangles(currentAnimation);
}
