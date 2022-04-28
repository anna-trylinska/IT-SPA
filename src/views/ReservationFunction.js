
export function ReservationFunction()  
{
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

    return calendar;
}