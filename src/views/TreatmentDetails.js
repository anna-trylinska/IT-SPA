import { Button } from "../common/Button";
import {Treatments} from "./Treatments";

export function TreatmentDetails(id) {
  const section = document.createElement("section");

  section.innerHTML = `
        <h2>Zabieg</h2>
        <p>Loading...</p>
    `;

  fetch(`http://localhost:3000/treatments/${id}`)
    .then((response) => response.json())
    .then((treatment) => {
      const article = document.createElement("article");

      article.innerHTML = `
                <h4>${treatment.name}</h4>
                <p> Część ciała: ${treatment.area}</p>
                <p> Czas trwania: ${treatment.time} minut</p>
                <p>
                    <strong>Cena: ${treatment.price.toFixed(2)} PLN</strong>
                </p>
                <p>Ocena gości: ${treatment.opinion}</p>
                <footer></footer>
            `;

            const TreatmentButton = Button({
              text: "Wstecz",
              callback: () => {
                const navigateEvent = new CustomEvent("navigate", {
                  detail: () => Treatments(),
                });
    
                document.body.dispatchEvent(navigateEvent);
              },
            });
      
      article.firstElementChild.setAttribute("class", "first");
      article.lastElementChild.append(TreatmentButton);

      section.querySelector("p").remove();
      section.append(article);
    });

  return section;
}
