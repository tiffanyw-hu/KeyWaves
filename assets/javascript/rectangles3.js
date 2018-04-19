function createRectangles() {
  // if(tick % 10 == 0 && tick < 60) {
    if (rectangleArray.length < 50 && arrayIsFilled === false) {
      // let startingX = 0
      // if (rectangleArray.length >= 1) {
      //   startingX = rectangleArray[rectangleArray.length - 1]['x'] + 60
      // }
      rectangleArray.push({
        x: Math.random() * canvas.width,
        y: 0,
        speed: 80,
        width: 5,
        height: 410,
        colour: 'white',
      });
      if (rectangleArray.length >= 50) {
        arrayIsFilled = true
      }
    }
  // }
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
        if (rectangleArray[rectangleArray.length - 1].y > canvas.height) {
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
  ctx.fillStyle = 'white';
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

let canvas = document.getElementById('sixth-canvas');
let rectangleArray = [];
let tick = 0;
let y = 0;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let arrayIsFilled = false;

export default function manyRectangles() {
  let currentAnimation = requestAnimFrame(manyRectangles)
  createRectangles();
  updateRectangles();
  drawRectangles();
  killRectangles(currentAnimation);
}
