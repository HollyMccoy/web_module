"use strict";

function loginPG1() {
  const userName = document.getElementById("usernameInput").value;

  if (userName == "") {
    alert("Please submit a username");
  } else {
    sessionStorage.setItem("userNameStorage", userName);
    window.location.href = "index.html";
  }
}
