let canvas = document.getElementById('canvas');
let a = 0;
let b = 0;
let c = 0;
let midX = canvas.width/2
let midY = canvas.height/2

function createTriangle(currentAnimation, random) {
  let ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.beginPath();
  ctx.moveTo(midX, midY);
  ctx.lineTo((midX * 3 / 2) + a, (midX * 4 / 5) +
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 10;
  ctx.stroke();
  radius += 20
  if (radius > canvas.width + 180 || radius > canvas.height + 180) {
    radius = 0;
    cancelAnimationFrame(currentAnimation)
  }
}


let x = 0;
export function triangleRipple() {
  let currentAnimation = requestAnimationFrame(drawIt);
  createCircle(currentAnimation);
}
