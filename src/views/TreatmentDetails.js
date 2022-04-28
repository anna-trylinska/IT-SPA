export function TreatmentDetails(id) {
    const section = document.createElement('section');

    section.innerHTML = `
        <h2>Zabiegi</h2>
        <p>Loading...</p>
    `;

    fetch(`http://localhost:3000/treatments/${id}`)
        .then(response => response.json())
        .then(treatment => {
            const article = document.createElement('article');
            
            article.innerHTML = `
                <h3>${treatment.name}</h3>
                <p> Część ciała: ${treatment.area}</p>
                <p> Czas trwania: ${treatment.time} minut</p>
                <p>
                    <strong>Cena: ${treatment.price.toFixed(2)} PLN</strong>
                </p>
            `;

            section.querySelector('p').remove();
            section.append(article);
        });

    return section;
}