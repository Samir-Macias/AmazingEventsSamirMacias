import {crearTarjetas, getUniqueCategories, createCheckboxes, applyFilters} from "../modules/functions.js"

let url = "https://aulamindhub.github.io/amazing-api/events.json"
let upcomingPastEvents = [];
let searchInput = document.getElementById("search-input");


fetch(url).then(res => res.json()).then(data => {
    let currentDate = (data.currentDate);
    upcomingPastEvents = data.events.filter(event => (event.date) < currentDate)
    console.log(currentDate);

    let categories = getUniqueCategories(upcomingPastEvents);
    createCheckboxes(categories);

    crearTarjetas(upcomingPastEvents)
    searchInput.addEventListener("input", applyFilters);
    document.querySelectorAll('.form-check-input').forEach(checkbox => {
        checkbox.addEventListener("change", applyFilters);
    });
});


