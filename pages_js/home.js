
let url = "https://aulamindhub.github.io/amazing-api/events.json"
// Tajetas dinamicas
function crearTarjetas(eventosFiltrados) {
    contenedor.innerHTML = "";

    if (eventosFiltrados.length === 0) {
        let mensaje = document.createElement("p");
        mensaje.className = "text-center fs-4 mt-4";
        mensaje.textContent = "We're sorry, but no events match your search criteria. Please try adjusting your filters.";
        contenedor.appendChild(mensaje);
        return;
    }
    eventosFiltrados.forEach(event => {
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
                    </div>
                    <div class="d-flex justify-content-between mt-2 border-top align-items-center pt-3 border-info border-start-5">
                        <p class=" mt-2 fw-bold">Price: ${event.price} $ </p>
                        <a href="../pages/details.html?id=${event._id}" class="btn btn-primary">Details</a>
                    </div>
                </div>
            </div>`;
        contenedor.appendChild(tarjetas);
    }
    )
}
// checkbox dinamicos
``
let categoriasUnicas = []
let checkboxContainer = document.getElementById('checkbox');

fetch(url).then(res => res.json()).then(data => {
    let categorias = new Set(data.events.map(evento => evento.category))
    categoriasUnicas = [...categorias];
    console.log(categorias);

    categoriasUnicas.forEach(categoria => {
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = categoria;
        checkbox.name = 'categoria';
        checkbox.value = categoria;
        checkbox.classList.add('form-check-input', 'me-2');

        let label = document.createElement('label');
        label.htmlFor = categoria;
        label.textContent = categoria;
        label.classList.add('form-check-label', 'me-3');

        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(label);
    })
    // Añadir eventos a los checkboxes y filtros
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', aplicarFiltros);
    });

    document.querySelector('input[type="search"]').addEventListener('input', aplicarFiltros);


    crearTarjetas(data.events);

    // Filtro por checkbox y por texto
    function filtrarPorCheckboxes(eventos) {
        let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        let categoriasSeleccionadas = Array.from(checkboxes).map(checkbox => checkbox.value);

        if (categoriasSeleccionadas.length === 0) return eventos;

        return eventos.filter(evento => categoriasSeleccionadas.includes(evento.category));
    }

    function filtrarPorTexto(eventosFiltrados) {
        let inputTexto = document.querySelector('input[type="search"]').value.toLowerCase();

        return eventosFiltrados.filter(evento =>
            evento.name.toLowerCase().includes(inputTexto) ||
            evento.description.toLowerCase().includes(inputTexto)
        );
    }


    function aplicarFiltros() {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let eventosFiltrados = filtrarPorCheckboxes(data.events);
                eventosFiltrados = filtrarPorTexto(eventosFiltrados);
                crearTarjetas(eventosFiltrados);
            });
    }

});
