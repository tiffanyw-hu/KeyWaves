let canvas = document.getElementById('eighth-canvas');
let x = 0;
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

  x += 50
  if (x > canvas.width) {
    x = 0
    cancelAnimationFrame(currentAnimation)
  }
}


export default function horizontalScreen() {
  let currentAnimation = requestAnimationFrame(horizontalScreen);
  createScreen(currentAnimation);
}
