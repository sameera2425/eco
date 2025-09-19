// Track current selection
let currentSelection = null;

// Handle option selection
function selectOption(option) {
    // Remove previous selection
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach(button => button.classList.remove('selected'));
    
    // Add selection to clicked button
    const buttonId = option.toLowerCase() + '-button';
    const selectedButton = document.getElementById(buttonId);
    selectedButton.classList.add('selected');
    
    // Update display value
    const valueDisplay = document.getElementById('selection-value');
    valueDisplay.textContent = option;
    
    // Store current selection
    currentSelection = option;
}

// Navigation functions
function previousQuestion() {
    window.location.href = 'household.html';
}

function nextQuestion() {
    window.location.href = 'grocery.html';
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Set default selection to No
    selectOption('No');
});
