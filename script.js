let seconds = 00;
let tens = 00;
let appendTens = document.getElementById("tens")
let appendSeconds = document.getElementById("seconds")
let buttonStart = document.getElementById('button-start');
let buttonStop = document.getElementById('button-stop');
let buttonReset = document.getElementById('button-reset');
let timeInterval ;
buttonStart.addEventListener("click", () => 
  timeInterval=setInterval(timer, 10))


buttonStop.addEventListener("click", ()=>  clearInterval(timeInterval));


buttonReset.addEventListener('click',()=>{
  clearInterval(timeInterval);
  tens = "00";
  seconds = "00";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
})

function timer() {
  tens++;

  if (tens <= 9) {
    appendTens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    appendTens.innerHTML = tens;

  }

  if (tens > 99) {
    console.log("seconds");
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0"+0;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }

}