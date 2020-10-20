/* *************************** ALERT NOTIFICATIONS ************************** */
const notifications = document.querySelector('#js-notifications');
const iconBell = document.querySelector('#js-icon-bell');
const iconAlert = document.querySelector('#js-icon-red');
const notificationsMsg = document.querySelector('#js-notifications-msg ul')
  .children;
const clearAll = document.querySelector('#js-notifications-msg').children;
const removeNotifications = document.querySelector('.clear-not');

// Display
const display = (element, style) => (element.style.display = style);
// Border
const border = (element, style) => (element.style.border = style);
// Opacity
const opacity = (element, style) => (element.style.opacity = style);

// Adding click event on a Bell icon
iconBell.addEventListener('click', () => {
  if (notifications.style.display === 'block') {
    display(notifications, 'none');
  } else {
    display(notifications, 'block');
  }
});

// Remove notifications when the user clicks on 'x' or clear all
notifications.addEventListener('click', e => {
  const theTarget = e.target;
  if (theTarget.tagName === 'SPAN') {
    theTarget.parentNode.remove();
  } else if (theTarget.tagName === 'P') {
    removeNotifications.parentNode.remove();
  }

  /* 
   If notifications is < 2, OR
   if clearAll length is < 1, 
   remove alert icon and
   then display 'No recent notifications'.
  */

  if (notificationsMsg.length < 2 || clearAll.length < 1) {
    display(iconAlert, 'none');
    display(removeNotifications, 'none');

    const notificationsMsg = document.querySelector('#js-notifications-msg');
    const ulEl = document.createElement('UL');
    const liEl = document.createElement('LI');

    liEl.textContent = `No recent notifications`;
    notificationsMsg.appendChild(ulEl);
    ulEl.appendChild(liEl);
  }
});

/* ****************************** ALERT BANNER ****************************** */
const alertBanner = document.querySelector('#js-alert');

alertBanner.innerHTML = `
  <div class="alert-banner">
  <p>Alert: You have 6 overdue tasks to complete.</p>
  <p class="alert-banner-close">&times;</p>
  </div>
`;

// Event listener added
alertBanner.addEventListener('click', e => {
  const element = e.target;
  opacity(element.parentNode.parentNode, '0');

  if (element.classList.contains('alert-banner-close')) {
    setTimeout(() => {
      display(alertBanner, 'none');
    }, 600);
  }
});

/* ***************************** FORM VALIDATION **************************** */
const form = document.querySelector('#js-form');
const userName = document.querySelector('#js-name');
const userMsg = document.querySelector('#js-message');
const inputError = document.querySelector('#js-input-error');
const textAreaError = document.querySelector('#js-textarea-error');
const success = document.querySelector('#js-success');

form.addEventListener('click', e => {
  const theTarget = e.target;
  if (theTarget.tagName === 'BUTTON') {
    if (userName.value === '') {
      inputError.innerHTML = `<p class="js-error">This field is required!</p>`;
      border(userName, '1px solid red');
    } else {
      inputError.innerHTML = '';
      border(userName, '1px solid black');
    }
    if (userMsg.value === '') {
      textAreaError.innerHTML = `<p class="js-error">This field is required!<p/>`;
      border(userMsg, '1px solid red');
    } else {
      textAreaError.innerHTML = '';
      border(userMsg, '1px solid black');
    }
    if (userName.value !== '' && userMsg.value !== '') {
      success.innerHTML = `<p class="js-close">Message successfully sent to - ${userName.value}<span class="js-close-alert">&times;</span></p>`;
    } else {
      success.innerHTML = '';
    }
  }
});

// Click on 'x' to close success alert message.
document.querySelector('#js-form').addEventListener('click', e => {
  const theTarget = e.target;

  if (theTarget.tagName === 'SPAN') {
    theTarget.parentNode.remove();
  }
});

/* *************************** AUTOCOMPLETE SEARCH ************************** */
const listNames = document.querySelector('#js-list-names ul');
display(listNames, 'none');

// Store members name in an array
const memberNames = [
  'Victoria Chambers',
  'Dale Byrd',
  'Dan Oliver',
  'Dawn Wood',
  'Rabin Gharti Magar',
];

