const sections = [
  { name: "intro", prev: null, next: "vars" },
  { name: "vars", prev: "intro", next: "array" },
  { name: "array", prev: "vars", next: null },
];

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

function updateSection(sectionName) {
  document.cookie = `currentSection=${sectionName}`;

  sections.forEach((section) => {
    const sectionDiv = document.querySelector(`#${section.name}`);

    if (section.name === sectionName) {
      sectionDiv.classList.remove("hidden");
      section.prev
        ? goBackBtn.classList.remove("hidden")
        : goBackBtn.classList.add("hidden");
      section.next
        ? continueBtn.classList.remove("hidden")
        : continueBtn.classList.add("hidden");
    } else {
      sectionDiv.classList.add("hidden");
    }
  });
}

function changeColor(color) {
  if (!color || typeof color !== "string") {
    const index = colorIndex % colors.length;
    colorIndex += 1;
    color = colors[index];
  }
  button.style.backgroundColor = color;
}

function handleContinue() {
  nextSection = sections.find(
    (s) => s.name === getCookies().currentSection
  ).next;
  updateSection(nextSection);
}

function handleBack() {
  prevSection = sections.find(
    (s) => s.name === getCookies().currentSection
  ).prev;
  updateSection(prevSection);
}

button.addEventListener("click", changeColor);
continueBtn.addEventListener("click", handleContinue);
goBackBtn.addEventListener("click", handleBack);

updateSection(getCookies().currentSection || "intro");
