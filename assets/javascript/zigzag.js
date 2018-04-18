let canvas = document.getElementById('third-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let x = 0;
let y = (canvas.height * 3 / 4)

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

function drawPixel() {
  let ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.fillRect(x, y, 10, 10)
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 8;
  ctx.stroke();
  console.log(x)
  console.log(y)
  x += 3
  y += 1
  if (x === (canvas.width * 2 / 5) || y === (canvas.height / 3)) {
    x += 5
    y -= 5
  }
}

// function firstPath() {
//
// }

export default function zigZag() {
  window.requestAnimFrame(zigZag)
  drawPixel();
}
// firstPath();
// secondPath();
// thirdPath();
// killPixel();
