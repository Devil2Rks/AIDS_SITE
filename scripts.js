function openAppointmentForm(doctorName) {
    document.getElementById('appointment-form-modal').style.display = 'block';
    document.getElementById('doctor').value = doctorName;
}

function closeAppointmentForm() {
    document.getElementById('appointment-form-modal').style.display = 'none';
}

document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Appointment booked successfully!');
    closeAppointmentForm();
});
