import { cartManager } from "../cart/cart-manager";
import { Button } from "../common/Button";
import { TreatmentDetails } from "./TreatmentDetails";

export function Treatments() {
    const section = document.createElement('section');

    section.innerHTML = `
        <h2>Zabiegi</h2>
        <p>Loading...</p>
        <ul></ul>
    `;
    fetch('http://localhost:3000/treatments')
        .then(response => response.json())
        .then(treatments => {
            const list = treatments.map(treatment => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <h4>${treatment.name}</h4>
                    <p>${treatment.price.toFixed(2)} PLN</p>
                    <footer></footer>
                `;

                const seeMoreButton = Button({
                    text: 'Zobacz więcej',
                    callback: () => {
                        const navigateEvent = new CustomEvent('navigate', {
                            detail: () => TreatmentDetails(treatment.id)
                        });
                    
                        document.body.dispatchEvent(navigateEvent);
                    }
                
                });

            const addToCartButton = Button({
                text: '🧺',
                callback: () => {
                    cartManager.addItem(treatment);
                }
            })

                li.lastElementChild.append(seeMoreButton, addToCartButton);

                return li;
            });

            section.querySelector('p').remove();
            section.lastElementChild.append(...list);
        });

    return section;

}