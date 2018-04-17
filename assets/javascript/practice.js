let x = 0;
export default function drawIt() {
  window.requestAnimFrame(drawIt);
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "blue";
  ctx.fillRect(x, 100, 200, 100);
  x += 5
}

function killParticles() {
    for(var i in particles) {
        var part = particles[i];
        if(part.y > canvas.height) {
            part.y = 0;
        }
    }
}

function all() {
  
}
