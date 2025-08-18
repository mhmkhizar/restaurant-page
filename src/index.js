import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

const contentContainer = document.querySelector(`#content`);

const homeButton = document.querySelector(`#homeButton`);
const menuButton = document.querySelector(`#menuButton`);
const aboutButton = document.querySelector(`#aboutButton`);

homeButton.addEventListener(`click`, (e) => {
  contentContainer.innerHTML = ``;
  loadHome();
});

menuButton.addEventListener(`click`, (e) => {
  contentContainer.innerHTML = ``;
  loadMenu();
});

aboutButton.addEventListener(`click`, (e) => {
  contentContainer.innerHTML = ``;
  loadAbout();
});

loadHome();
