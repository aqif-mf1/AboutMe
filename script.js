// script.js - live clock, time-based greeting, toast notification, accessibility tools
function tick(){var c=document.getElementById("clock");if(c)c.textContent=new Date().toLocaleString("en-MY",{dateStyle:"full",timeStyle:"medium"})}
setInterval(tick,1000);tick();
var h=new Date().getHours(),g=document.getElementById("greet");
if(g)g.textContent=(h<12?"Good morning":h<18?"Good afternoon":"Good evening")+", welcome to my website!";
function toast(m){var t=document.createElement("div");t.className="toast";t.textContent=m;document.body.appendChild(t);setTimeout(function(){t.remove()},4000)}
if(!sessionStorage.seen){toast("Welcome! Use the accessibility buttons to change text size or colours.");sessionStorage.seen=1}
function setMode(m){document.body.className=m;localStorage.mode=m}
function size(d){document.documentElement.style.fontSize=(parseFloat(getComputedStyle(document.documentElement).fontSize)+d)+"px"}
if(localStorage.mode)document.body.className=localStorage.mode;
