/* *************************** ALERT NOTIFICATIONS ************************** */
const notifications = document.querySelector("#js-notifications");
const iconBell = document.querySelector("#js-icon-bell");
const iconAlert = document.querySelector("#js-icon-red");
const notificationsMsg = document.querySelector("#js-notifications-msg ul")
  .children;

// Hide notification
notifications.style.display = "none";

// Adding click event on a Bell icon
iconBell.addEventListener("click", () => {
  if (notifications.style.display === "none") {
    notifications.style.display = "block";
  } else {
    notifications.style.display = "none";
  }
});

notifications.addEventListener("click", (e) => {
  const theTarget = e.target;
  if (theTarget.tagName === "SPAN") {
    theTarget.parentNode.remove();
  }

  // If notification is less than 1, remove alert icon.
  if (notificationsMsg.length < 1) {
    iconAlert.style.display = "none";
  }
});

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
    setTimeout(function () {
      alertBanner.style.display = "none";
    }, 1000);
  }
});
