


javascript
function slideLeft(containerId) {
    const slider = document.getElementById(containerId);
    const cardWidth = slider.querySelector('.movie-card').offsetWidth + 15; // Adding gap
    slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    updateArrowVisibility(slider);
}

function slideRight(containerId) {
    const slider = document.getElementById(containerId);
    const cardWidth = slider.querySelector('.movie-card').offsetWidth + 15; // Adding gap
    slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
    updateArrowVisibility(slider);
}

function updateArrowVisibility(slider) {
    const leftArrow = slider.previousElementSibling; // Get the left arrow button
    const rightArrow = slider.nextElementSibling; // Get the right arrow button

    // Check if we are at the start or end of the scrollable area
    leftArrow.disabled = slider.scrollLeft === 0;
    rightArrow.disabled = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth;
}

// Initialize arrow visibility on page load
document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.movie-slider');
    sliders.forEach(slider => updateArrowVisibility(slider.querySelector('.slider-container')));
});