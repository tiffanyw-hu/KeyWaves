import {circleRipple} from './ripple.js';
import rectangles from './rectangles.js';
import zigZag from './zigzag.js';
import horizontalRectangles from './rectangles2.js'
import reverseRipple from './ripple3.js'
import manyRectangles from './rectangles3.js'
import verticalZigZag from './zigzag2.js'
import horizontalScreen from './screen.js'

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
  () => {circleRipple()} )
  document.getElementById('two').addEventListener('mousedown',
  () => {requestAnimFrame(rectangles)} )
  document.getElementById('three').addEventListener('mousedown',
  () => {requestAnimFrame(zigZag)} )
  document.getElementById('four').addEventListener('mousedown',
  () => {requestAnimFrame(horizontalRectangles)} )
  document.getElementById('five').addEventListener('mousedown',
  () => {requestAnimFrame(reverseRipple)} )
  document.getElementById('six').addEventListener('mousedown',
  () => {requestAnimFrame(manyRectangles)} )
  document.getElementById('seven').addEventListener('mousedown',
  () => {requestAnimFrame(verticalZigZag)} )
  document.getElementById('eight').addEventListener('mousedown',
  () => {requestAnimFrame(horizontalScreen)} )
})
