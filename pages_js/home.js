import { crearTarjetas, getUniqueCategories, createCheckboxes, applyFilters, } from "../modules/functions.js";

let url = "https://aulamindhub.github.io/amazing-api/events.json";
let allEvents = [];
let searchInput = document.getElementById("search-input");

fetch(url)
    .then(res => res.json())
    .then(data => {

        allEvents = data.events;

        let categoriasUnicas = getUniqueCategories(allEvents);
        createCheckboxes(categoriasUnicas);
        crearTarjetas(allEvents);

        document.querySelectorAll('.form-check-input').forEach(checkbox => {
            checkbox.addEventListener('change', () => applyFilters(allEvents, searchInput));
        });

        searchInput.addEventListener('input', () => applyFilters(allEvents, searchInput));
    });


