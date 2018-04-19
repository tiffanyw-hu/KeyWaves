function createRectangles() {
  // if(tick % 10 == 0 && tick < 60) {
    if (rectangleArray.length < 5 && arrayIsFilled === false) {
      let startingY = 100
      if (rectangleArray.length >= 1) {
        startingY = rectangleArray[rectangleArray.length - 1]['y'] + 100
      }

      rectangleArray.push({
        x: 200,
        y: startingY,
        speed: 18,
        width: 410,
        height: 30,
        colour: 'white',
      });
      if (rectangleArray.length === 5) {
        arrayIsFilled = true
      }
    }
  // }
}

function updateRectangles() {
  for(let i in rectangleArray) {
    let rectangle = rectangleArray[i];
    rectangle.x += rectangle.speed;
  }
}

function killRectangles(currentAnimation) {
  let ctx = canvas.getContext('2d');
  if (rectangleArray.length > 0) {
    for(let i in rectangleArray) {
      let rectangle = rectangleArray[i];
      if (rectangle) {
        if (rectangle.x > canvas.width) {
          rectangle.x = 0;
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

let canvas = document.getElementById('fourth-canvas');
let rectangleArray = [];
let tick = 0;
let y = 0;
canvas.width = window.innerWidth/2 + 400;
canvas.height = window.innerHeight - 200;
let arrayIsFilled = false;

export default function horizontalRectangles() {
  let currentAnimation = requestAnimFrame(horizontalRectangles)
  createRectangles();
  updateRectangles();
  drawRectangles();
  killRectangles(currentAnimation);
}
