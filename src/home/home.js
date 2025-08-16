import { createElement } from "../index.js";
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

const section = createElement(`section`, `hero-section`);
const h2 = createElement(`h2`, `heading`);
const h3 = createElement(`h3`, `sub-heading`);
const p = createElement(`p`, `text`);

h2.textContent = content.heading;
h3.textContent = content.subHeading;
p.textContent = content.text;

section.append(h2, h3, p);

export { section };
