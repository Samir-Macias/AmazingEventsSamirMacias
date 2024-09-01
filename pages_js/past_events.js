import { crearTarjetas, getUniqueCategories, createCheckboxes, applyFilters, upcomingPastEvents } from "../modules/functions.js"

let searchInput = document.getElementById("search-input");

fetch('https://aulamindhub.github.io/amazing-api/events.json')
    .then(res => res.json()
    ).then(data => {
        let currentDate = (data.currentDate);
        upcomingPastEvents.push(...data.events.filter(event => event.date < currentDate));
        console.log(currentDate);

        let categories = getUniqueCategories(upcomingPastEvents);
        createCheckboxes(categories);
        crearTarjetas(upcomingPastEvents)

        searchInput.addEventListener("input", () => applyFilters(upcomingPastEvents, searchInput));
        document.querySelectorAll('.form-check-input').forEach(checkbox => {
            checkbox.addEventListener("change", () => applyFilters(upcomingPastEvents, searchInput));
        });
    });


