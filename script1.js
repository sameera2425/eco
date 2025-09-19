// Mumbai EcoFootprint Report - Enhanced Interactive Experience
// Redesigned with data-driven visualizations and Mumbai-specific features

class MumbaiEcoFootprintReport {
    constructor() {
        this.currentTab = 'summary';
        this.userData = {
            overshootDate: '28. Jan',
            earthsRequired: 3.2,
            comparisonPercent: 23,
            ecologicalFootprint: 22.5,
            carbonFootprint: 43.3,
            carbonPercentage: 66,
            categories: {
                transport: { co2Weekly: 12.4, efficiency: 65, mode: 'Local Train' },
                housing: { energyMonthly: 340, efficiency: 25, type: '2BHK, 4 people' },
                diet: { waterSaved: 2400, localFood: 78, type: 'Vegetarian' },
                consumption: { plasticSaved: 45, ecoScore: 8.2 }
            }
        };
        
        this.init();
    }
    
    init() {
        this.setupNavigation();
        this.initializeData();
        this.generateEarthIcons();
        this.generateMumbaiSkyline();
        this.setupEmotionalResponse();
        this.setupInteractiveFeatures();
        this.setupDataVisualization();
        this.animateCounters();
        this.hideLoadingOverlay();
        
        // Setup responsive handlers
        window.addEventListener('resize', () => {
            this.generateMumbaiSkyline();
        });
    }
    
