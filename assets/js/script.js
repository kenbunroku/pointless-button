// GET PRESS BUTTON
const button = document.querySelector('.button');
let count = 0;

// ADD EVENT WHEN THE BUTTON IS PRESSED
button.addEventListener('click', changeNumber);

function changeNumber() {
  // INCLEMENT THE NUMBER
  count += 1;

  // DISPLAY THE NUMBER IN HTML
  button.innerText = count;
}
