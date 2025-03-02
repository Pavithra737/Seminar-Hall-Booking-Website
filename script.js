document.getElementById('registration-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (name && email && username && password) {
        document.getElementById('confirmation-message').style.display = 'block';
        document.getElementById('registration-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});

document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        alert('Login successful!');
    } else {
        alert('Please fill in all fields.');
    }
});

document.getElementById('booking-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const duration = document.getElementById('duration').value;
    const hall = document.getElementById('hall').value;

    const booking = ${name} booked ${hall} on ${date} at ${time} for ${duration} hours.;
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    document.getElementById('booking-form').reset();
    window.location.href = '7.bookings.html';
});

document.addEventListener('DOMContentLoaded', function() {
    const bookingList = document.getElementById('booking-list');
    if (bookingList) {
        let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        bookings.forEach(booking => {
            const listItem = document.createElement('li');
            listItem.textContent = booking;
            listItem.classList.add('fade-in');
            bookingList.appendChild(listItem);
        });
    }
});