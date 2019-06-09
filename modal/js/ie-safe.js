// This js page is for IE support

'use strict'

var modalTriggers = document.querySelectorAll('.trigger');
var modal = document.querySelectorAll(".modal");

// Add click event on each button
Array.prototype.slice.call(modalTriggers).forEach(function (button) {    
    button.addEventListener('click', function(e) {
        e.preventDefault();

        // Target specific button clicked and show relevant modal
        var modalName = button.dataset.modal;
        var modal = document.querySelector('.' + modalName);
        showModal(modal);
    })
})

function windowOnClick(event) {
    for (var j=0; j < modal.length; j++){
        // If user clicks off the modal or clicks cancel, close the modal
        if (event.target === modal[j] || event.target.className == 'modal-cancel') {
            hideModal(modal[j]);
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