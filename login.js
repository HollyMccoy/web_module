"use strict";
//login function stores username and opens next page (index.html)
function loginPG1() {
  const userName = document.getElementById("usernameInput").value;

  if (userName == "") {
    alert("Please submit a username");
  } else {
    sessionStorage.setItem("userNameStorage", userName);
    window.location.href = "index.html";
  }
}
