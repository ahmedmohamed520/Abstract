"use strict";
const searchNav = document.querySelector(".search-nav");
const searchNavCloseBtn = document.querySelector(".close-search");
const searchBtn = document.querySelector(".search-icon");
const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

searchNavCloseBtn.addEventListener("click", () => {
    searchNav.classList.add("hide-search-nav");
});
searchBtn.addEventListener("click", () => {
    searchNav.classList.remove("hide-search-nav");
});
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("d-block");
    menuBtn.classList.toggle("open");
    nav.classList.toggle("menu-color");
});
