var timer = 60;
var sum = 0;
var rn;
function scoreIncrease(){
    sum += 10;
    document.querySelector("#scoreval").textContent = sum;
}
function bubble(){
    var clutter = "";
    for(var i=1; i<=120; i++){
       clutter += `<div id="bubble">${Math.floor(Math.random()*10)}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter;

}

function setHit(){
    rn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rn;
}

function setTimer(){
    var clrTimer = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(clrTimer);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over!!<br>Your score is ${sum}</h1>`
        }
        
    },1000);
    
}
document.querySelector("#pbtm")
.addEventListener("click", function(dets){
    var clickedNo = Number(dets.target.textContent)
    if(clickedNo === rn){
        scoreIncrease();
        bubble();
        setHit();
    }
})

bubble();
setTimer();
setHit();
