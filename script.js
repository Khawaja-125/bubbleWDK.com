var timer = 60;
var score = 0;
var hitrn ;
function runTimer(){
   var setint = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector('#timer').textContent = timer;
 }
 else{
    pbtm.innerHTML = `<h1>Game Over</h1>`;
    pbtm.style.backgroundColor = 'black';
    pbtm.style.color = 'white';
    clearInterval(setint);
 }
},1000)
}
function bubble(){
    var clutter = '';

for(var i = 0; i<=174 ; i++){
    var ran = Math.floor(Math.random()*10);
    clutter += `<div class='bubble'>${ran}</div>`;
}
document.querySelector('#pbtm').innerHTML = clutter;
} 
function hitts(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector('#hits').textContent = hitrn;
}
function Score(){
  score += 10;
  document.querySelector('#scores').textContent = score;
}
hitts();
runTimer();
bubble();
//Score();
//Responsiveness
if (window.matchMedia("(max-width: 805px)").matches) {
    function bubble(){
        var clutter = '';
    
    for(var i = 0; i<=170 ; i++){
        var ran = Math.floor(Math.random()*10);
        clutter += `<div class='bubble'>${ran}</div>`;
    }
    document.querySelector('#pbtm').innerHTML = clutter;
    } 
    bubble();
  } 
  if (window.matchMedia("(max-width: 765px)").matches) {
    function bubble(){
        var clutter = '';
    
    for(var i = 0; i<=161 ; i++){
        var ran = Math.floor(Math.random()*10);
        clutter += `<div class='bubble'>${ran}</div>`;
    }
    document.querySelector('#pbtm').innerHTML = clutter;
    } 
    bubble();
  } 
  if (window.matchMedia("(max-width: 725px)").matches) {
    function bubble(){
        var clutter = '';
    
    for(var i = 0; i<=100 ; i++){
        var ran = Math.floor(Math.random()*10);
        clutter += `<div class='bubble'>${ran}</div>`;
    }
    document.querySelector('#pbtm').innerHTML = clutter;
    } 
    bubble();
  } 
  if (window.matchMedia("(max-width: 481px)").matches) {
    function bubble(){
        var clutter = '';
    
    for(var i = 0; i<=60 ; i++){
        var ran = Math.floor(Math.random()*10);
        clutter += `<div class='bubble'>${ran}</div>`;
    }
    document.querySelector('#pbtm').innerHTML = clutter;
    } 
    bubble();
  } 
 

var pbtm = document.querySelector('#pbtm');
pbtm.addEventListener('click',function(detz){
    var bbl = Number(detz.target.textContent);
    if(bbl == hitrn){
        Score();
        bubble();
        hitts();
    }
    else{
        alert("Wrong Hit! Try Again");
    }
}) 