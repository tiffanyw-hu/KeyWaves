let canvas = document.getElementById('third-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let x = 0;
let y = (canvas.height * 3 / 4);
let dy = 5 + Math.random()*10;
let dx = (8 + Math.random()*10)

function drawPixel(currentAnimation) {
  let ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.fillRect(x, y, 10, 10);
  // ctx.arc(x, y, 8, 0, Math.PI * 2, false);
  ctx.fillStyle = 'white';
  ctx.lineJoin = 'round';
  ctx.lineWidth = 15;
  ctx.stroke();
  x += dx
  y += dy
  if (y > canvas.height || y < (canvas.height / 3)) {
    dy = -1 * dy
  }
  if (x > canvas.width) {
    x = 0;
    y = (canvas.height * 3 / 4);
    dy = 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(currentAnimation)
  }
}

// function firstPath() {
//
// }

export default function zigZag() {
  let currentAnimation = requestAnimFrame(zigZag)
  drawPixel(currentAnimation);
}
// firstPath();
// secondPath();
// thirdPath();
// killPixel();
