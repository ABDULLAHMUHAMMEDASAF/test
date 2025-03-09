document.addEventListener("DOMContentLoaded", () => {
  const result = document.querySelector(".result");
  const start = document.getElementById("start");
  const toggle = document.getElementById("toggle-nav");

  const add = document.getElementById("add");
  const reset = document.getElementById("reset");
  const subtract = document.getElementById("subtract");

  toggle.addEventListener("click", () => {
    let txt = "";
    document.querySelector(".result").classList.toggle("active");
    if (toggle.checked) {
      txt = "Sidebar menü AÇIK";
      result.style.color = "green";
    } else {
      txt = "Sidebar menü KAPALI";
      result.style.color = "red";
    }
    result.innerHTML = txt;
  });

  //? Conditional statements are used to perform different actions based on different conditions.
  //* A javascript boolean represents one of two values: true or false.
  // ! This javascript function always returns a random number between min and max (both included)
  //? Arrow functions allow us to write shorter function syntax.

  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //* Default Array
  var cars = ["Saab", "Volvo", "BMW"];
  var months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  var days = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar",
  ];

  //! Result text
  result.innerHTML = "Merhaba, Javascript!";

  const child = {
    name: "Muhammed Asaf",
    age: 3,
  };

  Object.defineProperty(child, "fullName", {
    get: function () {
      return `${this.name} ${this.age}`;
    },
  });

  const myObj = { counter: 100 };

  Object.defineProperty(myObj, "reset", {
    get: function () {
      return (this.counter = 0);
    },
  });

  Object.defineProperty(myObj, "increment", {
    get: function () {
      return this.counter++;
    },
  });

  Object.defineProperty(myObj, "decrement", {
    get: function () {
      return this.counter--;
    },
  });

  Object.defineProperty(myObj, "add", {
    set: function (value) {
      return (this.counter += value);
    },
  });

  Object.defineProperty(myObj, "subtract", {
    set: function (value) {
      return (this.counter -= value);
    },
  });

  add.addEventListener("click", () => {
    myObj.increment;
    result.innerHTML = myObj.counter;
  });

  subtract.addEventListener("click", () => {
    myObj.decrement;
    result.innerHTML = myObj.counter;
  });

  reset.addEventListener("click", () => {
    myObj.reset;
    result.innerHTML = myObj.counter;
  });

  //!------------------ END ----------------------------
});

//! All properties have a name. In addition they also have a value.
