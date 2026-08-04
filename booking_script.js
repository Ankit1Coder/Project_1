// ==============================
// THE COSMIC HORIZON
// Booking System
// ==============================

// Get the form
const form = document.getElementById("bookingForm");

// ------------------------------
// Generate Unique Booking ID
// ------------------------------
function generateBookingID() {

    const random = Math.floor(Math.random() * 90000) + 10000;

    return "TCH-" + Date.now() + "-" + random;

}

// ------------------------------
// Today's Date
// ------------------------------
function getTodayDate() {

    const today = new Date();

    return today.toLocaleDateString("en-IN");

}

// Show booking date on page
document.getElementById("bookingDate").value = getTodayDate();

// ------------------------------
// Submit Form
// ------------------------------
form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Create Booking ID
    const bookingID = generateBookingID();

    // Display Booking ID
    document.getElementById("bookingID").value = bookingID;

    // Create Booking Object
    const booking = {

        bookingID: bookingID,

        bookingDate: getTodayDate(),

        status: "Confirmed",

        fullname: document.getElementById("fullname").value,

        email: document.getElementById("email").value,

        phone: document.getElementById("phone").value,

        guests: document.getElementById("guests").value,

        checkin: document.getElementById("checkin").value,

        checkout: document.getElementById("checkout").value,

        floor: document.getElementById("floor").value,

        room: document.getElementById("room").value,

        request: document.getElementById("request").value

    };

    // Read Previous Bookings
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    // Add New Booking
    bookings.push(booking);

    // Save Back
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // Success Message
    alert("Booking Confirmed!\n\nYour Booking ID is:\n" + bookingID);

    // Reset Form
    form.reset();

    // Keep booking date
    document.getElementById("bookingDate").value = getTodayDate();

    // Redirect to Bookings Page
    window.location.href = "booked_page.html";

});
