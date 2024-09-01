let params = new URLSearchParams(window.location.search);
let eventId = params.get('id');

if (eventId) {
    fetch('https://aulamindhub.github.io/amazing-api/events.json')
        .then(res => res.json())
        .then(data => {
            let event = data.events.find(event => event._id == eventId);
            if (event) {
                document.getElementById('event-title').textContent = event.name;
                document.getElementById('event-image').src = event.image;
                document.getElementById('event-date').innerHTML = `<strong>Date: </strong> ${event.date}`;
                document.getElementById('event-description').innerHTML = `<strong>Description: </strong> ${event.description}`;
                document.getElementById('event-category').innerHTML = `<strong>Category: </strong>${event.category}`;
                document.getElementById('event-place').innerHTML = `<strong>Place: </strong>${event.place}`;
                document.getElementById('event-capacity').innerHTML = `<strong>Capacity: </strong>${event.capacity.toLocaleString('es-ES')}`;

                if (event.estimate) {
                    document.getElementById('event-estimate').innerHTML = `<strong>Estimate: </strong>${event.estimate.toLocaleString('es-ES')}`;
                }

                if (event.assistance) {
                    let assistanceElement = document.getElementById('event-assistance');
                    if (assistanceElement) {
                        assistanceElement.innerHTML = `<strong>Assistance: </strong>${event.assistance.toLocaleString('es-ES')}`;
                    }
                }

                document.getElementById('event-price').innerHTML = `<strong>Price: </strong>${event.price} $`;
            } else {
                document.getElementById('event-title').textContent = "Event not found";
            }
        });
}
