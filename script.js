const initialTimeInSeconds = 25 * 60;
let timeInSeconds = initialTimeInSeconds;
let timer = null;

const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

playButton.addEventListener("click", playCounter);
pauseButton.addEventListener("click", pauseCounter);
resetButton.addEventListener("click", resetCounter);

function playCounter() {
  if (!timer) {
    timer = setInterval(() => {
      if (timeInSeconds > 0) {
        timeInSeconds--;
        updateDom();
      } else {
        clearInterval(timer);
        timer = null;
      }
    }, 1000);
  }
}

function pauseCounter() {
  clearInterval(timer);
  timer = null;
}

function resetCounter() {
  clearInterval(timer);
  timer = null;
  timeInSeconds = initialTimeInSeconds;
  updateDom();
}

function updateDom() {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  document.getElementById("min").textContent = String(minutes).padStart(2, "0");
  document.getElementById("sec").textContent = String(seconds).padStart(2, "0");
}

updateDom();