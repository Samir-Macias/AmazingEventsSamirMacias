import { getUniqueCategories } from "../modules/functions.js"

fetch('https://aulamindhub.github.io/amazing-api/events.json')
    .then(response => response.json())
    .then(data => {
        let currentDate = data.currentDate;
        let events = data.events;

        let pastEvents = events.filter(event => event.date < currentDate);
        let upcomingEvents = events.filter(event => event.date >= currentDate);

        let allEvents = upcomingEvents.concat(pastEvents);

        fillFirstTable(pastEvents, events);

        console.log(allEvents);

        fillCategoryStatsTable(upcomingEvents, "upcoming");
        fillCategoryStatsTable(pastEvents, "past");
    });

function fillFirstTable(pastEvents, allEvents) {
    let highestAttendanceEvent = getEventWithHighestAttendance(pastEvents);
    let lowestAttendanceEvent = getEventWithLowestAttendance(pastEvents);
    let largestCapacityEvent = getEventWithLargestCapacity(allEvents);

    document.querySelector("#highest-attendance").textContent = `${highestAttendanceEvent.name} (${getAttendancePercentage(highestAttendanceEvent).toFixed(2)}%)`;
    document.querySelector("#lowest-attendance").textContent = `${lowestAttendanceEvent.name} (${getAttendancePercentage(lowestAttendanceEvent).toFixed(2)}%)`;
    document.querySelector("#largest-capacity").textContent = `${largestCapacityEvent.name} (${largestCapacityEvent.capacity.toLocaleString('es-ES')})`;
}

function getEventWithHighestAttendance(events) {
    return events.reduce((max, event) => {
        return getAttendancePercentage(event) > getAttendancePercentage(max) ? event : max;
    });
}

function getEventWithLowestAttendance(events) {
    return events.reduce((min, event) => {
        return getAttendancePercentage(event) < getAttendancePercentage(min) ? event : min;
    });
}

function getEventWithLargestCapacity(events) {
    return events.reduce((max, event) => {
        return event.capacity > max.capacity ? event : max;
    }, events[0]);
}

function getAttendancePercentage(event) {
    let capacity = event.estimate || event.assistance;
    if (capacity === undefined) {
        return 0;
    }
    return (capacity / event.capacity) * 100;
}

function fillCategoryStatsTable(events, type) {
    let categories = getUniqueCategories(events);
    let tableContent = '';

    categories.forEach(category => {
        let categoryEvents = events.filter(event => event.category === category);
        let totalRevenue = categoryEvents.reduce((sum, event) => {
            let capacity = event.estimate || event.assistance;
            let price = event.price || 0;
            return sum + (capacity * price);
        }, 0);

        let averageAttendancePercentage = categoryEvents.reduce((sum, event) =>
            sum + getAttendancePercentage(event), 0) / categoryEvents.length;

        tableContent += `
            <tr>
                <td>${category}</td>
                <td>$ ${totalRevenue.toLocaleString('es-ES')}</td>
                <td>${averageAttendancePercentage.toFixed(2)}%</td>
            </tr>`;
    });

    document.querySelector(`#${type}-category-stats tbody`).innerHTML = tableContent;
}
