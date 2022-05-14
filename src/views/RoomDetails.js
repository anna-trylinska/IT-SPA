import { Button } from "../common/Button";
import { Rooms } from "./Rooms";

export function RoomDetails(id) {
  const section = document.createElement("section");

  section.innerHTML = `
        <h2>Pokój</h2>
        <p>Loading...</p>
    `;

  fetch(`http://localhost:3000/rooms/${id}`)
    .then((response) => response.json())
    .then((room) => {
      const article = document.createElement("article");

      article.innerHTML = `
                <h4>${room.name}</h4>
                <p>Łóżka: ${room.beds}</p>
                <p>Goście: ${room.guests}</p>
                <p>
                    <strong>Cena: ${room.price.toFixed(2)} PLN</strong>
                </p>
                <p>Ocena gości: ${room.opinion}</p>
                <footer></footer>
            `;

            const RoomButton = Button({
              text: "Wstecz",
              callback: () => {
                const navigateEvent = new CustomEvent("navigate", {
                  detail: () => Rooms(),
                });
    
                document.body.dispatchEvent(navigateEvent);
              },
            });
      
      article.firstElementChild.setAttribute("class", "first");
      article.lastElementChild.append(RoomButton);

      section.querySelector("p").remove();
      section.append(article);
    });

  return section;
}
