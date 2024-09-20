


function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.booking-form').forEach(form => {
        form.classList.remove('active-section');
    });

    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active-section');

    // Add active class to the clicked tab
    document.querySelector(`button[onclick="showSection('${sectionId}')"]`).classList.add('active');
}






