let radius = Math.random() * 30;
let canvas = document.getElementById('second-canvas');
function createCircle(currentAnimation) {
  let ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, radius, 0, Math.PI * 2, false);
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 5;
  ctx.stroke();
  radius += 10
  if (radius > canvas.width + 180 || radius > canvas.height + 180) {
    radius = 0;
    cancelAnimationFrame(currentAnimation)
  }
}


let x = 0;
export default function drawOther() {
  let currentAnimation = requestAnimationFrame(drawOther);
  createCircle(currentAnimation);
}
