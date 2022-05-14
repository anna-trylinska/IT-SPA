import { Button } from "../common/Button";
import { Rooms } from "./Rooms";
import { Treatments } from "./Treatments";

export function Calendar() {
  const section = document.createElement("section");

  let today = new Date();
  let nextYear = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  let yyyy1 = today.getFullYear() + 1;
  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;
  nextYear = yyyy1 + "-" + mm + "-" + dd;

  section.innerHTML = `
    <div class='welcome'>Nasze SPA to ulubione miejsce wszystkich programistów!</div>
    <div class='welcome'>Zarezerwuj pobyt w IT SPA już dzisiaj i odetchnij!</div>
    <div class='row'>
        <div class='col-6 d-flex justify-content-center align-items-center'>
            <label for="dateOfArrival">Data przyjazdu: </label>
            <input type="date" id="dateOfArrival" class="datefield" onkeydown="return false" min="${today}"; max="${nextYear}">
        </div>
        <div class='col-6 d-flex justify-content-center align-items-center'>
            <label for="dateOfDeparture">Data wyjazdu: </label>
            <input type="date" id="dateOfDeparture" class="datefield" onkeydown="return false" min="${today}"; max="${nextYear}">
        </div>
    </>
    `;

  const ReserveButton = Button({
    text: "Zarezerwuj już dziś!",
    callback: () => {
      const arrival = new Date(document.getElementById("dateOfArrival").value);
      const departure = new Date(
        document.getElementById("dateOfDeparture").value
      );
      if (departure <= arrival) {
        alert("Data wyjazdu nie może być wcześniejsza niż data przyjazdu!");
      }
    },
  });

  const section2 = document.createElement("section");
  section2.innerHTML = `<div class="divider"></div>`;

  const RoomButton = Button({
    text: "Zobacz dostępne pokoje",
    callback: () => {
      const navigateEvent = new CustomEvent("navigate", {
        detail: () => Rooms(),
      });

      document.body.dispatchEvent(navigateEvent);
    },
  });

  const TreatmentButton = Button({
    text: "Zobacz dostępne zabiegi",
    callback: () => {
      const navigateEvent = new CustomEvent("navigate", {
        detail: () => Treatments(),
      });

      document.body.dispatchEvent(navigateEvent);
    },
  });

  section.setAttribute("class", "content");
  section.append(ReserveButton);
  section.append(section2);
  section2.append(RoomButton, TreatmentButton);

  return section;
}
