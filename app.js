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
    document.querySelector("h4").classList.remove("redtext");
    document.querySelector("h4").classList.add("greentext");
  } else {
    document.querySelector("h4").textContent = "This is an invalid user";
    document.querySelector("h4").classList.remove("greentext");
    document.querySelector("h4").classList.add("redtext");
  }

  nameValidity(name);

  titleValidity(title);

  userNameValidity(userName);

  ageValidity(age);

  mailValidity(mail);

  imageValidity(image);
}

function nameValidity(name) {
  if (name.length < 2) {
    document.querySelector("#name-validity").textContent = "Name is too short";
  } else {
    document.querySelector("#name-validity").textContent = "";
  }
}

function titleValidity(title) {
  if (title.length == 0) {
    document.querySelector("#title-validity").textContent = "No title input";
  } else {
    document.querySelector("#title-validity").textContent = "";
  }
}

function userNameValidity(userName) {
  if (userName === "") {
    document.querySelector("#userName-validity").textContent =
      "No username input";
  } else {
    document.querySelector("#userName-validity").textContent = "";
  }
}

function ageValidity(age) {
  if (!age) {
    document.querySelector("#age-validity").textContent = "No age chosen";
  } else {
    document.querySelector("#age-validity").textContent = "";
  }
}

function mailValidity(mail) {
  if (!(mail.length > 6 && mail.length < 21)) {
    document.querySelector("#mail-validity").textContent =
      "Mail input too short";
  } else {
    document.querySelector("#mail-validity").textContent = "";
  }
}

function imageValidity(image) {
  if (!image) {
    document.querySelector("#image-validity").textContent = "No image input";
  } else {
    document.querySelector("#image-validity").textContent = "";
  }
}
