let count = 0;
let numberDiv = document.querySelector(".number-div");
let gameDiv = document.querySelector(".clicker-game");

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
  const classUpdates = [
    {
      condition: () => buttonElement.innerText === "Click Me!",
      classToAdd: "clicker-button",
      classToRemove: "js-clicker-button",
      text: "Keep going.",
    },
    {
      condition: () => buttonElement.innerText === "Keep going." && count >= 10,
      classToAdd: "clicker-button-2",
      classToRemove: "clicker-button",
      text: "Okay, that's enough.",
    },
    {
      condition: () =>
        buttonElement.innerText === "Okay, that's enough." && count >= 100,
      classToAdd: "js-clicker-button-over-100",
      classToRemove: "clicker-button-2",
      text: "No seriously, stop.",
    },
    {
      condition: () =>
        buttonElement.innerText === "No seriously, stop." && count >= 1000,
      classToAdd: "js-clicker-button-over-1000",
      classToRemove: "js-clicker-button-over-100",
      text: "You're going to pop me..",
    },
    {
      condition: () =>
        buttonElement.innerText === "You're going to pop me.." &&
        count >= 100000,
      classToAdd: "js-clicker-button-over-100000",
      classToRemove: "js-clicker-button-over-1000",
      text: "-_-",
    },
  ];

  for (let i = 0; i < classUpdates.length; i++) {
    const { condition, classToAdd, classToRemove, text } = classUpdates[i];
    if (condition()) {
      buttonElement.classList.add(classToAdd);
      buttonElement.classList.remove(classToRemove);
      buttonElement.innerText = text;
      break;
    }
  }
}

function reset() {
  count = "";
  numberDiv.innerHTML = count;
  buttonElement.classList.remove("clicker-button");
  buttonElement.classList.remove("clicker-button-2");
  buttonElement.classList.remove("js-clicker-button-over-100");
  buttonElement.classList.remove("js-clicker-button-over-1000");
  buttonElement.classList.remove("js-clicker-button-over-100000");
  buttonElement.classList.add("js-clicker-button");
  buttonElement.innerText = "Click Me!";
}

function handleClick() {
  if (count >= 100000) {
    reset(); // resets if 100000 or more
  }

  clickMe();
  changeClass();
}

buttonElement.addEventListener("click", handleClick);

gameDiv.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    reset();
  }
});

console.log(buttonElement);

/*
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
*/
