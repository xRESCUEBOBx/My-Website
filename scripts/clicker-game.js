let count = 0;
let numberDiv = document.querySelector(".number-div");
function clickMe() {
  if (count >= 1000) {
    count += 1000;
  } else if (count >= 100) {
    count += 100;
  } else if (count >= 10) {
    count += 10;
  } else {
    count++;
  }

  numberDiv.innerHTML = count;
}

let buttonElement = document.querySelector(".js-clicker-button");

function changeClass() {
  //When adding a class with classlist, don't type the dot before the class
  if (buttonElement.innerText === "Click Me!") {
    buttonElement.classList.add("clicker-button");
    buttonElement.classList.remove("js-clicker-button");
    buttonElement.innerText = "Keep going.";
  } else if (buttonElement.innerText === "Keep going." && count >= 10) {
    buttonElement.classList.remove("clicker-button");
    buttonElement.classList.add("clicker-button-2");
    buttonElement.innerText = "Okay thats enough.";
  } else if (buttonElement.innerText === "Okay thats enough." && count >= 100) {
    buttonElement.classList.remove("clicker-button-2");
    buttonElement.classList.add("js-clicker-button-over-100");
    buttonElement.innerText = "No seriously, stop.";
  } else if (
    buttonElement.innerText === "No seriously, stop." &&
    count >= 1000
  ) {
    buttonElement.classList.remove("js-clicker-button-over-100");
    buttonElement.classList.add("js-clicker-button-over-1000");
    buttonElement.innerText = "Your going to pop me..";
  } else if (
    buttonElement.innerText === "Your going to pop me.." &&
    count >= 100000
  ) {
    buttonElement.classList.remove("js-clicker-button-over-1000");
    buttonElement.classList.add("js-clicker-button-over-100000");
    buttonElement.innerText = "";
    return;
  }
}

document.querySelector(".js-clicker-button").addEventListener("click", () => {
  clickMe();
  changeClass();
});

console.log(buttonElement);
