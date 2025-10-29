const counterDisplay = document.getElementById("counter01");

let count = 0;

function increasePlus() {
  count++;
  counterDisplay.textContent = count;
}

function decreaseMinus() {
  if (count > 0) {
    count--;
    counterDisplay.textContent = count;
  }
}

function resetCount() {
  count = 0;
  counterDisplay.textContent = count;
}
