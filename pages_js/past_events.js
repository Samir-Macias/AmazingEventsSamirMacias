let url = "https://aulamindhub.github.io/amazing-api/events.json"

let pastEvent = [];
let contenedor = document.getElementById("contenedor");
let checkboxContainer = document.getElementById("checkbox-container");
let searchInput = document.getElementById("search-input");

fetch(url).then(res => res.json()).then(data => {
    let currentDate = (data.currentDate);
    pastEvent = data.events.filter(event => (event.date) < currentDate)
    console.log(currentDate);

    let categories = getUniqueCategories(pastEvent);
    createCheckboxes(categories);

    crearTarjetas(pastEvent)
    searchInput.addEventListener("input", applyFilters);
    document.querySelectorAll('.form-check-input').forEach(checkbox => {
        checkbox.addEventListener("change", applyFilters);
    });
});
// Función para crear tarjetas
function crearTarjetas(filtradas) {
    contenedor.innerHTML = "";

    if (filtradas.length === 0) {
        let mensaje = document.createElement("p");
        mensaje.className = "text-center fs-4 mt-4";
        mensaje.textContent = "We're sorry, but no events match your search criteria. Please try adjusting your filters.";
        contenedor.appendChild(mensaje);
        return;
    }

    filtradas.forEach(event => {
        let tarjetas = document.createElement("div");
        tarjetas.className = "tarjetas";
        tarjetas.innerHTML = `
           <div class="card d-flex justify-content-center mt3 border-info bg-secondary text-light">
                <img src= ${event.image} class="card-img " alt="Not found">
                <div class="card-body">
                <div class= "main-card">
                <h5 class="card-title fs-4"> ${event.name} </h5>
                    <p class="card-text fs-6"> ${event.description} </p>
                </div>
                    <div class="fs-6 ">
                        <p class="card-text mb-0"><span class=" fw-bold">Category:</span> ${event.category}</p>
                        <p class="card-text mb-0"> <span class=" fw-bold">Place:</span> ${event.place}</p>
                        <p class="card-text mb-0"><span class=" fw-bold">Capacity:</span> ${event.capacity}</p>
                        <p class="card-text mb-0"><span class=" fw-bold">Date:</span> ${event.date}</p>
                    </div>
                    <div class="d-flex justify-content-between mt-2 border-top align-items-center pt-3 border-info border-start-5">
                        <p class=" mt-2 fw-bold">Price: ${event.price} $ </p>
                        <a href="../pages/details.html?id=${event._id}" class="btn btn-primary">Details</a>
                    </div>
                </div>
            </div>`;
        contenedor.appendChild(tarjetas);

    });
}


function getUniqueCategories(events) {
    let categories = new Set(events.map(event => event.category));
    return Array.from(categories);
}

// Función para crear checkboxes dinámicamente
function createCheckboxes(categories) {
    checkboxContainer.innerHTML = "";

    categories.forEach(category => {
        let label = document.createElement("label");
        label.className = "form-check-label";
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "form-check-input";
        checkbox.value = category;
        checkbox.addEventListener("change", applyFilters);

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(category));
        checkboxContainer.appendChild(label);
    });
}

// Función para aplicar filtros por texto y checkbox
function applyFilters() {
    let checkedCategories = Array.from(document.querySelectorAll('.form-check-input:checked')).map(cb => cb.value);
    let searchText = searchInput.value.toLowerCase();

    let filteredEvents = pastEvent.filter(event => {
        let matchesCategory = checkedCategories.length === 0 || checkedCategories.includes(event.category);
        let matchesText = event.name.toLowerCase().includes(searchText) || event.description.toLowerCase().includes(searchText);
        return matchesCategory && matchesText;
    });

    crearTarjetas(filteredEvents);
}

