// Enhanced Crop Data
const cropData = {
    wheat: {
        name: "Wheat (गहू)",
        sowing: "November",
        harvesting: "March",
        irrigation: "Moderate (weekly)",
        idealTemp: "20-25°C",
        rainfall: "50-75 cm",
        tasks: {
            "November": "Prepare land with 2-3 ploughings, sow seeds @ 100kg/acre",
            "December": "First irrigation 3 weeks after sowing, apply urea @ 50kg/acre",
            "January": "Second irrigation during crown root initiation",
            "February": "Watch for yellow rust, spray Propiconazole if needed",
            "March": "Harvest when grains are hard (25-30% moisture)"
        },
        varieties: ["HD-2967", "PBW-550", "Khapli (Emmer)"]
    },
    rice: {
        name: "Rice (तांदूळ)",
        sowing: "June-July",
        harvesting: "October-November",
        irrigation: "High (keep flooded initially)",
        idealTemp: "25-35°C",
        rainfall: "150-300 cm",
        tasks: {
            "June": "Prepare nursery (1000 sqm for 1 acre), soak seeds for 12 hours",
            "July": "Transplant 25-30 day old seedlings (2-3 per hill)",
            "August": "Apply 2nd dose of urea @ 50kg/acre, control weeds",
            "September": "Drain field 2 weeks before harvest",
            "October": "Harvest when 80% grains turn yellow"
        },
        varieties: ["Sona Masuri", "Pusa Basmati", "Swarna"]
    },
    cotton: {
        name: "Cotton (कापूस)",
        sowing: "May-June",
        harvesting: "October-December",
        irrigation: "Moderate (every 10-15 days)",
        idealTemp: "25-35°C",
        rainfall: "50-100 cm",
        tasks: {
            "May": "Deep ploughing, sow @ 4-5 kg/acre (Bt) or 10-12 kg/acre (Desi)",
            "June": "Thinning to maintain 45x45 cm spacing",
            "July": "Square formation stage - monitor for sucking pests",
            "August": "Flowering - reduce irrigation frequency",
            "September": "Boll formation - watch for bollworms",
            "October": "First picking when bolls fully open"
        },
        varieties: ["Bollgard II", "V-797", "Suvin"]
    },
    sugarcane: {
        name: "Sugarcane (ऊस)",
        sowing: "October-November or February-March",
        harvesting: "After 12-18 months",
        irrigation: "Heavy (every 7-10 days in summer)",
        idealTemp: "20-30°C",
        rainfall: "75-150 cm",
        tasks: {
            "Land Prep": "Deep ploughing, add 25-30 tonnes FYM/acre",
            "Planting": "Setts @ 35,000/acre in 90 cm rows",
            "Early Care": "Earthing up at 45 days, weed control",
            "Growth": "Regular irrigation, ratoon management",
            "Harvest": "Cut when brix reaches 18-20%"
        },
        varieties: ["Co-86032", "CoM-0265", "CoV-94101"]
    }
};

// Generate Crop Calendar
function generateCalendar() {
    const cropSelect = document.getElementById('crop-select');
    const selectedCrop = cropSelect.value;
    const outputDiv = document.getElementById('calendar-output');
    
    if (!selectedCrop) {
        outputDiv.innerHTML = '<div class="month-card"><i class="fas fa-exclamation-circle"></i><div>Please select a crop first</div></div>';
        return;
    }
    
    const crop = cropData[selectedCrop];
    let html = `
        <h3>${crop.name} Farming Calendar</h3>
        <div style="display: flex; gap: 15px; flex-wrap: wrap; margin: 15px 0;">
            <div style="background: #e3f2fd; padding: 8px 15px; border-radius: 20px;">
                <i class="fas fa-temperature-low"></i> Ideal Temp: ${crop.idealTemp}
            </div>
            <div style="background: #e8f5e9; padding: 8px 15px; border-radius: 20px;">
                <i class="fas fa-cloud-rain"></i> Rainfall: ${crop.rainfall}
            </div>
            <div style="background: #fff8e1; padding: 8px 15px; border-radius: 20px;">
                <i class="fas fa-tags"></i> Varieties: ${crop.varieties.join(", ")}
            </div>
        </div>
        <h4 style="margin: 15px 0 10px;">Month-wise Tasks:</h4>
    `;
    
    for (const month in crop.tasks) {
        html += `
            <div class="month-card">
                <i class="fas fa-calendar-day"></i>
                <div>
                    <strong>${month}:</strong> ${crop.tasks[month]}
                </div>
            </div>
        `;
    }
    
    outputDiv.innerHTML = html;
    
    // Show success animation
    outputDiv.style.animation = "fadeIn 0.5s";
}

