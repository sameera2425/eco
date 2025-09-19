// Update household size display
function updateHouseholdValue() {
    const slider = document.getElementById('householdSlider');
    const valueDisplay = document.getElementById('household-value');
    const mainImage = document.getElementById('household-main-image');
    
    const value = parseInt(slider.value);
    
    // Update text display
    if (value === 10) {
        valueDisplay.textContent = '10+ people';
    } else if (value === 1) {
        valueDisplay.textContent = '1 person';
    } else {
        valueDisplay.textContent = `${value} people`;
    }
    
    // Update image based on selected value
    const imageData = getImageForHouseholdSize(value);
    mainImage.src = imageData.src;
    mainImage.alt = imageData.alt;
}

// Get appropriate image for household size
function getImageForHouseholdSize(size) {
    const imageMap = {
        1: { src: 'https://via.placeholder.com/120x120/4a90e2/ffffff?text=1', alt: '1 person' },
        2: { src: 'https://via.placeholder.com/120x120/38a169/ffffff?text=2', alt: '2 people' },
        3: { src: 'https://via.placeholder.com/120x120/e53e3e/ffffff?text=3', alt: '3 people' },
        4: { src: 'https://via.placeholder.com/120x120/805ad5/ffffff?text=4', alt: '4 people' },
        5: { src: 'https://via.placeholder.com/120x120/dd6b20/ffffff?text=5', alt: '5 people' },
        6: { src: 'https://via.placeholder.com/120x120/319795/ffffff?text=6', alt: '6 people' },
        7: { src: 'https://via.placeholder.com/120x120/d69e2e/ffffff?text=7', alt: '7 people' },
        8: { src: 'https://via.placeholder.com/120x120/c53030/ffffff?text=8', alt: '8 people' },
        9: { src: 'https://via.placeholder.com/120x120/553c9a/ffffff?text=9', alt: '9 people' },
        10: { src: 'https://via.placeholder.com/120x120/2d3748/ffffff?text=10%2B', alt: '10+ people' }
    };
    
    return imageMap[size] || imageMap[4]; // Default to 4 people if not found
}

// Navigation functions
function previousQuestion() {
    window.location.href = 'housing.html';
}

function nextQuestion() {
    window.location.href = 'solar.html';
}

// Initialize slider
document.addEventListener('DOMContentLoaded', function() {
    const householdSlider = document.getElementById('householdSlider');
    
    // Set initial value
    updateHouseholdValue();
    
    // Add event listener
    householdSlider.addEventListener('input', updateHouseholdValue);
});