// Create "LI" element and append it to "listNames"
for (let i = 0; i < memberNames.length; i++) {
  const names = memberNames[i];
  const newEl = document.createElement('LI');
  newEl.textContent = names;
  listNames.appendChild(newEl);
}

const displayMatchedNames = () => {
  const inputValue = userName.value.toUpperCase();

  if (inputValue.length < 1) {
    display(listNames, 'none');
  } else {
    display(listNames, 'block');
  }

  // Iterate through "<li>" members list.
  const memberLists = listNames.querySelectorAll('li');
  for (let i = 0; i < memberLists.length; i++) {
    const name = memberLists[i].textContent.toUpperCase();
    //  If the member's name stored in <li> matches the value typed in input field, display as block else display it none.
    if (name.includes(inputValue)) {
      display(memberLists[i], 'block');
    } else {
      display(memberLists[i], 'none');
    }
  }
};

// Call displayMatchedNames function
userName.addEventListener('input', displayMatchedNames);

// Place the selected name in the input field
listNames.addEventListener('click', e => {
  const selectNames = e.target.textContent;

  const memberLists = document.querySelector('#js-list-names ul').children;
  for (let i = 0; i < memberLists.length; i++) {
    userName.value = selectNames;
    display(listNames, 'none');
  }
});

/* ****************************** LOCAL STORAGE ***************************** */
const notificationsBtn = document.querySelector('#js-notifications-btn');
const profileBtn = document.querySelector('#js-profile-btn');
const timeZone = document.querySelector('#js-timezone');
const alertMsg = document.querySelector('#js-alert-msg');
const saveBtn = document.querySelector('#js-save-button');
const clearBtn = document.querySelector('#js-clear-button');

// Listen to 'click' on save button
saveBtn.addEventListener('click', () => {
  const email = notificationsBtn.checked;
  const profile = profileBtn.checked;

  //  Add key and value to localStorage.
  if (email) {
    localStorage.setItem('email', true);
  } else {
    localStorage.setItem('email', false);
  }
  if (profile) {
    localStorage.setItem('profile', true);
  } else {
    localStorage.setItem('profile', false);
  }

  localStorage.setItem('timezone', timeZone.selectedIndex);

  // Display message
  alertMsg.innerHTML = `
  <p class="js-close">Settings successfully saved!<span class="js-close-alert">&times;</span></p>
  `;
});

/* 
  This function will apply the settings when the page is loaded.
  Retrieve a value by the key from localStorage.
*/
const load = () => {
  // Email setting
  if (localStorage.getItem('email') === 'true') {
    notificationsBtn.checked = true;
  } else {
    notificationsBtn.checked = false;
  }
  // Profile Setting
  if (localStorage.getItem('profile') === 'true') {
    profileBtn.checked = true;
  } else {
    profileBtn.checked = false;
  }
  // Timezone setting
  if (localStorage.getItem('timezone') === '1') {
    timeZone.selectedIndex = 1;
  } else if (localStorage.getItem('timezone') === '2') {
    timeZone.selectedIndex = 2;
  } else if (localStorage.getItem('timezone') === '3') {
    timeZone.selectedIndex = 3;
  } else if (localStorage.getItem('timezone') === '4') {
    timeZone.selectedIndex = 4;
  }
};

/*
  Listen to 'click' on cancel button. 
  Reset the settings back to default.
*/
clearBtn.addEventListener('click', () => {
  if (localStorage.getItem('email') === 'true') {
    localStorage.setItem('email', (notificationsBtn.checked = false));
  }
  if (localStorage.getItem('profile') === 'true') {
    localStorage.setItem('profile', (profileBtn.checked = false));
  }
  if (localStorage.getItem('timezone') > '0') {
    localStorage.setItem('timezone', (timeZone.selectedIndex = '0'));
  }

  // Display message
  alertMsg.innerHTML = `
  <p class="js-close-red">Settings restored to default!<span class="js-close-alert">&times;</span></p>
  `;
});

// Click on 'x' to close settings alert message.
document.querySelector('#js-alert-msg').addEventListener('click', e => {
  const theTarget = e.target;
  if (theTarget.className === 'js-close-alert') {
    theTarget.parentNode.remove();
  }
});

/*
   This function will apply the settings that the user selects 
   and stays the same even after a page refresh. 
*/
load();
