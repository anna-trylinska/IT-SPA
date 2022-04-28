
export function Reservation() {
    const section = document.createElement("section")

    let today = new Date();
    let nextYear =  new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    let yyyy1= today.getFullYear()+1;
    if (dd < 10) {
       dd = '0' + dd;
    }

    if (mm < 10) {
       mm = '0' + mm;
    } 
    
    today = yyyy+'-'+mm+'-'+dd;
    nextYear = yyyy1+'-'+mm+'-'+dd;

    const calendar = document.getElementsByClassName("datefield")
        for (let i = 0; i<calendar.length; i++) {
            calendar[i].setAttribute("min", today)
            calendar[i].setAttribute("max", nextYear)
        }

    section.innerHTML = `
    <div class='row'>
        <div class='col d-flex justify-content-center align-items-center'>
            <label for="dateOfArrival">Data przyjazdu:</label>
            <input type="date" id="dateOfArrival" class="datefield" min="${today}"; max="${nextYear}">
        </div>
        <div class='col d-flex justify-content-center align-items-center'>
            <label for="dateOfDeparture">Data wyjazdu:</label>
            <input type="date" id="dateOfDeparture" class="datefield" min="${today}"; max="${nextYear}">
        </div>
    </div>
    `
    section.setAttribute("class", "container");

    return section;
}