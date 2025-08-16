import { createElement, contentContainer } from "../utility.js";
import "./home.css";

const content = {
  heading: `Welcome to The Flavor Haven`,
  subHeading: `Where Every Bite is an Experience`,
  text: `Step into a world of flavors crafted with passion and precision. At
            The Flavor Haven, we believe that dining is more than just
            eating—it's about savoring every detail, from the first sip to the
            last bite. Enjoy a cozy, elegant atmosphere paired with dishes
            inspired by global cuisines.`,
};

function loadHome() {
  const heading = createElement(`h2`, `heading`);
  const subHeading = createElement(`h3`, `sub-heading`);
  const para = createElement(`p`, `text`);

  heading.textContent = content.heading;
  subHeading.textContent = content.subHeading;
  para.textContent = content.text;

  contentContainer.append(heading, subHeading, para);
}

export { loadHome };
