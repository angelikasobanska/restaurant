const navigation = document.querySelector(".navigation-list");
const burger = document.querySelector(".burger");
const links = navigation.querySelectorAll("a");
/*const open = document.querySelector(".open");*/

const weddingTime = new Date("2030-06-23 14:00:00").getTime();
const day = document.querySelector(".days");
const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");

burger.addEventListener("click", () => {
  navigation.classList.toggle("open");
  burger.classList.toggle("toggle");
});

links.forEach((navigationLink) => {
  navigationLink.addEventListener("click", () => {
    navigation.classList.toggle("open");
    burger.classList.toggle("toggle");
  });
});