import { Calendar } from "./Calendar";

export function Home() {
  const section = document.createElement("section");

  section.innerHTML = `
        <div class="top-header"></div>
        <div class="row bgcolor">
            <div class='col-6 d-flex justify-content-center align-items-center greeting'>
                <div class="header-main">Witaj w IT SPA!</div>
            </div>
            <div class='col-6 d-flex justify-content-center align-items-center'><img src="https://pixabay.com/get/gc53af1989b48d3fcbc34a677a7218e8ac70ce60761cd7d73ae98c4f6a57f3179556d354a6a23408acf4167c8d27d5e2176af2faded14be0be9fbff37deeedf8fe380f99685caa0421bb64418d03af53f_1920.jpg" alt="soap" width=80% >
            </div>
        </div>
        <div class ="top-header"></div>
    `;
  section.setAttribute("class", "it-spa");

  section.append(Calendar());

  return section;
}
