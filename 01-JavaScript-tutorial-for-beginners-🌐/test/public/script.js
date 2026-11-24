const clock = document.getElementById("clock");
const date = document.getElementById("date");

function updateClock() {
  const now = new Date();

  // Add a zero before numbers smaller than 10, like 09:05:02.
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  clock.textContent = `${hours}:${minutes}:${seconds}`;
  date.textContent = now.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

// Show the time straight away, then update it every second.
updateClock();
setInterval(updateClock, 1000);
