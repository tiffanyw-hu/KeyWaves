import {circleRipple} from './ripple.js';
import rectangles from './rectangles.js';
import zigZag from './zigzag.js';
import horizontalRectangles from './rectangles2.js';
import reverseRipple from './ripple3.js';
import manyRectangles from './rectangles3.js';
import verticalZigZag from './zigzag2.js';
import horizontalScreen from './screen.js';
import otherScreen from './rectangles4.js';

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
    circleRipple();
    let firstAudio = document.getElementById('first-audio');
    firstAudio.play();
  } )
  document.getElementById('two').addEventListener('mousedown',
  () => {
    requestAnimFrame(rectangles)
    let secondAudio = document.getElementById('second-audio');
    secondAudio.play();
  } )
  document.getElementById('three').addEventListener('mousedown',
  () => {
    requestAnimFrame(zigZag)
    let thirdAudio = document.getElementById('third-audio')
    thirdAudio.play();
  } )
  document.getElementById('four').addEventListener('mousedown',
  () => {
    requestAnimFrame(horizontalRectangles)
    let fourthAudio = document.getElementById('fourth-audio')
    fourthAudio.play();
  } )
  document.getElementById('five').addEventListener('mousedown',
  () => {
    requestAnimFrame(reverseRipple)
    let fifthAudio = document.getElementById('fifth-audio');
    fifthAudio.play();
  } )
  document.getElementById('six').addEventListener('mousedown',
  () => {
    requestAnimFrame(manyRectangles)
    let sixthAudio = document.getElementById('sixth-audio');
    sixthAudio.play();
  } )
  document.getElementById('seven').addEventListener('mousedown',
  () => {
    requestAnimFrame(verticalZigZag)
    let seventhAudio = document.getElementById('seventh-audio')
    seventhAudio.play();
  } )
  document.getElementById('eight').addEventListener('mousedown',
  () => {
    requestAnimFrame(horizontalScreen)
    let eighthAudio = document.getElementById('eighth-audio');
    eighthAudio.play();
    } )
  document.getElementById('nine').addEventListener('mousedown',
  () => {
    requestAnimFrame(otherScreen)
    let ninthAudio = document.getElementById('ninth-audio');
    ninthAudio.play();
  } )
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
  document.getElementsByClassName('mute')[0].addEventListener('click',
  (e) => {
    let bgm = document.getElementById('audio')
    document.getElementsByClassName('mute')[0].className = 'strike'
    bgm.muted = !bgm.muted;
    e.preventDefault();
  }, false);
  document.getElementsByClassName('mute')[1].addEventListener('click',
  (e) => {
    let bgm = document.getElementById('audio')
    document.getElementsByClassName('mute')[1].className = 'strike'
    bgm.muted = !bgm.muted;
    e.preventDefault();
  }, false);
  document.getElementsByClassName('mute-sound')[0].addEventListener('click',
  (e) => {
    e.preventDefault();
    document.getElementsByClassName('mute-sound')[0].className = 'strike'
    let sounds = document.getElementsByClassName('audio-class')
    for(let i=0; i<sounds.length; i++) {
      let sound = sounds[i]
      sound.muted = !sound.muted;
    }
  }, false);
  document.getElementsByClassName('mute-sound')[1].addEventListener('click',
  (e) => {
    e.preventDefault();
    document.getElementsByClassName('mute-sound')[1].className = 'strike'
    let sounds = document.getElementsByClassName('audio-class')
    for(let i=0; i<sounds.length; i++) {
      let sound = sounds[i]
      sound.muted = !sound.muted;
    }
  }, false);
})
