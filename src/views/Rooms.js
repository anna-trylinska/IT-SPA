import { cartManager } from "../cart/cart-manager";
import { Button } from "../common/Button";
import { RoomDetails } from "./RoomDetails";

export function Rooms() {
    const section = document.createElement('section');

    section.innerHTML = `
        <h2>Pokoje</h2>
        <p>Loading...</p>
        <ul></ul>
    `;

    fetch('http://localhost:3000/rooms')
        .then(response => response.json())
        .then(rooms => {
            const lis = rooms.map(room => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <h4>${room.name}</h4>
                    <p>${room.price.toFixed(2)} PLN</p>
                    <footer></footer>
                `;

                const seeMoreButton = Button({
                    text: 'Zobacz więcej',
                    callback: () => {
                        const navigateEvent = new CustomEvent('navigate', {
                            detail: () => RoomDetails(room.id)
                        });
                    
                        document.body.dispatchEvent(navigateEvent);
                    }
                
                });

            const addToCartButton = Button({
                text: '🧺',
                callback: () => {
                    cartManager.addItem(room);
                }
            })

                li.lastElementChild.append(seeMoreButton, addToCartButton);

                return li;
            });

            section.querySelector('p').remove();
            section.lastElementChild.append(...lis);
        });

    return section;
}