// Print Calendar
function printCalendar() {
    const outputDiv = document.getElementById('calendar-output');
    if (outputDiv.innerText.includes("Select a crop")) {
        alert("Please generate a calendar first");
        return;
    }
    
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(`
        <html>
            <head>
                <title>AgriSmart Crop Calendar</title>
                <style>
                    body { font-family: Arial; padding: 20px; }
                    h1 { color: #27ae60; }
                    .task { margin-bottom: 10px; }
                </style>
            </head>
            <body>
                <h1>AgriSmart Crop Calendar</h1>
                ${outputDiv.innerHTML}
                <p style="margin-top: 30px; font-size: 0.8em; text-align: center;">
                    Generated on ${new Date().toLocaleDateString()} by AgriSmart
                </p>
            </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
        printWindow.print();
        printWindow.close();
    }, 500);
}

// ROI Calculator
function calculateROI() {
    const landArea = parseFloat(document.getElementById('land-area').value) || 0;
    const inputCost = parseFloat(document.getElementById('input-cost').value) || 0;
    const expectedYield = parseFloat(document.getElementById('expected-yield').value) || 0;
    const marketPrice = parseFloat(document.getElementById('market-price').value) || 0;
    
    const totalCost = landArea * inputCost;
    const totalRevenue = landArea * expectedYield * marketPrice;
    const profit = totalRevenue - totalCost;
    const profitPerAcre = (expectedYield * marketPrice) - inputCost;
    
    document.getElementById('total-cost').textContent = `₹${totalCost.toLocaleString('en-IN')}`;
    document.getElementById('total-revenue').textContent = `₹${totalRevenue.toLocaleString('en-IN')}`;
    document.getElementById('profit-result').textContent = `₹${profit.toLocaleString('en-IN')}`;
    document.getElementById('profit-per-acre').textContent = `₹${profitPerAcre.toLocaleString('en-IN')}`;
    
    // Visual feedback
    const resultElement = document.getElementById('profit-result');
    resultElement.style.transform = "scale(1.1)";
    setTimeout(() => {
        resultElement.style.transform = "scale(1)";
    }, 300);
}

// Weather Data
function fetchWeather() {
    // Simulate API call
    document.getElementById('weather-temp').textContent = "28°C";
    document.getElementById('weather-desc').textContent = "Partly Cloudy";
    document.getElementById('weather-rain').innerHTML = "<i class='fas fa-umbrella'></i> Rain probability: 20%";
    
    // Change icon based on weather
    const weatherIcon = document.querySelector('.weather-icon i');
    weatherIcon.className = "fas fa-sun";
}

function refreshWeather() {
    const weatherIcon = document.querySelector('.weather-icon i');
    weatherIcon.style.transform = "rotate(360deg)";
    setTimeout(() => {
        weatherIcon.style.transform = "rotate(0deg)";
        fetchWeather();
    }, 1000);
}

// More Tips Functions
function showMoreTips() {
    const tipsDiv = document.getElementById('irrigation-tips');
    tipsDiv.innerHTML += `
        <div class="month-card">
            <i class="fas fa-ruler-combined"></i>
            <div>
                <strong>Soil Moisture Check:</strong> Dig 15cm - if soil sticks, delay watering
            </div>
        </div>
        <div class="month-card">
            <i class="fas fa-cloud"></i>
            <div>
                <strong>Rain Adjustment:</strong> Reduce irrigation by 50% after 25mm rain
            </div>
        </div>
    `;
    event.target.style.display = 'none';
}

function showMoreEcoTips() {
    const tipsDiv = document.getElementById('eco-tips');
    tipsDiv.innerHTML += `
        <div class="month-card">
            <i class="fas fa-spider"></i>
            <div>
                <strong>Garlic-Chili Spray:</strong> Blend 100g each in 1L water, strain and spray
            </div>
        </div>
        <div class="month-card">
            <i class="fas fa-worm"></i>
            <div>
                <strong>Vermiwash:</strong> Use liquid from vermicompost as foliar spray
            </div>
        </div>
    `;
    event.target.style.display = 'none';
}

// Government Schemes
function showMoreSchemes() {
    const schemesDiv = document.getElementById('schemes-list');
    schemesDiv.innerHTML += `
        <div class="scheme-card">
            <h4><i class="fas fa-tractor"></i> Farm Mechanization</h4>
            <div class="scheme-meta">
                <span><i class="fas fa-rupee-sign"></i> Up to 40% subsidy</span>
                <span><i class="fas fa-users"></i> Small farmers</span>
            </div>
            <p>Subsidy for purchasing farm equipment like power tillers, harvesters</p>
            <button class="apply-btn" onclick="showSchemeDetails('farm-mech')">
                <i class="fas fa-info-circle"></i> Details
            </button>
        </div>
    `;
    event.target.style.display = 'none';
}

function changeSchemeTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.scheme-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Deactivate all tab buttons
    document.querySelectorAll('.scheme-tab').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Activate selected tab
    document.getElementById(`${tabId}-schemes`).classList.add('active');
    event.target.classList.add('active');
}

function showSchemeDetails(schemeId) {
    alert(`Showing details for ${schemeId}. In full implementation, this would show complete scheme details, eligibility criteria, and application process.`);
}

function showAllSchemes() {
    alert("This would open a complete directory of all government schemes with search and filter functionality.");
}

// Language Toggle
function changeLanguage(lang) {
    // Deactivate all language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Activate selected language button
    event.target.classList.add('active');
    
    // In full implementation, this would translate all text
    let message;
    if (lang === 'hi') message = "भाषा हिंदी में बदल गई। पूर्ण कार्यान्वयन में, यह सभी पाठ का अनुवाद करेगा।";
    else if (lang === 'mr') message = "भाषा मराठी मध्ये बदलली. पूर्ण अंमलबजावणीमध्ये, हे सर्व मजकूर भाषांतरित करेल.";
    else message = "Language changed to English. In full implementation, this would translate all text.";
    
    // Show temporary notification
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.backgroundColor = 'var(--farm-green)';
    notification.style.color = 'white';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '50px';
    notification.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    notification.style.zIndex = '1000';
    notification.style.animation = 'fadeIn 0.3s';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeIn 0.3s reverse';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Reaction Tracking
function trackReaction(type) {
    const btn = event.target.closest('button');
    btn.style.transform = "scale(0.9)";
    
    setTimeout(() => {
        btn.style.transform = "scale(1)";
        
        let message;
        if (type === 'like') message = "Thanks for liking AgriSmart!";
        else if (type === 'helpful') message = "We're glad you found this helpful!";
        else message = "Share AgriSmart with other farmers!";
        
        alert(message);
    }, 300);
}

// Other Interactive Functions
function callKisanMitra() {
    alert("Calling Kisan Mitra helpline at +91 9876543210\nAvailable 10AM-6PM, Mon-Sat");
}

function openFeedbackForm() {
    alert("Opening feedback form. In full implementation, this would show a form to collect farmer feedback.");
}

function shareYourStory() {
    alert("This would open a form for farmers to share their success stories with AgriSmart.");
}

function openMap() {
    alert("Opening map to AgriSmart Center in Nashik. In full app, this would launch Google Maps.");
}

// Initialize
window.onload = function() {
    fetchWeather();
    calculateROI(); // Show default calculation
    
    // Set current year in footer
    document.querySelector('.copyright p').textContent = 
        document.querySelector('.copyright p').textContent.replace('2023', new Date().getFullYear());
};
