import {drawIt, chooseColor} from './ripple.js';
import rectangles from './rectangles.js';
import zigZag from './zigzag.js';
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function( callback ){
            window.setTimeout(callback, 3600 / 60);
          };
})();

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('one').addEventListener('mousedown',
  () => {
    chooseColor()
    drawIt()
  } )
  document.getElementById('two').addEventListener('mousedown',
  () => {requestAnimFrame(rectangles)} )
  document.getElementById('three').addEventListener('mousedown',
  () => {requestAnimFrame(zigZag)} )
})
