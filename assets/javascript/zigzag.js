let canvas = document.getElementById('third-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let x = 0;
let y = (canvas.height * 3 / 4);
let dy = 10;

// function zigZag() {
//   let ctx = canvas.getContext('2d');
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//
//   ctx.lineWidth = 5;
//   ctx.strokeStyle = 'blue';
//   ctx.beginPath();
//   ctx.moveTo(0, canvas.height * 3 /4);
//   ctx.lineTo(canvas.width * 2 / 5, canvas.height/3);
//   ctx.lineTo(canvas.width * 3 / 5, canvas.height - 200);
//   ctx.lineTo(canvas.width, canvas.height/3);
//   ctx.stroke();
// }

function drawPixel(currentAnimation) {
  let ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2, false);
  ctx.strokeStyle = 'blue';
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 5;
  ctx.stroke();
  console.log(x)
  console.log(y)
  x += 5
  y += dy
  if (y > canvas.height || y < 0) {
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
