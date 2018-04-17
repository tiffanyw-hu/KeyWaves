import drawIt from './practice.js';

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function( callback ){
            window.setTimeout(callback, 1800 / 60);
          };
})();

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('one').addEventListener('mousedown',
  () => {window.requestAnimFrame(drawIt)} )
})
