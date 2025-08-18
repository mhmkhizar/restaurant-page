import { createElement } from "./utils/utility";

const content = {
  heading: `Get In Touch`,
  aboutUs: {
    title: `About Us`,
    text: `Founded in 2015, The Flavor Haven brings together culinary traditions from around the world under one roof. Our chefs use only the freshest ingredients, ensuring every plate is a masterpiece. Whether you're here for a casual lunch or a special occasion, we promise a memorable dining experience.`,
  },
  contactInfo: {
    title: `Contact Info`,
    text: {
      address: `<b>📍 Address:</b> 123 Culinary Street, Foodie City`,
      phone: `<b>📞 Phone:</b>
              <a
                class="link"
                href="tel:+15551234567"
                target="_blank"
                noopener
                noreferrer
                >+1 (555) 123-4567</a
              >`,
      email: `<b>📧 Email:</b>
              <a
                class="link"
                href="mailto:hello@flavorhaven.com"
                target="_blank"
                noopener
                noreferrer
                >hello@flavorhaven.com</a
              >`,
    },
  },
  timings: {
    title: `Opening Hours`,
    text: {
      workdays: `<b>Mon-Fri:</b> 11:00 AM - 10:00 PM`,
      weekend: `<b>Sat-Sun:</b> 09:00 AM - 11:00 PM`,
    },
  },
};

function loadAbout() {
  const contentContainer = document.querySelector(`#content`);
  contentContainer.className = ``;
  contentContainer.classList.add(`about-content`);
  const heading = createElement(`h1`, `heading`);
  const cardsContainer = createElement(`section`, `cards-container`);

  const aboutUsCard = createElement(`div`, `card`);
  const aboutUsTitle = createElement(`h3`, `title`);
  const aboutUsText = createElement(`p`, `text`);
  aboutUsTitle.textContent = content.aboutUs.title;
  aboutUsText.textContent = content.aboutUs.text;
  aboutUsCard.append(aboutUsTitle, aboutUsText);

  const contactCard = createElement(`div`, `card`);
  const contactTitle = createElement(`h3`, `title`);
  const contactAddress = createElement(`p`, `text`);
  const contactPhone = createElement(`p`, `text`);
  const contactEmail = createElement(`p`, `text`);
  contactTitle.textContent = content.contactInfo.title;
  contactAddress.innerHTML = content.contactInfo.text.address;
  contactPhone.innerHTML = content.contactInfo.text.phone;
  contactEmail.innerHTML = content.contactInfo.text.email;
  contactCard.append(contactTitle, contactAddress, contactPhone, contactEmail);

  const timingsCard = createElement(`div`, `card`);
  const timingsTitle = createElement(`h3`, `title`);
  const timingsWorkdays = createElement(`p`, `text`);
  const timingsWeekend = createElement(`p`, `text`);
  timingsTitle.textContent = content.timings.title;
  timingsWorkdays.innerHTML = content.timings.text.workdays;
  timingsWeekend.innerHTML = content.timings.text.weekend;
  timingsCard.append(timingsTitle, timingsWorkdays, timingsWeekend);

  cardsContainer.append(aboutUsCard, contactCard, timingsCard);
  contentContainer.append(heading, cardsContainer);
}

export { loadAbout };
