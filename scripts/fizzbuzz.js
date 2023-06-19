const fizzBuzzInputElement = document.querySelector(".fizzbuzz-input-js");

const fizzBuzzPlayButtonElement = document.querySelector(
  ".fizzbuzz-play-button"
);

const displayResult = document.querySelector(".display-result-js");

function fizzBuzz(answer) {
  answer = parseInt(fizzBuzzInputElement.value);
  let result = "";

  for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += "FizzBuzz";
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      result += "Fizz";
      console.log("Fizz");
    } else if (i % 5 === 0) {
      result += "Buzz";
      console.log("Buzz");
    } else {
      result = "";
      console.log(i);
    }
  }

  displayResult.innerHTML = result;

  return answer;
}

fizzBuzzPlayButtonElement.addEventListener("click", () => {
  fizzBuzz();
});
