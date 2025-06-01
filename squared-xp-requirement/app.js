const levelText = document.getElementById('level');
const xpText = document.getElementById('xp');
const earnXpButton = document.getElementById('earnXpButton');
const progressBar = document.getElementById('progressBar');
let level = 1;
let xp = 0;
let xpNeeded = 1;

earnXpButton.addEventListener('click', () => {
  xp += 1;
  progressBar.style.width = `${(xp / xpNeeded) * 100}%`;
  xpText.textContent = xp;
  if (xp >= xpNeeded) {
    level++;
    xpNeeded = level;
    levelText.textContent = level;
    xp = 0;
    xpText.textContent = xp;
    progressBar.style.width = '0%';
  }
});