'use strict'

const modalTriggers = document.querySelectorAll('.trigger');
const modal = document.querySelectorAll(".modal");

// Add click event on each button
Array.from(modalTriggers).forEach(trigger => {
    trigger.addEventListener('click', function(e) {
        e.preventDefault();

        // Target specific button clicked and show relevant modal
        const modalName = trigger.dataset.modal;
        const modal = document.querySelector('.' + modalName);
        showModal(modal);
    });
});

function windowOnClick(event) {
    for (var i=0; i < modal.length; i++){
        // If user clicks off the modal or clicks cancel, close the modal
        if (event.target === modal[i] || event.target.className == 'modal-cancel') {
            hideModal(modal[i]);
        }
    }
}

window.addEventListener("click", windowOnClick);

// Add class to show the modal
function showModal(modal) {
    modal.classList.add("show-modal");
}

// Add class to close the modal
function hideModal(modal) {
    modal.classList.remove("show-modal");
}