
let url = "https://aulamindhub.github.io/amazing-api/events.json"
// Tajetas dinamicas
import {crearTarjetas} from "../modules/functions.js"
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
