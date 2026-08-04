// ==============================
// THE COSMIC HORIZON
// BOOKINGS PAGE
// ==============================

// Get bookings from localStorage
let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

// Get table body
const tableBody = document.getElementById("tableBody");

// If no bookings exist
if (bookings.length === 0) {

    tableBody.innerHTML = `
        <tr>
            <td colspan="11" style="text-align:center; padding:30px;">
                No Bookings Available
            </td>
        </tr>
    `;

}

// Display bookings
bookings.forEach(function(booking){

    let row = document.createElement("tr");

    row.innerHTML = `

        <td>${booking.bookingID}</td>

        <td>${booking.fullname}</td>

        <td>${booking.email}</td>

        <td>${booking.phone}</td>

        <td>${booking.guests}</td>

        <td>${booking.checkin}</td>

        <td>${booking.checkout}</td>

        <td>${booking.floor}</td>

        <td>${booking.room}</td>

        <td>${booking.request}</td>

        <td>${booking.status}</td>

    `;

    tableBody.appendChild(row);

});
document.getElementById("clearBookings").addEventListener("click", function () {

    if (confirm("Are you sure you want to delete all bookings?")) {

        localStorage.removeItem("bookings");

        location.reload();

    }

});