const initial_time_in_seconds = 25 * 60;
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

playButton.addEventListener("click", playCounter);
pauseButton.addEventListener("click", pauseCounter);
resetButton.addEventListener("click", resetCounter);

let time_in_seconds = initial_time_in_seconds;
let timer = 0;

function playCounter() {
  timer = setInterval(() => {
    if (time_in_seconds > 0) {
      time_in_seconds--;
      updateDom();
    }
  }, 1000);
}
function pauseCounter() {
  clearInterval(timer);
}

function resetCounter() {
  clearInterval(timer);
  document.getElementById("min").innerHTML = String(0).padStart(2, 0);
  document.getElementById("sec").innerHTML = String(0).padStart(2, 0);
}

function updateDom() {
  const minutes = Math.floor(time_in_seconds / 60);
  document.getElementById("min").innerHTML = String(minutes).padStart(2, 0);
  const seconds = time_in_seconds % 60;
  document.getElementById("sec").innerHTML = String(seconds).padStart(2, 0);
}
