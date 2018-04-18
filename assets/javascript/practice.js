// let x = 0;
// export default function drawIt() {
//   window.requestAnimFrame(drawIt);
//   let canvas = document.getElementById('canvas');
//   let ctx = canvas.getContext('2d');
//   canvas.width = window.innerWidth
//   canvas.height = window.innerHeight;
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.fillStyle = "blue";
//   ctx.fillRect(x, 100, 200, 100);
//   x += 5
// }
//
// function killParticles() {
//     for(var i in particles) {
//         var part = particles[i];
//         if(part.y > canvas.height) {
//             part.y = 0;
//         }
//     }
// }
//
// function all() {
//
// }
let radius = Math.random() * 30;
let colors = ['green', 'blue', 'red']
let ctx = null;
let canvas = document.getElementById('canvas');
function createCircle(currentAnimation) {
  ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, radius, 0, Math.PI * 2, false);
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 5;
  ctx.stroke();
  radius += 10
  console.log(radius)
  if (radius > canvas.width + 180 || radius > canvas.height + 180) {
    radius = 0;
    cancelAnimationFrame(currentAnimation)
  }
}


let x = 0;
export default function drawIt() {
  let currentAnimation = requestAnimFrame(drawIt);
  createCircle(currentAnimation);
}
