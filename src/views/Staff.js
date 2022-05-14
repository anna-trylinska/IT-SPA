export function Staff() {
  const section = document.createElement("section");

  section.innerHTML = `
    <h2>Pracownicy</h2>
    <p>Loading...</p>
    <ul></ul>
    `;
  fetch("http://localhost:3000/staff")
    .then((response) => response.json())
    .then((staff) => {
      const list = staff.map((staff) => {
        const li = document.createElement("li");
        li.innerHTML = `
                <h4>${staff.name}</h4>
                <p class="text">${staff.description}</p>
                <p>Ocena gości: ${staff.opinion} </p>
                <footer></footer>
                `;

        li.firstElementChild.setAttribute("class", "first");
        li.lastElementChild.setAttribute("class", "footer-bottom");
        return li;
      });

      section.querySelector("p").remove();
      section.lastElementChild.append(...list);
    });

  return section;
}
