import "./styles.css";

showHome();

async function showHome() {
  const module = await import("./home/home.js");
  module.loadHome();
}
