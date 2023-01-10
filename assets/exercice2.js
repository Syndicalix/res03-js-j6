/*

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();

function maFonction(hours, minutes, secondes)
{

console.log(maFunction)
}

let intervalId = setInterval(maFonction, 4200); // toutes les secondes
*/
let timeoutID = setInterval(function() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();
    let newdate = hours + "h" + minutes + "min" + secondes + "sec";
    console.log(newdate);
}, 4200);