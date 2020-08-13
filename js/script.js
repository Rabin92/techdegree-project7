/* *************************** ALERT NOTIFICATIONS ************************** */
const notifications = document.querySelector("#js-notifications");
const iconBell = document.querySelector("#js-icon-bell");
const closeNotifications = document.querySelectorAll("#js-close");
const iconAlert = document.querySelector("#js-icon-red");
const notificationsMsg = document.querySelector("#js-notifications-msg ul")
  .children;

// Hide notification
notifications.style.display = "none";

// Adding a click event on Bell icon
iconBell.addEventListener("click", () => {
  if (notifications.style.display === "none") {
    notifications.style.display = "block";
  } else {
    notifications.style.display = "none";
  }
});

// Looping through close, when 'x' is clicked remove notification
for (let i = 0; i < closeNotifications.length; i++) {
  const close = closeNotifications[i];
  close.addEventListener("click", () => {
    close.parentNode.remove();
    // If notification is less than 1, remove alert icon.
    if (notificationsMsg.length < 1) {
      iconAlert.style.display = "none";
    }
  });
}

/* ****************************** ALERT BANNER ****************************** */
const alertBanner = document.querySelector("#js-alert");

alertBanner.innerHTML = `
<div class="alert-banner">
<p><strong>Alert:</strong>You have <strong>6</strong> overdue tasks to complete.</p>
<p class="alert-banner-close">&times;</p>
</div>
`;

// Event listener added
alertBanner.addEventListener("click", (e) => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none";
  }
});
