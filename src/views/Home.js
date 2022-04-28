import { Calendar } from "./Calendar";

export function Home() {
    const section = document.createElement("section");
    const soap = "soap";

    section.innerHTML = `
        <div class="top-header"></div>
        <div class="row bgcolor">
            <div class='col-6 d-flex justify-content-center align-items-center greeting'>
                <div class="header-main">Witaj w IT SPA!</div>
            </div>
            <div class='col-6 d-flex justify-content-center align-items-center'><img src="https://pixabay.com/get/gb12601fda3a9ed691dcce597fae1e3c91130906fbe310ac53f697b4b03690181d9f3d0e09275d3353266bd25c2f3bf78b299de4ac13ba26f7a70fab22a86ef0ca9ca200f83830dcfd5d87b7dd212b97d_1280.jpg" alt="soap" width=80% >
            </div>
        </div>
        <div class ="top-header"></div>
    `;
    section.setAttribute('class', 'it-spa');

    section.append(Calendar());

    return section;
}



