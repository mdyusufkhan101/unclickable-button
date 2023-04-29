const toggleBtn = document.getElementById("toggle-btn");
const body = document.body;
const followDropdown = document.querySelector(".follow-dropdown");
const followBtn = document.querySelector(".follow-btn");

document.addEventListener("DOMContentLoaded", () => {
  // Get the current time and display it in the webpage
  function updateTime() {
    const now = new Date();
    const hour = now.getHours();
    const currentTime = now.toLocaleTimeString();
    document.getElementById("current-time").textContent = currentTime;

    // Toggle between dark and light mode based on time
    if (hour >= 19 || hour < 6) {
      // night time
      body.classList.add("dark-mode");
    } else {
      // day time
      body.classList.remove("dark-mode");
    }

    // Update the toggle button to match the body class
    toggleBtn.checked = body.classList.contains("dark-mode");
  }

  // Set the initial state of the toggle button and body class
  body.classList.remove("dark-mode");
  toggleBtn.checked = false;

  // Call the updateTime() function every 2 seconds
  setInterval(updateTime, 1000);

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      toggleBtn.disabled = true;
      setTimeout(() => {
        body.classList.remove("dark-mode");
        toggleBtn.checked = false;
        toggleBtn.disabled = false;
      }, 2000);
    } else {
      toggleBtn.disabled = true;
      setTimeout(() => {
        toggleBtn.checked = false;
        toggleBtn.disabled = false;
      }, 2000);
    }
  });

  followBtn.addEventListener("click", function () {
    followDropdown.classList.toggle("open");
  });
});
