export function RoomDetails(id) {
  const section = document.createElement("section");

  section.innerHTML = `
        <h2>Room</h2>
        <p>Loading...</p>
    `;

  // pobieranie pojedynczego pokoju z json-server
  fetch(`http://localhost:3000/rooms/${id}`)
    .then((response) => response.json())
    .then((room) => {
      const article = document.createElement("article");

      article.innerHTML = `
                <h3>${room.name}</h3>
                <p>Łózka: ${room.beds}</p>
                <p>Goście: ${room.guests}</p>
                <p>
                    <strong>Cena: ${room.price.toFixed(2)} PLN</strong>
                </p>
                <p>Ocena gości: ${room.opinion}</p>
            `;

      section.querySelector("p").remove();
      section.append(article);
    });

  return section;
}
