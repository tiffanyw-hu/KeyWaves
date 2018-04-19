import {circleRipple} from './ripple.js';
import rectangles from './rectangles.js';
import zigZag from './zigzag.js';
import horizontalRectangles from './rectangles2.js'
import reverseRipple from './ripple3.js'
import manyRectangles from './rectangles3.js'
import verticalZigZag from './zigzag2.js'
import horizontalScreen from './screen.js'
import otherScreen from './rectangles4.js'

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
  document.getElementById('nine').addEventListener('mousedown',
  () => {requestAnimFrame(otherScreen)} )
  document.getElementById('start').addEventListener('click',
  (e) => {
    e.preventDefault();
    document.getElementsByClassName('container')[0].className = 'container'
    document.getElementById('start-menu').className = 'hidden'
    let bgm = document.getElementById('audio')
    bgm.play();
    document.getElementById('audio')
  })
  document.getElementById('back').addEventListener('click',
  (e) => {
    e.preventDefault();
    document.getElementsByClassName('container')[0].className = 'container hidden'
    document.getElementById('start-menu').className = 'start'
  })
  document.getElementById('mute').addEventListener('click',
  (e) => {
    e.preventDefault();
    let bgm = document.getElementById('audio')
    if (bgm.muted) {
      bgm.play();
      bgm.muted = false;
    }
    if (!bgm.muted) {
      bgm.pause();
      bgm.muted = true;
    }
  })
})
