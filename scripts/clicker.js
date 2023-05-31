let number = 0;

function playClickerGame() {
  let count = document.querySelector(".js-clicker-button");

  if (number >= 1000) {
    number += 100;
  } else if (number >= 10) {
    number += 10;
  } else {
    number++;
  }

  count.innerHTML = number;
}

document.querySelector(".js-clicker-button").addEventListener("click", () => {
  playClickerGame();
});
