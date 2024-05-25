document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("generate")
    .addEventListener("click", generatePassword);
});

function generatePassword() {
  var length = document.getElementById("length").value;
  var uppercase = document.getElementById("uppercase").checked;
  var lowercase = document.getElementById("lowercase").checked;
  var numbers = document.getElementById("numbers").checked;
  var symbols = document.getElementById("symbols").checked;

  if (!uppercase && !lowercase && !numbers && !symbols) {
    document.getElementById("password").value =
      "Please select at least one option";
    return;
  }

  if (length) {
    var password = generatePasswordWithOptions(
      length,
      uppercase,
      lowercase,
      numbers,
      symbols
    );
  } else {
    var password = generatePasswordWithoutOptions();
  }

  document.getElementById("password").value = password;

  if (length < 10 || length > 20) {
    document.getElementById("length").value = "";
  }
}

function generatePasswordWithOptions(
  length,
  uppercase,
  lowercase,
  numbers,
  symbols
) {
  var chars = "";
  if (uppercase) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (lowercase) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (numbers) {
    chars += "0123456789";
  }
  if (symbols) {
    chars += "!@#$%^&*()_+";
  }

  var password = "";

  for (var i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
}
function copyToClipboard() {
    const passwordInput = document.getElementById("password");
    const password = passwordInput.value;
  
    if (!password || password === "Please select at least one option") {
      showFalseNotification();
      return;
    }
  
    navigator.clipboard.writeText(password).then(() => {
      showNotification();
    });
  }
  

function showNotification() {
  var notification = document.getElementById("notification");
  notification.classList.add("show");
  setTimeout(function () {
    notification.classList.remove("show");
  }, 2000);
}

function showFalseNotification() {
  var notification = document.getElementById("badpassword");
  notification.classList.add("showfalse");
  setTimeout(function () {
    notification.classList.remove("showfalse");
  }, 2000);
}
