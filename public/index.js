const btnChangeModeNavBar = document.querySelector("#btn_change_mode_navbar");
const btnChangeMode = document.querySelector("#btn_change_mode");
const htmlElement = document.querySelector("html");

btnChangeModeNavBar.addEventListener("click", () => {
  htmlElement.classList.contains("dark")
    ? htmlElement.classList.remove("dark")
    : htmlElement.classList.add("dark");
});

btnChangeMode.addEventListener("click", () => {
  htmlElement.classList.contains("dark")
    ? htmlElement.classList.remove("dark")
    : htmlElement.classList.add("dark");
});
