document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const eventTitle = document.getElementById('event').value;
    const date = document.getElementById('date').value;
    const seats = document.getElementById('seats').value;

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = `Name: ${name}, Event: ${eventTitle}, Date: ${date}, Seats: ${seats}`;

    // Add the list item to the ticket list
    document.getElementById('ticket-list').appendChild(li);

    // Clear the form
    document.getElementById('reservation-form').reset();
});
