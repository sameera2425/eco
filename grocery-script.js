// Track current selections
let primarySelection = null;
let secondarySelection = null;

// Handle primary option selection
function selectPrimaryOption(option) {
    // Remove previous primary selection
    const primaryCards = document.querySelectorAll('.option-card');
    primaryCards.forEach(card => card.classList.remove('selected'));
    
    // Add selection to clicked card
    const selectedCard = document.getElementById(option + '-card');
    selectedCard.classList.add('selected');
    
    // Hide all secondary sections
    const secondarySections = document.querySelectorAll('.secondary-section');
    secondarySections.forEach(section => section.style.display = 'none');
    
    // Show relevant secondary section
    const secondarySection = document.getElementById(option + '-secondary');
    secondarySection.style.display = 'block';
    
    // Reset secondary selection
    secondarySelection = null;
    const secondaryCards = document.querySelectorAll('.secondary-card');
    secondaryCards.forEach(card => card.classList.remove('selected'));
    
    // Store primary selection
    primarySelection = option;
    
    // Hide selection display until secondary is chosen
    document.getElementById('selection-display').style.display = 'none';
}

// Handle secondary option selection
function selectSecondaryOption(option) {
    // Remove previous secondary selection
    const secondaryCards = document.querySelectorAll('.secondary-card');
    secondaryCards.forEach(card => card.classList.remove('selected'));
    
    // Find and select the clicked card
    const clickedCard = Array.from(secondaryCards).find(card => 
        card.onclick.toString().includes(`'${option}'`)
    );
    if (clickedCard) {
        clickedCard.classList.add('selected');
    }
    
    // Store secondary selection
    secondarySelection = option;
    
    // Update display
    updateSelectionDisplay();
}

// Update the selection display
function updateSelectionDisplay() {
    const displayElement = document.getElementById('selection-display');
    const textElement = document.getElementById('selection-text');
    
    if (primarySelection && secondarySelection) {
        let displayText = '';
        
        // Format display text based on selections
        if (primarySelection === 'local') {
            displayText = `Local Vendors / Sabzi Mandi - ${formatSecondaryOption(secondarySelection)}`;
        } else if (primarySelection === 'online') {
            displayText = `Quick Commerce Apps - ${formatSecondaryOption(secondarySelection)}`;
        } else if (primarySelection === 'supermarket') {
            displayText = `Supermarkets - ${formatSecondaryOption(secondarySelection)}`;
        }
        
        textElement.textContent = displayText;
        displayElement.style.display = 'block';
    }
}

// Format secondary option for display
function formatSecondaryOption(option) {
    const formatMap = {
        'cloth-bag': 'Cloth Bag',
        'jute-bag': 'Jute Bag',
        'reusable-plastic': 'Reusable Plastic',
        'paper-bag': 'Paper Bag',
        'zepto': 'Zepto',
        'blinkit': 'Blinkit',
        'bigbasket': 'BigBasket',
        'amazon-fresh': 'Amazon Fresh',
        'dmart': 'D-Mart',
        'reliance-fresh': 'Reliance Fresh',
        'more-supermarket': 'More Supermarket',
        'local-supermarket': 'Local Supermarket'
    };
    return formatMap[option] || option;
}

// Navigation functions
function previousQuestion() {
    window.location.href = 'solar.html';
}

function nextQuestion() {
    window.location.href = 'travel.html';
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Page loads without any pre-selection
    console.log('Grocery shopping page loaded');
});
