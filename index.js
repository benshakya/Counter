const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");

let num = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const action = event.currentTarget.classList;
    if (action.contains("decrease-btn")) {
      num--;
    } else if (action.contains("increase-btn")) {
      num++;
    } else {
      num = 0;
    }
    value.textContent = num;

    if (num > 0) {
      value.style.color = "rgb(53, 230, 53)";
    } else if (num < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
  });
});
