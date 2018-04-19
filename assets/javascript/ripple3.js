let ctx = null;
let canvas = document.getElementById('fifth-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let radius = canvas.width / 2 + 180

function createCircle(currentAnimation, random) {
  ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, radius, 0, Math.PI * 2, false);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 40;
  ctx.stroke();
  radius -= 50
  if (radius < 1) {
    radius = 0;
    cancelAnimationFrame(currentAnimation)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    radius = canvas.width / 2 + 180
  }
}

let x = 0;
export default function reverseRipple() {
  let currentAnimation = requestAnimationFrame(reverseRipple);
  createCircle(currentAnimation);
}
