!function(e){var t={};function n(i){if(t[i])return t[i].exports;var d=t[i]={i:i,l:!1,exports:{}};return e[i].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let i=30*Math.random(),d=null,l=document.getElementById("canvas");function o(){!function(e,t){d=l.getContext("2d"),l.width=window.innerWidth,l.height=window.innerHeight,d.clearRect(0,0,l.width,l.height),d.beginPath(),d.arc(l.width/2,l.height/2,i,0,2*Math.PI,!1),d.strokeStyle="white",d.lineWidth=5,d.stroke(),((i+=20)>l.width+180||i>l.height+180)&&(i=0,cancelAnimationFrame(e))}(requestAnimationFrame(o))}let a=document.getElementById("second-canvas"),h=[],m=0;a.width=window.innerWidth/2+150,a.height=window.innerHeight-200;let r=!1;function u(){let e=requestAnimFrame(u);!function(){if(m%10==0&&m<60&&h.length<5&&!1===r){let e=100;h.length>=1&&(e=h[h.length-1].x+130),h.push({x:e,y:100,speed:18,width:70,height:410,colour:"white"}),5===h.length&&(r=!0)}}(),function(){for(let e in h){let t=h[e];t.y+=t.speed}}(),function(){let e=a.getContext("2d");e.fillStyle="white",e.clearRect(0,0,a.width,a.height);for(let t in h){let n=h[t];e.beginPath(),e.fillRect(n.x,n.y,n.width,n.height),e.closePath(),e.fillStyle=n.colour,e.fill()}}(),function(e){let t=a.getContext("2d");if(h.length>0)for(let n in h){let i=h[n];i&&i.y>a.height&&(i.y=0,cancelAnimationFrame(e),t.clearRect(0,0,a.width,a.height),h=[],r=!1)}}(e)}let c=document.getElementById("third-canvas");c.width=window.innerWidth,c.height=window.innerHeight;let s=0,g=3*c.height/4,w=5+10*Math.random(),f=8+10*Math.random();function y(){!function(e){let t=c.getContext("2d");t.beginPath(),t.fillRect(s,g,10,10),t.fillStyle="white",t.lineJoin="round",t.lineWidth=15,t.stroke(),s+=f,((g+=w)>c.height||g<c.height/3)&&(w*=-1),s>c.width&&(s=0,g=3*c.height/4,w=10,t.clearRect(0,0,c.width,c.height),cancelAnimationFrame(e))}(requestAnimFrame(y))}let E=document.getElementById("fourth-canvas"),B=[];E.width=window.innerWidth/2+400,E.height=window.innerHeight-200;let v=!1;function I(){let e=requestAnimFrame(I);!function(){if(B.length<5&&!1===v){let e=100;B.length>=1&&(e=B[B.length-1].y+100),B.push({x:200,y:e,speed:18,width:410,height:30,colour:"white"}),5===B.length&&(v=!0)}}(),function(){for(let e in B){let t=B[e];t.x+=t.speed}}(),function(){let e=E.getContext("2d");e.fillStyle="white",e.clearRect(0,0,E.width,E.height);for(let t in B){let n=B[t];e.beginPath(),e.fillRect(n.x,n.y,n.width,n.height),e.closePath(),e.fillStyle=n.colour,e.fill()}}(),function(e){let t=E.getContext("2d");if(B.length>0)for(let n in B){let i=B[n];i&&i.x>E.width&&(i.x=0,cancelAnimationFrame(e),t.clearRect(0,0,E.width,E.height),B=[],v=!1)}}(e)}let p=null,A=document.getElementById("fifth-canvas");A.width=window.innerWidth,A.height=window.innerHeight;let M=A.width/2+180;function F(){!function(e,t){(p=A.getContext("2d")).clearRect(0,0,A.width,A.height),p.beginPath(),p.arc(A.width/2,A.height/2,M,0,2*Math.PI,!1),p.strokeStyle="white",p.lineWidth=40,p.stroke(),(M-=50)<1&&(M=0,cancelAnimationFrame(e),p.clearRect(0,0,A.width,A.height),M=A.width/2+180)}(requestAnimationFrame(F))}let x=document.getElementById("sixth-canvas"),C=[];x.width=window.innerWidth,x.height=window.innerHeight;let L=!1;function R(){let e=requestAnimFrame(R);C.length<50&&!1===L&&(C.push({x:Math.random()*x.width,y:0,speed:80,width:5,height:410,colour:"white"}),C.length>=50&&(L=!0)),function(){for(let e in C){let t=C[e];t.y+=t.speed}}(),function(){let e=x.getContext("2d");e.fillStyle="white",e.clearRect(0,0,x.width,x.height);for(let t in C){let n=C[t];e.beginPath(),e.fillRect(n.x,n.y,n.width,n.height),e.closePath(),e.fillStyle=n.colour,e.fill()}}(),function(e){let t=x.getContext("2d");if(C.length>0)for(let n in C){let i=C[n];i&&C[C.length-1].y>x.height&&(i.y=0,cancelAnimationFrame(e),t.clearRect(0,0,x.width,x.height),C=[],L=!1)}}(e)}let q=document.getElementById("seventh-canvas");q.width=window.innerWidth,q.height=window.innerHeight;let S=3*q.width/4,H=q.height,N=8+10*Math.random(),P=12+12*Math.random();function b(){!function(e){let t=q.getContext("2d");t.beginPath(),t.fillRect(S,H,20,20),t.fillStyle="white",t.lineWidth=15,t.stroke(),H-=N,((S+=P)>q.width||S<2*q.height/3)&&(P*=-1),H<0&&(H=q.height,S=3*q.width/4,t.clearRect(0,0,q.width,q.height),cancelAnimationFrame(e))}(requestAnimFrame(b))}let k=document.getElementById("eighth-canvas"),W=0,T=0;k.width=window.innerWidth,k.height=window.innerHeight;let D=80,G=k.height;function O(){!function(e){let t=k.getContext("2d");t.clearRect(0,0,k.width,k.height),t.fillRect(W,T,D,G),t.fillStyle="white",t.fill(),(W+=50)>k.width&&(W=0,cancelAnimationFrame(e))}(requestAnimationFrame(O))}let U=document.getElementById("ninth-canvas"),_=U.width,j=0;U.width=window.innerWidth,U.height=window.innerHeight;let z=80,J=U.height;function K(){!function(e){let t=U.getContext("2d");t.clearRect(0,0,U.width,U.height),t.fillRect(_,j,z,J),t.fillStyle="white",t.fill(),(_-=50)<0&&(_=U.width,cancelAnimationFrame(e),t.clearRect(0,0,U.width,U.height))}(requestAnimationFrame(K))}window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,60)},document.addEventListener("DOMContentLoaded",()=>{document.getElementById("one").addEventListener("mousedown",()=>{o(),document.getElementById("first-audio").play()}),document.getElementById("two").addEventListener("mousedown",()=>{requestAnimFrame(u),document.getElementById("second-audio").play()}),document.getElementById("three").addEventListener("mousedown",()=>{requestAnimFrame(y),document.getElementById("third-audio").play()}),document.getElementById("four").addEventListener("mousedown",()=>{requestAnimFrame(I),document.getElementById("fourth-audio").play()}),document.getElementById("five").addEventListener("mousedown",()=>{requestAnimFrame(F),document.getElementById("fifth-audio").play()}),document.getElementById("six").addEventListener("mousedown",()=>{requestAnimFrame(R),document.getElementById("sixth-audio").play()}),document.getElementById("seven").addEventListener("mousedown",()=>{requestAnimFrame(b),document.getElementById("seventh-audio").play()}),document.getElementById("eight").addEventListener("mousedown",()=>{requestAnimFrame(O),document.getElementById("eighth-audio").play()}),document.getElementById("nine").addEventListener("mousedown",()=>{requestAnimFrame(K),document.getElementById("ninth-audio").play()}),document.getElementById("start").addEventListener("click",e=>{e.preventDefault(),document.getElementsByClassName("container")[0].className="container",document.getElementById("start-menu").className="hidden",document.getElementById("audio").play(),document.getElementById("audio")}),document.getElementById("back").addEventListener("click",e=>{e.preventDefault(),document.getElementsByClassName("container")[0].className="container hidden",document.getElementById("start-menu").className="start"}),document.getElementsByClassName("mute")[0].addEventListener("click",e=>{e.preventDefault(),Array.from(document.getElementsByClassName("mute")).forEach(e=>{e.innerHTML="Mute BGM"===e.innerHTML?"Unmute BGM":"Mute BGM"});let t=document.getElementById("audio");t.muted=!t.muted},!1),document.getElementsByClassName("mute")[1].addEventListener("click",e=>{e.preventDefault(),Array.from(document.getElementsByClassName("mute")).forEach(e=>{e.innerHTML="Mute BGM"===e.innerHTML?"Unmute BGM":"Mute BGM"});let t=document.getElementById("audio");t.muted=!t.muted},!1),document.getElementsByClassName("mute-sound")[0].addEventListener("click",e=>{e.preventDefault(),Array.from(document.getElementsByClassName("mute-sound")).forEach(e=>{e.innerHTML="Mute Sound"===e.innerHTML?"Unmute Sound":"Mute Sound"});let t=document.getElementsByClassName("audio-class");for(let e=0;e<t.length;e++){let n=t[e];n.muted=!n.muted}},!1),document.getElementsByClassName("mute-sound")[1].addEventListener("click",e=>{e.preventDefault(),Array.from(document.getElementsByClassName("mute-sound")).forEach(e=>{e.innerHTML="Mute Sound"===e.innerHTML?"Unmute Sound":"Mute Sound"});let t=document.getElementsByClassName("audio-class");for(let e=0;e<t.length;e++){let n=t[e];n.muted=!n.muted}},!1)})}]);
//# sourceMappingURL=bundle.js.map