let increaseText = document.querySelector("#increase");
let decreaseText = document.querySelector("#decrease");
let number = document.querySelector("#number");
let updateNumber = 0;

increaseText.addEventListener("click", function () {
  updateNumber++;
  number.textContent = updateNumber;
});

decreaseText.addEventListener("click", function () {
  if (updateNumber > 0) {
    updateNumber--;
    number.textContent = updateNumber;
  }
});
