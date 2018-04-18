import drawIt from './practice.js';
import rectangles from './other.js';

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
  () => {requestAnimationFrame(drawIt)} ),
  document.getElementById('two').addEventListener('mousedown',
  () => {requestAnimFrame(rectangles)} )
})
