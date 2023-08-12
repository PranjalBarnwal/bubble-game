const childBottom = document.querySelector(".childBottom");
let hitrn = 0;
let timer = 6;
let score=0;
function makeBubbles() {
  let bubbles = "";
  for (let i = 1; i <= 189; i++) {
    const rn = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">${rn}</div>`;
  }
  childBottom.innerHTML = bubbles;
}
function changeTarget() {
  hitrn=Math.floor(
    Math.random() * 10);
  document.querySelector("#target").textContent = hitrn;
  
}
function increaseScore(){
score+=10;
document.querySelector("#score").textContent=score;


}
function startTimer() {
  let setTimer = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(setTimer);
      document.querySelector("#timer").textContent = 60;
      childBottom.textContent=`GameOver score:${score}` 
      childBottom.style.fontSize = "100px";
    }
  }, 1000);
  
  
  makeBubbles();
}

startTimer();
changeTarget();
document.querySelector(".childBottom").addEventListener("click",function(element){
if(element.target.textContent==hitrn){
  increaseScore();
  makeBubbles();
  changeTarget();
}
});

