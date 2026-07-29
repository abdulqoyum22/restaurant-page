import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";
import contact from "./contact.js";
import "./styles.css";

const content = document.querySelector("#content");
const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");
const contactBtn = document.querySelector(".contact-btn");


homeBtn.addEventListener("click", () => {
    content.textContent = "";
    home();
});

menuBtn.addEventListener("click", () => {
    content.textContent = "";
    menu();
});

aboutBtn.addEventListener("click", () => {
    content.textContent = "";
    about();
});

contactBtn.addEventListener("click", () => {
    content.textContent = "";
    contact();
});

console.log("Hello, this is ilovebanana!")
