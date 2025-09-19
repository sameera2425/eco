# Mumbai Eco-Footprint Report

A beautiful, interactive eco-footprint report page with an animated Mumbai skyline that dynamically changes based on user responses. This project visualizes environmental impact through stunning graphics and provides actionable insights for Mumbai residents.

## 🌟 Features

### Visual Components
- **Dynamic Mumbai Skyline**: Interactive skyline with recognizable landmarks that changes based on eco-score
- **Environmental States**: 
  - Clean (80%+): Bright, clear sky with vibrant colors
  - Moderate (60-79%): Standard visibility with some atmospheric haze
  - Polluted (<60%): Hazy atmosphere with reduced visibility
- **Animated Elements**: Pulsing sun, floating clouds, flickering windows
- **Monsoon Effects**: Special rain animation during Mumbai's monsoon season

### Interactive Features
- **Clickable Buildings**: Click on buildings to see landmark information
- **Score Adjustment**: Triple-click the score to adjust it and see skyline changes
- **Progress Animations**: Staggered loading animations for all components
- **Hover Effects**: Smooth transitions on cards and buttons
- **Easter Eggs**: Hidden Mumbai-themed surprises (try the Konami code!)

### Mumbai-Specific Content
- **Localized Tips**: Environment-friendly suggestions specific to Mumbai
- **Landmark Recognition**: Famous Mumbai buildings like Gateway of India, Taj Hotel
- **Air Quality Indicator**: Real-time air quality status display
- **Cultural References**: Mumbai-specific challenges and solutions

### Technical Excellence
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Performance Optimized**: Efficient animations and minimal resource usage
- **Accessibility**: ARIA labels, keyboard navigation, reduced motion support
- **Cross-Browser**: Compatible with all modern browsers

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. Enjoy the interactive experience!

### File Structure
```
mumbai-eco-report/
├── index.html          # Main HTML structure
├── styles.css          # Custom CSS animations and styling
├── script.js           # Interactive JavaScript functionality
└── README.md           # Project documentation
```

## 🎨 Design Features

### Color Palette
- **Primary Green**: `#4CAF50` - Environmental theme
- **Sky Blue**: `#87CEEB` - Mumbai sky and sea
- **Earth Tones**: `#8D6E63` - Buildings and landmarks
- **Warning Orange**: `#FF9800` - Moderate air quality
- **Alert Red**: `#F44336` - Poor air quality

### Typography
- **Font Family**: Poppins - Clean, modern, and readable
- **Responsive Sizing**: Scales appropriately across devices
- **Weight Hierarchy**: 300-700 weights for proper visual hierarchy

### Layout
- **Mobile-First**: Responsive grid system using Tailwind CSS
- **Card-Based**: Clean card layout with subtle shadows
- **Progressive Disclosure**: Information revealed as needed

## 🏙️ Mumbai Skyline Features

### Landmarks Included
1. **Gateway of India Area** - Iconic historical monument
2. **Taj Mahal Palace Hotel** - Luxury heritage hotel
3. **Nariman Point** - Business district skyscrapers
4. **Malabar Hill** - Residential high-rises
5. **Bandra-Kurla Complex (BKC)** - Modern business center
6. **Dharavi** - Urban development area

### Interactive Elements
- **Building Information**: Click any building for details
- **Window Lighting**: Realistic window patterns with random lighting
- **Atmospheric Effects**: Dynamic weather based on eco-score
- **Air Quality Indicator**: Real-time status display

## 📱 Responsive Breakpoints

- **Mobile**: < 480px - Single column layout
- **Tablet**: 481px - 768px - Two column grid
- **Desktop**: > 768px - Three column grid
- **Large Desktop**: > 1200px - Optimized spacing

## 🔧 Customization

### Updating Eco-Score
```javascript
// Change the score programmatically
const report = new MumbaiEcoReport();
report.updateScore(85); // Sets score to 85%
```

### Adding New Landmarks
```javascript
// Add to landmarks array in script.js
const landmarks = [
    { position: 5, height: 160, type: 'gateway', name: 'Your Landmark' }
];
```

### Modifying Environmental States
```css
/* Add new state in styles.css */
.excellent .skyline-container {
    background: linear-gradient(to bottom, #e8f5e9 0%, #c8e6c9 100%);
}
```

## 🌍 Environmental Categories

### Transport
- **Public Transport**: Mumbai local trains, buses
- **Personal Vehicles**: Cars, motorcycles, auto-rickshaws
- **Active Transport**: Walking, cycling
- **Recommendations**: Use public transport, car-pooling

### Housing
- **Energy Consumption**: Electricity usage patterns
- **Space Efficiency**: Per-person space utilization
- **Cooling Methods**: AC vs fans, natural ventilation
- **Recommendations**: Solar panels, efficient appliances

### Diet
- **Food Choices**: Vegetarian vs non-vegetarian impact
- **Local Sourcing**: Mumbai local markets
- **Waste Reduction**: Food wastage minimization
- **Recommendations**: Local seasonal produce

## 💡 Improvement Tips

### High Impact
1. **Solar Panel Installation** - Reduce electricity costs
2. **Public Transport Usage** - Lower carbon emissions
3. **Water Conservation** - Rainwater harvesting

### Medium Impact
1. **Local Shopping** - Support Mumbai farmers
2. **Waste Segregation** - Improve recycling
3. **Energy Efficient Appliances** - Reduce consumption

### Low Impact
1. **LED Lighting** - Lower energy usage
2. **Cycling/Walking** - Short distance travel
3. **Digital Receipts** - Reduce paper waste

## 🎯 Performance Features

### Optimizations
- **Lazy Loading**: Images and animations load as needed
- **Efficient DOM**: Minimal DOM manipulation
- **CSS Transforms**: Hardware-accelerated animations
- **Debounced Events**: Optimized event handling

### Browser Support
- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

## 🔒 Privacy & Data

### Data Collection
- No personal data collected
- No cookies or tracking
- All calculations done client-side
- Download feature saves only score data

### Sharing
- Web Share API integration
- Fallback clipboard copying
- No data sent to external servers

## 🤝 Contributing

### Development Setup
1. Fork the repository
2. Make your changes
3. Test across different browsers and devices
4. Submit a pull request

### Coding Standards
- Use semantic HTML
- Follow BEM CSS methodology
- Write clean, commented JavaScript
- Ensure accessibility compliance

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Mumbai Municipal Corporation for environmental data insights
- Tailwind CSS for responsive design framework
- Font Awesome for iconography
- Google Fonts for typography

## 📞 Support

For questions, suggestions, or bug reports:
- Create an issue on the repository
- Email: support@mumbai-eco-report.com
- Follow us for updates: @MumbaiEco

---

**Made with 💚 for Mumbai's environment**