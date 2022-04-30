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
                <h3>${treatment.name}</h3>
                <p> Część ciała: ${treatment.area}</p>
                <p> Czas trwania: ${treatment.time} minut</p>
                <p>
                    <strong>Cena: ${treatment.price.toFixed(2)} PLN</strong>
                </p>
                <p>Ocena gości: ${treatment.opinion}</p>
                <footer></footer>
            `;

      article.firstElementChild.setAttribute("class", "first");

      section.querySelector("p").remove();
      section.append(article);
    });

  return section;
}
