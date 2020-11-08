"use strict";

let neutral = false;
let sandwichLine = document.getElementsByClassName("sandwich-line");
let menu = document.getElementById("header-menu");

function openMobileMenu() {
  if (neutral === false) {
    menu.classList.add("active");
    sandwichLine[0].classList.add("active");
    sandwichLine[1].classList.add("active");
    sandwichLine[2].classList.add("active");
    neutral = true;
  } else {
    menu.classList.remove("active");
    sandwichLine[0].classList.remove("active");
    sandwichLine[1].classList.remove("active");
    sandwichLine[2].classList.remove("active");
    neutral = false;
  }
}