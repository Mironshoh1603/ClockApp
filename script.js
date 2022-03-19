const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const time = document.querySelector(".time");
const date = document.querySelector(".datemonth");
const datedata = document.querySelector(".datedata");
let change = 0;
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  time.textContent = `${now.toLocaleString("uz-UZ", {
    hour: "numeric",
    minute: "numeric",
  })}`;
  date.textContent = `${now.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
  })}`;
  datedata.textContent = `${now.toLocaleString("en-US", {
    day: "numeric",
  })}`;
}
setInterval(setDate, 1000);

setDate();
document.querySelector(".btn").addEventListener("click", function () {
  if (change == 0) {
    document.querySelector(":root").style.setProperty("--back-color", "wheat");
    document.querySelector(":root").style.setProperty("--btn-color", "white");
    document.querySelector(":root").style.setProperty("--btn-back", "black");
    document.querySelector(".btn").textContent = "Black Mode";
    document
      .querySelector(":root")
      .style.setProperty("--hand-color", "#282828");
    change = 1;
  } else {
    document
      .querySelector(":root")
      .style.setProperty("--back-color", "#282828");
    document
      .querySelector(":root")
      .style.setProperty("--hand-color", "#61afff");
    document.querySelector(":root").style.setProperty("--btn-color", "black");
    document.querySelector(":root").style.setProperty("--btn-back", "white");

    change = 0;
  }
});
