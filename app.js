"use strict";

window.addEventListener("load", initApp);

function initApp() {
  // Event Listeners
  document.querySelector("#form-create").addEventListener("submit", createUser);
}

function createUser(event) {
  event.preventDefault();

  const name = this.name.value;
  const title = this.title.value;
  const mail = this.mail.value;
  const image = this.image.value;
  const age = this.age.value;
  const userName = this.userName.value;

  console.log(name);
  console.log(title);
  console.log(mail);
  console.log(image);
  console.log(age);
  console.log(userName);

  validateUser(name, title, mail, image, userName, age);
}

function validateUser(name, title, mail, image, userName, age) {
  if (
    (name.length > 2 &&
      title &&
      ((mail.length > 6 && mail.length < 20) || userName) &&
      image &&
      age > 18) == true
  ) {
    document.querySelector("h4").textContent = "This is a valid user";
    document.querySelector("h4").classList.add("greentext");
  } else document.querySelector("h4").textContent = "This is an invalid user";
  document.querySelector("h4").classList.add("redtext");
}
