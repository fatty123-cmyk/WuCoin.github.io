// Get the header element
const header = document.getElementById('header');

// Get the offset position of the header
const sticky = header.offsetTop;

// Function to make the header sticky
function makeHeaderSticky() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

// Attach the scroll event listener
window.onscroll = function() {
    makeHeaderSticky();
};
