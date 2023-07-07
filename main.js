let currentSection = "intro";
const introSection = document.querySelector("#intro");
const varsSection = document.querySelector("#vars");

const button = document.querySelector("button#colors");
const continueBtn = document.querySelector("button#continue");
const goBackBtn = document.querySelector("button#prev");
let colors = [
  "crimson",
  "darkorange",
  "gold",
  "limegreen",
  "dodgerblue",
  "rebeccapurple",
];
let colorIndex = 0;
let stop = false;

function changeColor(color) {
  if (!color || typeof color !== "string") {
    const index = colorIndex % colors.length;
    colorIndex += 1;
    color = colors[index];
  }
  button.style.backgroundColor = color;
}

function handleContinue() {
  switch (currentSection) {
    case "intro":
      introSection.classList.add("hidden");
      varsSection.classList.remove("hidden");
      goBackBtn.classList.remove("hidden");
      currentSection = "vars";
      break;
  }
}

function handleBack() {
  switch (currentSection) {
    case "vars":
      introSection.classList.remove("hidden");
      varsSection.classList.add("hidden");
      goBackBtn.classList.add("hidden");
      currentSection = "intro";
      break;
  }
}

button.addEventListener("click", changeColor);
continueBtn.addEventListener("click", handleContinue);
goBackBtn.addEventListener("click", handleBack);
