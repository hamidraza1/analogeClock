setInterval(clock, 1000);

const secondHand = document.querySelector("[data-second]");
const minutesHand = document.querySelector("[data-minute]");
const hourHand = document.querySelector("[data-hour]");

function clock() {
  const currentDate = new Date();
  let secondsRatio = currentDate.getSeconds() / 60;
  let minutesRatio = currentDate.getMinutes() / 60;
  let hoursRatio = currentDate.getHours() / 12;
  secondHand.style.transform = `rotate(${360 * secondsRatio}deg)`;
  minutesHand.style.transform = `rotate(${360 * minutesRatio}deg)`;
  hourHand.style.transform = `rotate(${360 * hoursRatio}deg)`;
  console.log(secondsRatio);
}
