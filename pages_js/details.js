
   
let params = new URLSearchParams(window.location.search);
let eventId = params.get('id');

let event = data.events.find(event => event._id === eventId); 

if (event) {
    document.getElementById('event-title').textContent = event.name;
    document.getElementById('event-image').src = event.image;
    document.getElementById('event-date').textContent = `Date: ${event.date}`;
    document.getElementById('event-description').textContent = `Description: ${event.description}`;
    document.getElementById('event-category').textContent = `Category: ${event.category}`;
    document.getElementById('event-place').textContent = `Place: ${event.place}`;
    document.getElementById('event-capacity').textContent = `Capacity: ${event.capacity}`;
    document.getElementById('event-estimate').textContent = `Estimate: ${event.estimate}`;
    document.getElementById('event-price').textContent = `Price: ${event.price} $`;
} else {
  
    document.getElementById('event-title').textContent = "Event not found";
}
