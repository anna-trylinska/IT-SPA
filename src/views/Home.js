import { Calendar } from "./Calendar";

export function Home() {
  const section = document.createElement("section");

  section.innerHTML = `
        <div class="top-header"></div>
        <div class="row bgcolor">
            <div class='col d-flex justify-content-center align-items-center greeting'>
                <div class="header-main">Witaj w IT SPA!</div>
            </div>
            <div class='col d-flex justify-content-center align-items-center bg-pic'></div>
        </div>
        <div class ="top-header"></div>
    `;
  section.setAttribute("class", "it-spa");

  section.append(Calendar());

  return section;
}
