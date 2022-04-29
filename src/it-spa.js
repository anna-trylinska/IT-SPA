import "bootstrap/dist/css/bootstrap.css";
import "./it-spa.scss";
import { Home } from "./views/Home";
import { Nav } from "./navigation/Nav";

const main = document.querySelector("main");

main.before(Nav());

main.append(Home());

document.body.addEventListener("navigate", (event) => {
  const component = event.detail;

  main.innerHTML = "";

  main.append(component());
});
