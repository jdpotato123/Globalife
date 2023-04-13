// Create a function to get the current time
function getTime() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  return `${hour}:${minute}:${second}`;
}

// Update the clock every second
setInterval(() => {
  const clock = document.querySelector('.clock');
  clock.textContent = getTime();
}, 1000);