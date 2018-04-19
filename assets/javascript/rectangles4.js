let canvas = document.getElementById('ninth-canvas');
let x = canvas.width;
let y = 0;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let width = 80
let height = canvas.height

function createScreen(currentAnimation) {
  let ctx = canvas.getContext('2d');
  // ctx.beginPath();
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillRect(x, y, width, height);
  // ctx.closePath();
  ctx.fillStyle = 'white';
  ctx.fill();

  x -= 50
  if (x < 0) {
    x = canvas.width
    cancelAnimationFrame(currentAnimation)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

  }
}


export default function otherScreen() {
  let currentAnimation = requestAnimationFrame(otherScreen);
  createScreen(currentAnimation);
}
