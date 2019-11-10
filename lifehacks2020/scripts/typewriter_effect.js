let examples = [
  "cat photo searching",
  "bbt expense tracking",
  "meme generating",
  "DnD character creating",
  "keto diet tracking",
  "dog treat counting",
  "hiking trail logging",
  "LoL mastery storing",
  "tv show tracking",
];
let i = 0;
let exCounter = 0;
let speed = 50;
let pauseSpeed = 3000;
let container = document.getElementById("example_rotation");

function typeWriterForward() {
  let content = examples[exCounter];

  if (i === 0) {
    container.innerHTML = content.charAt(i);
    setTimeout(typeWriterForward, speed);
    i++;
  } else if (i < content.length) {
    container.innerHTML += content.charAt(i);
    i++;
    setTimeout(typeWriterForward, speed);
  } else {
    setTimeout(typeWriterErase, pauseSpeed);
  }
}

function typeWriterErase() {
  let content = examples[exCounter];

  if (i > 0) {
    container.innerHTML = content.slice(0, i);
    i--;
    setTimeout(typeWriterErase, speed);
  } else {
    if (exCounter === examples.length - 1) {
      exCounter = 0;
    } else {
      exCounter++;
    }
    i = 0;
    setTimeout(typeWriterForward, 50);
  }
}

typeWriterForward();
