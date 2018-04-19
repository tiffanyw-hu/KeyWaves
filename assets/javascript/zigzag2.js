let canvas = document.getElementById('seventh-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let x = (canvas.width * 3 / 4);
let y = (canvas.height);
let dy = 8 + Math.random()*10;
let dx = (12 + Math.random()*12)

function drawPixel(currentAnimation) {
  let ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.fillRect(x, y, 20, 20);
  // ctx.arc(x, y, 8, 0, Math.PI * 2, false);
  ctx.fillStyle = 'white';
  ctx.lineWidth = 15;
  ctx.stroke();
  x += dx
  y -= dy
  if (x > canvas.width || x < (canvas.height *2 / 3)) {
    dx = -1 * dx
  }
  if (y < 0) {
    y = canvas.height;
    x = (canvas.width * 3 / 4)
    // dy = 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(currentAnimation)
  }
}

// function firstPath() {
//
// }

export default function verticalZigZag() {
  let currentAnimation = requestAnimFrame(verticalZigZag)
  drawPixel(currentAnimation);
}
// firstPath();
// secondPath();
// thirdPath();
// killPixel();
