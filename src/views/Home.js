import { Reservation } from "./Reservation";

export function Home() {
    const section = document.createElement("section");

    section.innerHTML = `
        <h2 class="header-main">Witaj w IT SPA!</h2>
        <p>To ulubione SPA programistów!</p>
        <p class="bottom">Zapraszamy!</p>
    `;
    section.setAttribute('class', 'it-spa');

    section.append(Reservation());

    return section;
}


