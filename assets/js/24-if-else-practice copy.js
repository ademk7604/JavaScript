let mode = "light";
const bodyEl = document.querySelector("body");
function SetMode() {
    if (mode == "light") {
        bodyEl.classList.remove("light");
        bodyEl.classList.add("dark");
    }
    else {
        bodyEl.classList.remove("dark");
        bodyEl.classList.add("light");
        mode = "light";
    }
}