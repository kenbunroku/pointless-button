// GET PRESS BUTTON
let button = document.querySelector('.button'),
  count = 0;

// ADD EVENT WHEN THE BUTTON IS PRESSED
button.addEventListener('click', changeNumber);

function changeNumber() {
  // INCLEMENT THE NUMBER
  count += 1;

  // DISPLAY THE NUMBER IN HTML
  button.innerText = count;
}
