function playSound(e) {
  // select the audio and the buttons according to the keys we press
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; // If there is a key without audio then stop function

  audio.currentTime = 0; // rewind the audio
  audio.play(); // play the audio when we press it
  key.classList.add("playing");
}

// skip it if it's not a transform and then remove classList
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

// call keys and give to each one a function to remove transition
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

// to call the whole window to press any button from keyboard
window.addEventListener("keydown", playSound);
