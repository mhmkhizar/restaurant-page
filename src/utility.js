function createElement(name, className, id) {
  if (!name) return;
  const element = document.createElement(`${name}`);
  if (className) element.classList.add(`${className}`);
  if (id) element.id = `${id}`;
  return element;
}

const contentContainer = document.querySelector(`#contentContainer`);

export { createElement, contentContainer };
