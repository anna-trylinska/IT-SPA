import { cartManager } from "../cart/cart-manager";
import { Button } from "../common/Button";

export function Cart() {
  const section = document.createElement("section");
  section.innerHTML = `<h2>Twój koszyk</h2>`;

  const table = document.createElement("table");
  table.setAttribute("class", "table");
  table.innerHTML = `
    <thead class='bg-black'>
        <th>Nazwa</td>
        <th>Cena</th>
        <th></th>
    </thead>
    `;

  const allItems = cartManager.getAllItems();
  const tableRows = allItems.map((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price.toFixed(2)} PLN</td>
            <td></td>
        `;

    const removeItem = Button({
      text: "🗑️",
      callback: () => {
        cartManager.removeItem(item);
        tr.remove();
      },
    });

    tr.lastElementChild.append(removeItem);

    return tr;
  });

  table.append(...tableRows);
  section.append(table);
  return section;
}
