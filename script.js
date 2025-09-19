// Convert kilometers to miles
function kmToMiles(km) {
    return Math.round(km * 0.621371);
}

// Update slider value display
function updateSliderValue(sliderId, kmValueId, milesValueId) {
    const slider = document.getElementById(sliderId);
    const kmDisplay = document.getElementById(kmValueId);
    const milesDisplay = document.getElementById(milesValueId);
    
    const km = parseInt(slider.value);
    const miles = kmToMiles(km);
    
    kmDisplay.textContent = `${km} kms`;
    milesDisplay.textContent = `${miles} miles`;
}

// Navigation functions
function previousQuestion() {
    // Add navigation to previous question when available
    console.log('Previous question not yet implemented');
}

function nextQuestion() {
    window.location.href = 'housing.html';
}

// Initialize sliders
document.addEventListener('DOMContentLoaded', function() {
    const slider1 = document.getElementById('slider1');
    const slider2 = document.getElementById('slider2');
    
    // Set initial values
    updateSliderValue('slider1', 'km-value1', 'miles-value1');
    updateSliderValue('slider2', 'km-value2', 'miles-value2');
    
    // Add event listeners
    slider1.addEventListener('input', function() {
        updateSliderValue('slider1', 'km-value1', 'miles-value1');
    });
    
    slider2.addEventListener('input', function() {
        updateSliderValue('slider2', 'km-value2', 'miles-value2');
    });
});
