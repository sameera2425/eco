// Track current travel mode selection
let selectedTravelMode = null;

// Handle travel mode selection
function selectTravelMode(mode) {
    // Remove previous selection
    const travelCards = document.querySelectorAll('.travel-card');
    travelCards.forEach(card => card.classList.remove('selected'));
    
    // Add selection to clicked card
    const clickedCard = Array.from(travelCards).find(card => 
        card.onclick.toString().includes(`'${mode}'`)
    );
    if (clickedCard) {
        clickedCard.classList.add('selected');
    }
    
    // Store selection
    selectedTravelMode = mode;
    
    // Update display
    updateTravelModeDisplay();
}

// Update the selection display
function updateTravelModeDisplay() {
    const displayElement = document.getElementById('travel-selection-display');
    const textElement = document.getElementById('travel-selection-text');
    
    if (selectedTravelMode) {
        const displayText = formatTravelMode(selectedTravelMode);
        textElement.textContent = displayText;
        displayElement.style.display = 'block';
    }
}

// Format travel mode for display
function formatTravelMode(mode) {
    const formatMap = {
        'local-train': 'Local Train / Metro',
        'best-bus': 'BEST Bus',
        'shared-auto': 'Shared Auto-Rickshaw / Cab (Uber/Ola) – Solo',
        'private-car': 'Private Car – Solo',
        'motorcycle': 'Motorcycle',
        'walk-cycle': 'Walk / Cycle'
    };
    return formatMap[mode] || mode;
}

// Navigation functions
function previousQuestion() {
    window.location.href = 'grocery.html';
}

function nextQuestion() {
    // Add navigation to next question when available
    console.log('Next question not yet implemented');
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Page loads without any pre-selection
    console.log('Travel mode page loaded');
});
