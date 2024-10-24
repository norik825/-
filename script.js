const birthday = document.querySelector(".birthday_items");
const header = document.getElementById("header");
const end = document.getElementById("end");
const dark = document.getElementById("dark");
const white = document.getElementById("white");

dark.addEventListener("click", () => {
  header.style.backgroundColor = "black";
});

white.addEventListener("click", () => {
  header.style.backgroundColor = "brown";
});

dark.addEventListener("click", () => {
  birthday.style.backgroundColor = "black";
});

white.addEventListener("click", () => {
  birthday.style.backgroundColor = "brown";
});

dark.addEventListener("click", () => {
  end.style.backgroundColor = "black";
});

white.addEventListener("click", () => {
  end.style.backgroundColor = " #96c9f4";
});
