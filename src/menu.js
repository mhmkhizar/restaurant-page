import { createElement } from "./utils/utility.js";

const content = {
  heading: `Our Signature Dishes`,
  dish1: {
    title: `Truffle Mushroom Risotto`,
    description: `Creamy arborio rice infused with white truffle oil, topped with sautéed wild mushrooms and parmesan shavings.`,
  },
  dish2: {
    title: `Charcoal-Grilled Salmon`,
    description: `Fresh Atlantic salmon grilled to perfection, served with a tangy lemon butter sauce and seasonal vegetables.`,
  },
  dish3: {
    title: `Classic Margherita Pizza`,
    description: `Hand-tossed dough with fresh mozzarella, vine-ripened tomatoes, and a drizzle of extra virgin olive oil.`,
  },
  dish4: {
    title: `Spicy Thai Basil Noodles`,
    description: `Stir-fried rice noodles with fresh basil, chili, and a savory house-made sauce—an explosion of Asian flavors.`,
  },
  dish5: {
    title: `Chocolate Lava Cake`,
    description: `A decadent molten chocolate dessert served with vanilla bean ice cream.`,
  },
  dish6: {
    title: `Garlic Butter Lobster Tail`,
    description: `Succulent lobster tails brushed with rich garlic butter and grilled to perfection, served with a side of lemon wedges.`,
  },
  dish7: {
    title: `Mediterranean Grilled Lamb Chops`,
    description: `Tender lamb chops marinated in Mediterranean herbs, flame-grilled and served with a side of roasted vegetables and mint yogurt sauce.`,
  },
  dish8: {
    title: `Creamy Pesto Pasta`,
    description: `Fresh linguine tossed in a velvety basil pesto sauce, finished with sun-dried tomatoes and grated parmesan.`,
  },
  dish9: {
    title: `Smoky BBQ Ribs`,
    description: `Slow-cooked pork ribs glazed with our signature smoky barbecue sauce, served with crispy potato wedges and coleslaw.`,
  },
};

function loadMenu() {
  const contentContainer = document.querySelector(`#content`);
  contentContainer.className = ``;
  contentContainer.classList.add(`menu-content`);

  const heading = createElement(`h1`, `heading`);
  const menuContainer = createElement(`section`, `menu-container`);

  heading.textContent = content.heading;
  contentContainer.appendChild(heading);

  for (let key in content) {
    if (!key.startsWith(`dish`)) continue;

    const dishCard = createElement(`div`, `dish-card`);
    const dishTitle = createElement(`h3`, `dish-title`);
    const dishDescription = createElement(`p`, `dish-description`);

    dishTitle.textContent = content[key].title;
    dishDescription.textContent = content[key].description;
    dishCard.append(dishTitle, dishDescription);
    menuContainer.appendChild(dishCard);
  }

  contentContainer.appendChild(menuContainer);
}

export { loadMenu };
