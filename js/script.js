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

// Remove notifications when the user clicks on 'x'
notifications.addEventListener("click", (e) => {
  const theTarget = e.target;
  if (theTarget.tagName === "SPAN") {
    theTarget.parentNode.remove();
  }

  /* 
   If notifications is less than 1, remove alert icon
   then display 'No new message alert'.
  */

  if (notificationsMsg.length < 1) {
    iconAlert.style.display = "none";

    const notificationsMsg = document.querySelector("#js-notifications-msg ul");
    const newEl = document.createElement("LI");
    newEl.textContent = `No recent notifications`;
    notificationsMsg.appendChild(newEl);
  }
});

/* ****************************** ALERT BANNER ****************************** */
const alertBanner = document.querySelector("#js-alert");

alertBanner.innerHTML = `
  <div class="alert-banner">
  <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete.</p>
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

/* ***************************** FORM VALIDATION **************************** */
const form = document.querySelector("#js-form");
const userName = document.querySelector("#js-name");
const userMsg = document.querySelector("#js-message");
const inputError = document.querySelector("#js-input-error");
const textAreaError = document.querySelector("#js-textarea-error");
const success = document.querySelector("#js-success");

form.addEventListener("click", (e) => {
  const theTarget = e.target;
  if (theTarget.tagName === "BUTTON") {
    if (userName.value === "") {
      inputError.innerHTML = `<p class="js-error">This field is required!</p>`;
      userName.style.border = "1px solid red";
    } else {
      inputError.innerHTML = "";
      userName.style.border = "1px solid black";
    }
    if (userMsg.value === "") {
      textAreaError.innerHTML = `<p class="js-error">This field is required!<p/>`;
      userMsg.style.border = "1px solid red";
    } else {
      textAreaError.innerHTML = "";
      userMsg.style.border = "1px solid black";
    }
    if (userName.value !== "" && userMsg.value !== "") {
      success.innerHTML = `<p class="js-close">Message successfully sent to: ${userName.value}<span class="js-close-alert">&times;</span></p>`;
    } else {
      success.innerHTML = "";
    }
  }
});

// Click on 'x' to close success alert message.
document.querySelector("#js-form").addEventListener("click", (e) => {
  const theTarget = e.target;
  if (theTarget.tagName === "SPAN") {
    theTarget.parentNode.remove();
  }
});

/* *************************** AUTOCOMPLETE SEARCH ************************** */
const listNames = document.querySelector("#js-list-names ul");
listNames.style.display = "none";

// Store members name in an array
const memberNames = [
  "Victoria Chambers",
  "Dale Byrd",
  "Dan Oliver",
  "Dawn Wood",
];

// Create "LI" element and append it to "listNames"
for (let i = 0; i < memberNames.length; i++) {
  const names = memberNames[i];
  const newEl = document.createElement("LI");
  newEl.textContent = names;
  listNames.appendChild(newEl);
}

const displayMatchedNames = () => {
  const inputValue = userName.value.toUpperCase();

  if (inputValue.length < 1) {
    listNames.style.display = "none";
  } else {
    listNames.style.display = "block";
  }

  // Iterate through "<li>" members list.
  const memberLists = listNames.querySelectorAll("li");
  for (let i = 0; i < memberLists.length; i++) {
    const name = memberLists[i].textContent.toUpperCase();
    //  If the member's name stored in <li> matches the value typed in input field, display as block else display it none.
    if (name.includes(inputValue)) {
      memberLists[i].style.display = "block";
    } else {
      memberLists[i].style.display = "none";
    }
  }
};

// Call displayMatchedNames function
userName.addEventListener("input", displayMatchedNames);

// Place the selected name in the input field
listNames.addEventListener("click", (e) => {
  const selectNames = e.target.textContent;

  const memberLists = document.querySelector("#js-list-names ul").children;
  for (let i = 0; i < memberLists.length; i++) {
    userName.value = selectNames;
    listNames.style.display = "none";
  }
});

/* ****************************** LOCAL STORAGE ***************************** */
const notificationsBtn = document.querySelector("#js-notifications-btn");
const profileBtn = document.querySelector("#js-profile-btn");
const timeZone = document.querySelector("#js-timezone");
const alertMsg = document.querySelector("#js-alert-msg");
const saveBtn = document.querySelector("#js-save-button");
const clearBtn = document.querySelector("#js-clear-button");

// Listen to 'click' on save button
saveBtn.addEventListener("click", () => {
  const email = notificationsBtn.checked;
  const profile = profileBtn.checked;

  //  Add key and value to localStorage.
  if (email) {
    localStorage.setItem("email", true);
  } else {
    localStorage.setItem("email", false);
  }
  if (profile) {
    localStorage.setItem("profile", true);
  } else {
    localStorage.setItem("profile", false);
  }

  localStorage.setItem("timezone", timeZone.selectedIndex);

  // Display message
  alertMsg.innerHTML = `<p class="js-close">Settings successfully saved!<span class="js-close-alert">&times;</span></p>`;
});

/* 
  This function will apply the settings when the page is loaded.
  Retrieve a value by the key from localStorage.
*/
const load = () => {
  // Email setting
  if (localStorage.getItem("email") === "true") {
    notificationsBtn.checked = true;
  } else {
    notificationsBtn.checked = false;
  }
  // Profile Setting
  if (localStorage.getItem("profile") === "true") {
    profileBtn.checked = true;
  } else {
    profileBtn.checked = false;
  }
  // Timezone setting
  if (localStorage.getItem("timezone") === "1") {
    timeZone.selectedIndex = 1;
  } else if (localStorage.getItem("timezone") === "2") {
    timeZone.selectedIndex = 2;
  } else if (localStorage.getItem("timezone") === "3") {
    timeZone.selectedIndex = 3;
  } else if (localStorage.getItem("timezone") === "4") {
    timeZone.selectedIndex = 4;
  }
};

/*
  Listen to 'click' on cancel button. 
  Reset the settings back to default.
*/
clearBtn.addEventListener("click", () => {
  if (localStorage.getItem("email") === "true") {
    localStorage.setItem("email", (notificationsBtn.checked = false));
  }
  if (localStorage.getItem("profile") === "true") {
    localStorage.setItem("profile", (profileBtn.checked = false));
  }
  if (localStorage.getItem("timezone") > "0") {
    localStorage.setItem("timezone", (timeZone.selectedIndex = "0"));
  }

  // Display message
  alertMsg.innerHTML = `<p class="js-close-red">Settings restored to default!<span class="js-close-alert">&times;</span></p>`;
});

// Click on 'x' to close settings alert message.
document.querySelector(".close").addEventListener("click", (e) => {
  const theTarget = e.target;
  if (theTarget.className === "js-close-alert") {
    theTarget.parentNode.remove();
  }
});

/*
   This function will apply the settings that the user selects 
   and stays the same even after a page refresh. 
*/
load();
