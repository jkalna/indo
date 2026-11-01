// ---- Edit these two lines ----
const EVENT_NAME = "Hey baby girl, it's only";
const TARGET_DATE = new Date("2026-11-01T23:00:00"); // YYYY-MM-DDTHH:MM:SS, in her local time
// ------------------------------

const pad = (n) => String(n).padStart(2, "0");

function update() {
  const now = new Date();
  const title = document.getElementById("event-name");
  const countdown = document.getElementById("countdown");

  // The last day starts at midnight on the target date
  const startOfDay = new Date(TARGET_DATE);
  startOfDay.setHours(0, 0, 0, 0);

  if (now >= startOfDay) {
    title.textContent = "Baby girl, the wait is almost over, it's only a few more hours";
    countdown.style.display = "none";
    document.getElementById("message").textContent = "";
    return;
  }

  title.textContent = EVENT_NAME;
  countdown.style.display = "";

  const remaining = TARGET_DATE - now;
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("days-label").textContent = days === 1 ? "day" : "days";
  document.getElementById("hours-label").textContent = hours === 1 ? "hour" : "hours";
}

document.getElementById("event-name").textContent = EVENT_NAME;
update();
setInterval(update, 1000);
document.addEventListener("visibilitychange", update); // refresh instantly when she reopens the app

// Register the service worker (for offline use)
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}