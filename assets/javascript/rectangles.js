function createRectangles() {
  if(tick % 10 == 0 && tick < 60) {
    if (rectangleArray.length < 5 && arrayIsFilled === false) {
      let startingX = 100
      if (rectangleArray.length >= 1) {
        startingX = rectangleArray[rectangleArray.length - 1]['x'] + 130
      }
      console.log(rectangleArray)
      console.log(startingX)
      rectangleArray.push({
        x: startingX,
        y: 100,
        speed: 18,
        width: 70,
        height: 410,
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
  let ctx = canvas.getContext('2d');
  if (rectangleArray.length > 0) {
    for(let i in rectangleArray) {
      let rectangle = rectangleArray[i];
      if (rectangle) {
        if (rectangle.y > canvas.height) {
          rectangle.y = 0;
          cancelAnimationFrame(currentAnimation)
          ctx.clearRect(0, 0, canvas.width, canvas.height)

          rectangleArray = []
          arrayIsFilled = false
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

let canvas = document.getElementById('second-canvas');
let rectangleArray = [];
let tick = 0;
let dx = 150;
let x = 0;
canvas.width = window.innerWidth/2 + 150;
canvas.height = window.innerHeight - 200;
let arrayIsFilled = false;

export default function rectangles() {
  let currentAnimation = requestAnimFrame(rectangles)
  createRectangles();
  updateRectangles();
  drawRectangles();
  killRectangles(currentAnimation);
}
