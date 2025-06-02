const levelText = document.getElementById("level"); //level text element
const xpText = document.getElementById("xp"); //XP (experience points) text element
const earnXpButton = document.getElementById("earnXpButton"); //earn XP button element
const progressBar = document.getElementById("progressBar"); //progress bar element
let level = 1; //set level to 1
let xp = 0; //set XP to 0
let xpNeeded = 1; //set XP needed to 1

earnXpButton.addEventListener("click", () => {
  //when earn XP button is clicked
  xp += 1; //increase XP by 1
  progressBar.value = xp; //update progress bar value
  xpText.textContent = xp; //update XP text value
  if (xp >= xpNeeded) {
    level++; //increase level
    xpNeeded += level; //increase XP needed by level
    levelText.textContent = level; //update level text
    xp = 0; //set XP to 0
    xpText.textContent = xp; //update XP text value
    progressBar.value = xp; //update progress bar value
    progressBar.max = xpNeeded; //update progress bar max value
  }
});
