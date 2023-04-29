const toggleBtn = document.getElementById("toggle-btn");
const body = document.body;
const followDropdown = document.querySelector(".follow-dropdown");
const followBtn = document.querySelector(".follow-btn");

// Set the initial mode to dark mode
body.classList.add("dark-mode");
toggleBtn.checked = true;

// Get the current time and display it in the webpage
function updateTime() {
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  document.getElementById("current-time").textContent = currentTime;
}

// Call the updateTime() function every second
setInterval(updateTime, 1000);

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleBtn.disabled = true;
    setTimeout(() => {
      body.classList.toggle("dark-mode");
      toggleBtn.checked = false;
      toggleBtn.disabled = false;
    }, 3000);
  } else {
    toggleBtn.disabled = true;
    setTimeout(() => {
      body.classList.toggle("dark-mode");
      toggleBtn.checked = true;
      toggleBtn.disabled = false;
    }, 3000);
  }
});

followBtn.addEventListener("click", function () {
  followDropdown.classList.toggle("open");
});