    // Navigation System
    setupNavigation() {
        const navTabs = document.querySelectorAll('.nav-tab');
        
        navTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetTab = tab.dataset.tab;
                this.switchTab(targetTab);
                
                // Update active states
                navTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            });
        });
        
        // Mobile navigation
        this.setupMobileNavigation();
    }
    
    setupMobileNavigation() {
        // Create mobile tab selector for smaller screens
        if (window.innerWidth <= 768) {
            this.createMobileTabSelector();
        }
    }
    
    createMobileTabSelector() {
        const nav = document.querySelector('nav');
        const mobileSelect = document.createElement('select');
        mobileSelect.className = 'mobile-tab-select md:hidden bg-white border border-gray-300 rounded-lg px-4 py-2 mt-4 w-full';
        
        const tabs = [
            { value: 'summary', label: 'Summary' },
            { value: 'facts', label: 'Facts & Figures' },
            { value: 'feelings', label: 'How Do You Feel' },
            { value: 'data', label: 'Explore Data' },
            { value: 'solutions', label: 'Solutions' }
        ];
        
        tabs.forEach(tab => {
            const option = document.createElement('option');
            option.value = tab.value;
            option.textContent = tab.label;
            mobileSelect.appendChild(option);
        });
        
        mobileSelect.addEventListener('change', (e) => {
            this.switchTab(e.target.value);
        });
        
        nav.appendChild(mobileSelect);
    }
    
    switchTab(tabName) {
        const tabSections = document.querySelectorAll('.tab-section');
        
        // Hide all tabs
        tabSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show selected tab
        const targetSection = document.getElementById(`${tabName}-tab`);
        if (targetSection) {
            targetSection.classList.add('active');
            this.currentTab = tabName;
            
            // Trigger specific animations for the tab
            this.animateTabContent(tabName);
        }
    }
    
    animateTabContent(tabName) {
        const elements = document.querySelectorAll(`#${tabName}-tab [class*="card"], #${tabName}-tab [class*="grid"] > *`);
        
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    // Initialize Data Display
    initializeData() {
        // Update hero section data
        const elements = {
            overshootDate: document.getElementById('overshootDate'),
            earthsNumber: document.getElementById('earthsNumber'),
            comparisonPercent: document.getElementById('comparisonPercent'),
            ecologicalFootprint: document.getElementById('ecologicalFootprint'),
            carbonFootprint: document.getElementById('carbonFootprint'),
            carbonPercentage: document.getElementById('carbonPercentage'),
            transportCO2: document.getElementById('transportCO2'),
            energyUsage: document.getElementById('energyUsage'),
            waterSaved: document.getElementById('waterSaved'),
            localFood: document.getElementById('localFood'),
            plasticSaved: document.getElementById('plasticSaved')
        };
        
        // Safely update elements
        if (elements.overshootDate) elements.overshootDate.textContent = this.userData.overshootDate;
        if (elements.earthsNumber) elements.earthsNumber.textContent = this.userData.earthsRequired;
        if (elements.comparisonPercent) elements.comparisonPercent.textContent = `${this.userData.comparisonPercent}% higher`;
        if (elements.ecologicalFootprint) elements.ecologicalFootprint.textContent = this.userData.ecologicalFootprint;
        if (elements.carbonFootprint) elements.carbonFootprint.textContent = this.userData.carbonFootprint;
        if (elements.carbonPercentage) elements.carbonPercentage.textContent = this.userData.carbonPercentage;
        if (elements.transportCO2) elements.transportCO2.textContent = this.userData.categories.transport.co2Weekly;
        if (elements.energyUsage) elements.energyUsage.textContent = this.userData.categories.housing.energyMonthly;
        if (elements.waterSaved) elements.waterSaved.textContent = this.userData.categories.diet.waterSaved.toLocaleString();
        if (elements.localFood) elements.localFood.textContent = this.userData.categories.diet.localFood;
        if (elements.plasticSaved) elements.plasticSaved.textContent = this.userData.categories.consumption.plasticSaved;
    }
    
    // Generate Earth Icons
    generateEarthIcons() {
        const earthIconsContainer = document.getElementById('earthIcons');
        if (!earthIconsContainer) return;
        
        const totalEarths = Math.ceil(this.userData.earthsRequired);
        const partialEarth = this.userData.earthsRequired % 1;
        
        earthIconsContainer.innerHTML = '';
        
        for (let i = 0; i < totalEarths; i++) {
            const earthIcon = document.createElement('div');
            earthIcon.className = 'earth-icon';
            
            if (i === totalEarths - 1 && partialEarth > 0) {
                earthIcon.classList.add('partial');
                earthIcon.style.background = `linear-gradient(135deg, #4ECDC4 0%, #4ECDC4 ${partialEarth * 100}%, #ddd ${partialEarth * 100}%, #ddd 100%)`;
            }
            
            earthIcon.style.animationDelay = `${i * 0.2}s`;
            earthIconsContainer.appendChild(earthIcon);
        }
    }
    
    // Enhanced Mumbai Skyline Generation
    generateMumbaiSkyline() {
        const skylineContainer = document.getElementById('skylineBuildings');
        if (!skylineContainer) return;
        
        skylineContainer.innerHTML = '';
        
        // Mumbai-specific category buildings
        const categoryBuildings = [
            {
                type: 'transport-tower',
                name: 'CST Station Complex',
                width: 80,
                height: this.calculateBuildingHeight('transport', 120, 200),
                position: '15%',
                icon: '🚊'
            },
            {
                type: 'housing-complex',
                name: 'Malabar Hill Residences',
                width: 100,
                height: this.calculateBuildingHeight('housing', 100, 180),
                position: '35%',
                icon: '🏠'
            },
            {
                type: 'food-market',
                name: 'Crawford Market',
                width: 90,
                height: this.calculateBuildingHeight('diet', 80, 160),
                position: '55%',
                icon: '🥬'
            },
            {
                type: 'shopping-district',
                name: 'Linking Road Shops',
                width: 85,
                height: this.calculateBuildingHeight('consumption', 90, 170),
                position: '75%',
                icon: '🛍️'
            }
        ];
        
        // Create category buildings
        categoryBuildings.forEach((building) => {
            const buildingElement = this.createCategoryBuilding(building);
            skylineContainer.appendChild(buildingElement);
        });
        
        // Add background buildings for depth
        this.addBackgroundBuildings(skylineContainer);
        
        // Update atmosphere based on overall eco-score
        this.updateAtmosphere();
    }
    
    calculateBuildingHeight(category, minHeight, maxHeight) {
        const categoryData = this.userData.categories[category];
        let efficiency = 0;
        
        switch(category) {
            case 'transport':
                efficiency = categoryData.efficiency;
                break;
            case 'housing':
                efficiency = 100 - categoryData.efficiency; // Inverse for energy usage
                break;
            case 'diet':
                efficiency = categoryData.localFood;
                break;
            case 'consumption':
                efficiency = categoryData.ecoScore * 10;
                break;
        }
        
        // Higher efficiency = taller building (better performance)
        const heightPercent = efficiency / 100;
        return minHeight + (maxHeight - minHeight) * heightPercent;
    }
    
    createCategoryBuilding(buildingData) {
        const building = document.createElement('div');
        building.className = `category-building ${buildingData.type}`;
        building.style.width = buildingData.width + 'px';
        building.style.height = buildingData.height + 'px';
        building.style.left = buildingData.position;
        building.title = buildingData.name;
        building.dataset.category = buildingData.type.split('-')[0];
        
        // Add building icon
        const iconElement = document.createElement('div');
        iconElement.className = 'building-icon';
        iconElement.textContent = buildingData.icon;
        iconElement.style.cssText = `
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 20px;
            z-index: 10;
        `;
        building.appendChild(iconElement);
        
        // Add windows
        this.addBuildingWindows(building, buildingData.width, buildingData.height);
        
        // Add click interaction
        building.addEventListener('click', () => {
            this.showBuildingDetails(buildingData);
        });
        
        return building;
    }
    
    addBuildingWindows(building, width, height) {
        const windowRows = Math.floor(height / 25);
        const windowsPerRow = Math.floor(width / 20);
        
        for (let row = 1; row < windowRows; row++) {
            for (let col = 0; col < windowsPerRow; col++) {
                if (Math.random() > 0.3) { // Random window lighting
                    const window = document.createElement('div');
                    window.className = 'building-window';
                    window.style.cssText = `
                        width: 8px;
                        height: 12px;
                        left: ${5 + col * 20}px;
                        top: ${height - row * 25}px;
                    `;
                    building.appendChild(window);
                }
            }
        }
    }
    
    addBackgroundBuildings(container) {
        const backgroundBuildings = 15;
        
        for (let i = 0; i < backgroundBuildings; i++) {
            const building = document.createElement('div');
            building.className = 'background-building';
            
            const width = 20 + Math.random() * 30;
            const height = 40 + Math.random() * 80;
            const left = (i / backgroundBuildings) * 100;
            
            building.style.cssText = `
                position: absolute;
                bottom: 0;
                width: ${width}px;
                height: ${height}px;
                left: ${left}%;
                background: linear-gradient(to top, #455a64, #607d8b);
                z-index: 1;
                opacity: 0.6;
            `;
            
            container.appendChild(building);
        }
    }
    
    updateAtmosphere() {
        const atmosphereLayer = document.getElementById('atmosphereLayer');
        if (!atmosphereLayer) return;
        
        const overallScore = this.calculateOverallScore();
        
        atmosphereLayer.classList.remove('clean', 'moderate', 'polluted');
        
        if (overallScore >= 80) {
            atmosphereLayer.classList.add('clean');
            this.updateTimeIndicator('🌅 Morning Air Quality: Good');
        } else if (overallScore >= 60) {
            atmosphereLayer.classList.add('moderate');
            this.updateTimeIndicator('⛅ Afternoon Air Quality: Moderate');
        } else {
            atmosphereLayer.classList.add('polluted');
            this.updateTimeIndicator('🌫️ Evening Air Quality: Poor');
        }
    }
    
    calculateOverallScore() {
        const transport = this.userData.categories.transport.efficiency;
        const housing = this.userData.categories.housing.efficiency;
        const diet = this.userData.categories.diet.localFood;
        const consumption = this.userData.categories.consumption.ecoScore * 10;
        
        return (transport + housing + diet + consumption) / 4;
    }
    
    updateTimeIndicator(message) {
        const timeIndicator = document.getElementById('timeIndicator');
        if (timeIndicator) {
            timeIndicator.textContent = message;
        }
    }
    
    showBuildingDetails(buildingData) {
        const modal = this.createModal();
        const category = buildingData.type.split('-')[0];
        const categoryData = this.userData.categories[category];
        
        modal.innerHTML = `
            <div class="modal-content bg-white rounded-2xl p-8 max-w-md mx-auto my-20">
                <div class="text-center mb-6">
                    <div class="text-4xl mb-3">${buildingData.icon}</div>
                    <h3 class="text-2xl font-bold text-mumbai-dark">${buildingData.name}</h3>
                    <p class="text-gray-600 capitalize">${category} Impact Details</p>
                </div>
                
                <div class="category-details">
                    ${this.getCategoryDetailsHTML(category, categoryData)}
                </div>
                
                <div class="modal-actions mt-6 flex gap-3">
                    <button class="close-modal bg-gray-500 text-white px-4 py-2 rounded-lg flex-1">Close</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Setup modal interactions
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.remove();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
    
    getCategoryDetailsHTML(category, data) {
        switch(category) {
            case 'transport':
                return `
                    <div class="detail-item mb-4">
                        <span class="font-semibold">Weekly CO₂ Emissions:</span>
                        <span class="text-blue-600">${data.co2Weekly} kg</span>
                    </div>
                    <div class="detail-item mb-4">
                        <span class="font-semibold">Efficiency vs Cars:</span>
                        <span class="text-green-600">${data.efficiency}% better</span>
                    </div>
                    <div class="detail-item">
                        <span class="font-semibold">Primary Mode:</span>
                        <span>${data.mode}</span>
                    </div>
                `;
            case 'housing':
                return `
                    <div class="detail-item mb-4">
                        <span class="font-semibold">Monthly Energy:</span>
                        <span class="text-green-600">${data.energyMonthly} kWh</span>
                    </div>
                    <div class="detail-item mb-4">
                        <span class="font-semibold">Per-person Efficiency:</span>
                        <span class="text-green-600">${data.efficiency}% better</span>
                    </div>
                    <div class="detail-item">
                        <span class="font-semibold">Home Type:</span>
                        <span>${data.type}</span>
                    </div>
                `;
            case 'diet':
                return `
                    <div class="detail-item mb-4">
                        <span class="font-semibold">Water Saved Weekly:</span>
                        <span class="text-blue-600">${data.waterSaved.toLocaleString()} liters</span>
                    </div>
                    <div class="detail-item mb-4">
                        <span class="font-semibold">Local Food %:</span>
                        <span class="text-green-600">${data.localFood}%</span>
                    </div>
                    <div class="detail-item">
                        <span class="font-semibold">Diet Type:</span>
                        <span>${data.type}</span>
                    </div>
                `;
            case 'consumption':
                return `
                    <div class="detail-item mb-4">
                        <span class="font-semibold">Plastic Bags Avoided:</span>
                        <span class="text-green-600">${data.plasticSaved}/month</span>
                    </div>
                    <div class="detail-item">
                        <span class="font-semibold">Eco Shopping Score:</span>
                        <span class="text-green-600">${data.ecoScore}/10</span>
                    </div>
                `;
            default:
                return '<p>No details available</p>';
        }
    }
    
    createModal() {
        const modal = document.createElement('div');
        modal.className = 'modal fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
        modal.style.animation = 'fadeIn 0.3s ease-out';
        return modal;
    }
    
    // Emotional Response System
    setupEmotionalResponse() {
        const emotionOptions = document.querySelectorAll('.emotion-option');
        const responseArea = document.getElementById('emotionResponse');
        
        if (!emotionOptions.length || !responseArea) return;
        
        const emotionResponses = {
            inspired: {
                title: "That's Wonderful! 🌱",
                message: "Your inspiration is the first step toward positive change. Mumbai needs more environmentally conscious citizens like you. Let's channel this energy into actionable steps that can make a real difference."
            },
            concerned: {
                title: "Your Concern Shows You Care 😟",
                message: "Feeling concerned about our environmental impact is natural and shows your awareness. The good news is that small, consistent actions can create meaningful change. Mumbai's future is brighter with conscious citizens like you."
            },
            motivated: {
                title: "Ready to Take Action! 💪",
                message: "Your motivation is exactly what Mumbai needs! With the right actions, you can significantly reduce your footprint and inspire others. Let's turn this motivation into concrete environmental improvements."
            },
            curious: {
                title: "Curiosity Leads to Change 🤔",
                message: "Your curiosity about environmental impact is the beginning of awareness. Learning more about sustainable living in Mumbai will help you make informed decisions that benefit both you and the city."
            },
            hopeful: {
                title: "Hope Drives Progress ✨",
                message: "Your hopefulness about environmental change is infectious! Mumbai's environmental challenges are solvable with collective action. Your positive attitude combined with practical steps can create real impact."
            }
        };
        
        emotionOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Remove previous selections
                emotionOptions.forEach(opt => opt.classList.remove('selected'));
                
                // Select current option
                option.classList.add('selected');
                
                // Show personalized response
                const emotion = option.dataset.emotion;
                const response = emotionResponses[emotion];
                
                if (response) {
                    const titleEl = document.getElementById('responseTitle');
                    const messageEl = document.getElementById('responseMessage');
                    
                    if (titleEl) titleEl.textContent = response.title;
                    if (messageEl) messageEl.textContent = response.message;
                    
                    responseArea.classList.remove('hidden');
                    
                    // Scroll to response
                    responseArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
        });
    }
    
    // Data Visualization
    setupDataVisualization() {
        this.createLandTypeChart();
        this.createConsumptionChart();
    }
    
    createLandTypeChart() {
        const canvas = document.getElementById('landTypeChart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 120;
        
        const data = [
            { label: 'Built-Up Land', value: 15, color: '#87ceeb' },
            { label: 'Forest Products', value: 20, color: '#90EE90' },
            { label: 'Cropland', value: 25, color: '#FFD700' },
            { label: 'Grazing Land', value: 10, color: '#98FB98' },
            { label: 'Fishing Grounds', value: 5, color: '#A9A9A9' },
            { label: 'Carbon Footprint', value: 25, color: '#FF6B6B' }
        ];
        
        let currentAngle = 0;
        
        data.forEach(segment => {
            const sliceAngle = (segment.value / 100) * 2 * Math.PI;
            
            // Draw slice
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
            ctx.closePath();
            ctx.fillStyle = segment.color;
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            currentAngle += sliceAngle;
        });
    }
    
    createConsumptionChart() {
        const container = document.getElementById('consumptionChart');
        if (!container) return;
        
        const categories = [
            { name: 'Food', value: 30, icon: '🍽️', color: '#FF6B6B' },
            { name: 'Shelter', value: 25, icon: '🏠', color: '#4ECDC4' },
            { name: 'Mobility', value: 35, icon: '🚗', color: '#45B7D1' },
            { name: 'Goods', value: 20, icon: '📦', color: '#96CEB4' },
            { name: 'Services', value: 15, icon: '💼', color: '#FECA57' }
        ];
        
        container.innerHTML = '';
        
        categories.forEach((category) => {
            const bar = document.createElement('div');
            bar.className = 'consumption-bar';
            bar.style.cssText = `
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 0 10px;
                cursor: pointer;
                transition: transform 0.3s ease;
            `;
            
            const height = (category.value / 40) * 150; // Max height 150px
            
            bar.innerHTML = `
                <div class="bar-3d" style="
                    width: 40px;
                    height: ${height}px;
                    background: linear-gradient(45deg, ${category.color}, ${category.color}dd);
                    border-radius: 4px 4px 0 0;
                    margin-bottom: 8px;
                    position: relative;
                    transform: perspective(100px) rotateX(10deg);
                    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
                "></div>
                <div class="bar-icon" style="font-size: 20px; margin-bottom: 4px;">${category.icon}</div>
                <div class="bar-label" style="font-size: 12px; font-weight: 500;">${category.name}</div>
            `;
            
            bar.addEventListener('mouseenter', () => {
                bar.style.transform = 'scale(1.1)';
            });
            
            bar.addEventListener('mouseleave', () => {
                bar.style.transform = 'scale(1)';
            });
            
            container.appendChild(bar);
        });
        
        container.style.cssText = `
            display: flex;
            justify-content: center;
            align-items: end;
            height: 200px;
            padding: 20px;
        `;
    }
    
    // Interactive Features
    setupInteractiveFeatures() {
        this.setupShareFunctionality();
        this.setupQuizRetake();
    }
    
    setupShareFunctionality() {
        const shareBtn = document.querySelector('.share-results-btn');
        
        if (shareBtn) {
            shareBtn.addEventListener('click', () => {
                this.shareResults();
            });
        }
    }
    
    shareResults() {
        const shareData = {
            title: 'My Mumbai EcoFootprint Report',
            text: `I just calculated my environmental impact! My Earth Overshoot Day is ${this.userData.overshootDate}. If everyone lived like me, we'd need ${this.userData.earthsRequired} Earths. Check your footprint too! 🌱`,
            url: window.location.href
        };
        
        if (navigator.share) {
            navigator.share(shareData);
        } else {
            // Fallback for browsers without Web Share API
            const shareText = `${shareData.text}\n\n${shareData.url}`;
            navigator.clipboard.writeText(shareText).then(() => {
                this.showNotification('Share text copied to clipboard!', 'success');
            });
        }
    }
    
    setupQuizRetake() {
        const retakeBtn = document.querySelector('.retake-quiz-btn');
        
        if (retakeBtn) {
            retakeBtn.addEventListener('click', () => {
                this.retakeQuiz();
            });
        }
    }
    
    retakeQuiz() {
        if (confirm('Are you sure you want to retake the quiz? This will reset your current results.')) {
            // Show loading
            this.showLoadingOverlay();
            
            // Simulate quiz retake
            setTimeout(() => {
                // Generate new random data for demo
                this.userData.earthsRequired = 2.5 + Math.random() * 1.5;
                this.userData.comparisonPercent = Math.floor(Math.random() * 40) - 20;
                
                // Update display
                this.initializeData();
                this.generateEarthIcons();
                this.generateMumbaiSkyline();
                
                this.hideLoadingOverlay();
                this.showNotification('Quiz completed! Here are your updated results.', 'success');
            }, 3000);
        }
    }
    
    // Utility Functions
    animateCounters() {
        const counters = [
            { element: document.getElementById('earthsNumber'), target: this.userData.earthsRequired, decimals: 1 },
            { element: document.getElementById('ecologicalFootprint'), target: this.userData.ecologicalFootprint, decimals: 1 },
            { element: document.getElementById('carbonFootprint'), target: this.userData.carbonFootprint, decimals: 1 },
            { element: document.getElementById('carbonPercentage'), target: this.userData.carbonPercentage, decimals: 0 }
        ];
        
        counters.forEach(counter => {
            if (counter.element) {
                this.animateCounter(counter.element, 0, counter.target, 2000, counter.decimals);
            }
        });
    }
    
    animateCounter(element, start, end, duration, decimals = 0) {
        const startTime = performance.now();
        
        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const current = start + (end - start) * easeOutCubic;
            
            element.textContent = current.toFixed(decimals);
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };
        
        requestAnimationFrame(updateCounter);
    }
    
    showLoadingOverlay() {
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) {
            overlay.classList.remove('hidden');
        }
    }
    
    hideLoadingOverlay() {
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) {
            setTimeout(() => {
                overlay.classList.add('hidden');
            }, 1000);
        }
    }
    
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification fixed top-4 right-4 px-6 py-4 rounded-lg font-medium z-50 transform translate-x-full transition-transform duration-300`;
        
        const colors = {
            success: 'bg-green-500 text-white',
            error: 'bg-red-500 text-white',
            info: 'bg-blue-500 text-white',
            warning: 'bg-orange-500 text-white'
        };
        
        notification.className += ` ${colors[type]}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Slide in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Slide out and remove
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 3000);
    }
}

// Global function for button clicks
function showSolutions() {
    const reportInstance = window.mumbaiEcoReport;
    if (reportInstance) {
        reportInstance.switchTab('solutions');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.mumbaiEcoReport = new MumbaiEcoFootprintReport();
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MumbaiEcoFootprintReport;
}