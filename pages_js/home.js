const data = {
    currentDate: "2023-01-01",
    events: [
        {
            _id: "639c723b992482e5f2834be9",
            name: "Collectivities Party",
            image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
            date: "2022-12-12",
            description:
                "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
            category: "Food Fair",
            place: "Room A",
            capacity: 45000,
            assistance: 42756,
            price: 5,
            __v: 0,
        },
        {
            _id: "639c723b992482e5f2834beb",
            name: "Korean style",
            image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
            date: "2023-08-12",
            description:
                "Enjoy the best Korean dishes, with international chefs and awesome events.",
            category: "Food Fair",
            place: "Room A",
            capacity: 45000,
            price: 10,
            __v: 0,
            estimate: 42756,
        },
        {
            _id: "639c723c992482e5f2834bed",
            name: "Jurassic Park",
            image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
            date: "2022-11-02",
            description:
                "Let's go meet the biggest dinosaurs in the paleontology museum.",
            category: "Museum",
            place: "Field",
            capacity: 82000,
            price: 15,
            __v: 0,
            assistance: 65892,
        },
        {
            _id: "639c723c992482e5f2834bef",
            name: "Parisian Museum",
            image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
            date: "2023-11-02",
            description:
                "A unique tour in the city of lights, get to know one of the most iconic places.",
            category: "Museum",
            place: "Paris",
            capacity: 8200,
            estimate: 8200,
            price: 3500,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf1",
            name: "Comicon",
            image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
            date: "2022-02-12",
            description:
                "For comic lovers, all your favourite characters gathered in one place.",
            category: "Costume Party",
            place: "Room C",
            capacity: 120000,
            assistance: 110000,
            price: 54,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf3",
            name: "Halloween Night",
            image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
            date: "2023-02-12",
            description: "Come with your scariest costume and win incredible prizes.",
            category: "Costume Party",
            place: "Room C",
            capacity: 12000,
            estimate: 9000,
            price: 12,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf5",
            name: "Metallica in concert",
            image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
            date: "2023-01-22",
            description: "The only concert of the most emblematic band in the world.",
            category: "Music Concert",
            place: "Room A",
            capacity: 138000,
            estimate: 138000,
            price: 150,
            __v: 0,
        },
        {
            _id: "639c723c992482e5f2834bf7",
            name: "Electronic Fest",
            image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
            date: "2022-01-22",
            description:
                "The best national and international DJs gathered in one place.",
            category: "Music Concert",
            place: "Room A",
            capacity: 138000,
            assistance: 110300,
            price: 250,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834bf9",
            name: "10K for life",
            image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
            date: "2022-03-01",
            description: "Come and exercise, improve your health and lifestyle.",
            category: "Race",
            place: "Soccer field",
            capacity: 30000,
            assistance: 25698,
            price: 3,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834bfb",
            name: "15K NY",
            image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
            date: "2023-03-01",
            description:
                "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
            category: "Race",
            place: "New York",
            capacity: 3000000,
            price: 3,
            __v: 0,
            estimate: 2569800,
        },
        {
            _id: "639c723d992482e5f2834bfd",
            name: "School's book fair",
            image: "https://i.postimg.cc/Sst763n6/book1.jpg",
            date: "2023-10-15",
            description: "Bring your unused school book and take the one you need.",
            category: "Book Exchange",
            place: "Room D1",
            capacity: 150000,
            estimate: 123286,
            price: 1,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834bff",
            name: "Just for your kitchen",
            image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
            date: "2022-11-09",
            description:
                "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
            category: "Book Exchange",
            place: "Room D6",
            capacity: 130000,
            assistance: 90000,
            price: 100,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834c01",
            name: "Batman",
            image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
            date: "2022-3-11",
            description: "Come see Batman fight crime in Gotham City.",
            category: "Cinema",
            place: "Room D1",
            capacity: 11000,
            assistance: 9300,
            price: 225,
            __v: 0,
        },
        {
            _id: "639c723d992482e5f2834c03",
            name: "Avengers",
            image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
            date: "2023-10-15",
            description:
                "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
            category: "Cinema",
            place: "Room D1",
            capacity: 9000,
            estimate: 9000,
            price: 250,
            __v: 0,
        },
    ],
};

// Tajetas dinamicas
function crearTarjetas(filtradas) {
    contenedor.innerHTML = "";

    if (filtradas.length === 0) {
        let mensaje = document.createElement("p");
        mensaje.className = "text-center fs-4 mt-4";
        mensaje.textContent = "We're sorry, but no events match your search criteria. Please try adjusting your filters.";
        contenedor.appendChild(mensaje);
        return;
    }

    for (let i = 0; i < filtradas.length; i++) {
        let tarjetas = document.createElement("div");
        tarjetas.className = "tarjetas";
        tarjetas.innerHTML = `
            <div class="card d-flex justify-content-center mt3 border-info bg-secondary text-light">
                <img src= ${filtradas[i].image} class="card-img " alt="Not found">
                <div class="card-body">
                <div class= "main-card">
                <h5 class="card-title fs-4"> ${filtradas[i].name} </h5>
                    <p class="card-text fs-6"> ${filtradas[i].description} </p>
                </div>
                    <div class="fs-6 ">
                        <p class="card-text mb-0"><span class=" fw-bold">Category:</span> ${filtradas[i].category}</p>
                        <p class="card-text mb-0"> <span class=" fw-bold">Place:</span> ${filtradas[i].place}</p>
                        <p class="card-text mb-0"><span class=" fw-bold">Capacity:</span> ${filtradas[i].capacity}</p>
                    </div>
                    <div class="d-flex justify-content-between mt-2 border-top align-items-center pt-3 border-info border-start-5">
                        <p class=" mt-2 fw-bold">Price: ${filtradas[i].price} $ </p>
                        <a href="../pages/details.html?id=${filtradas[i]._id}" class="btn btn-primary">Details</a>
                    </div>
                </div>
            </div>`;
        contenedor.appendChild(tarjetas);
    }
}
// checkbox dinamicos

let categoriasUnicas = [...new Set(data.events.map(evento => evento.category))];
let checkboxContainer = document.getElementById('checkbox');

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
});

// Filtro por checkbox y por texto
function filtrarPorCheckboxes() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let categoriasSeleccionadas = Array.from(checkboxes).map(checkbox => checkbox.value);

    if (categoriasSeleccionadas.length === 0) return data.events;

    return data.events.filter(evento => categoriasSeleccionadas.includes(evento.category));
}

function filtrarPorTexto(eventosFiltrados) {
    let inputTexto = document.querySelector('input[type="search"]').value.toLowerCase();

    return eventosFiltrados.filter(evento =>
        evento.name.toLowerCase().includes(inputTexto) ||
        evento.description.toLowerCase().includes(inputTexto)
    );
}

function aplicarFiltros() {
    let eventosFiltrados = filtrarPorCheckboxes();
    eventosFiltrados = filtrarPorTexto(eventosFiltrados);
    crearTarjetas(eventosFiltrados);
}

document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', aplicarFiltros);
});

document.querySelector('input[type="search"]').addEventListener('input', aplicarFiltros);


crearTarjetas(data.events);
