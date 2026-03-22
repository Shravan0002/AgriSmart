/* Modern Color Palette */  
:root {
    --farm-green: #27ae60;
    --soil-brown: #8b4513;
    --sun-yellow: #f39c12;
    --water-blue: #3498db;
    --harvest-gold: #f1c40f;
    --danger-red: #e74c3c;
    --white: #ffffff;
    --light-bg: #f9f9f9;
    --dark-text: #2c3e50;
}

/* Base Styles */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', 'Segoe UI', system-ui, sans-serif;
}

body {
    background-color: var(--light-bg);
    color: var(--dark-text);
    line-height: 1.6;
    background-image: url('https://www.transparenttextures.com/patterns/asfalt-light.png');
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* Creative Header with Farmer Silhouette */
header {
    background: linear-gradient(135deg, var(--farm-green), var(--water-blue));
    color: var(--white);
    padding: 30px 0;
    text-align: center;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

header::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="%23ffffff"></path><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="%23ffffff"></path><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="%23ffffff"></path></svg>');
    background-size: cover;
}

.logo {
    font-size: 3rem;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

.tagline {
    font-size: 1.3rem;
    opacity: 0.95;
    max-width: 800px;
    margin: 0 auto;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
}

/* Language Toggle with Flags */
.language-toggle {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
}

.lang-btn {
    background: rgba(255,255,255,0.2);
    border: none;
    color: var(--white);
    padding: 8px 15px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 600;
}

.lang-btn:hover {
    background: rgba(255,255,255,0.3);
    transform: translateY(-2px);
}

.lang-btn.active {
    background: var(--white);
    color: var(--farm-green);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* Reaction Buttons */
.reaction-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 30px 0;
}

.reaction-btn {
    background: var(--white);
    border: none;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.reaction-btn i {
    font-size: 1.5rem;
    margin-bottom: 5px;
}

.reaction-btn:hover {
    transform: translateY(-5px) scale(1.05);
}

.reaction-btn.like:hover {
    background: #e74c3c20;
    color: var(--danger-red);
}

.reaction-btn.helpful:hover {
    background: #27ae6020;
    color: var(--farm-green);
}

.reaction-btn.share:hover {
    background: #3498db20;
    color: var(--water-blue);
}

/* Features Grid */
.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin: 40px 0;
}

.feature-card {
    background-color: var(--white);
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
    border-top: 5px solid var(--farm-green);
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
}

.feature-card::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--farm-green), var(--water-blue));
}

.feature-icon {
    font-size: 2.5rem;
    margin-bottom: 15px;
    color: var(--farm-green);
}

.feature-card h3 {
    margin-bottom: 15px;
    color: var(--dark-text);
    position: relative;
    display: inline-block;
}

.feature-card h3::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50px;
    height: 3px;
    background: var(--sun-yellow);
}

/* Enhanced Crop Calendar */
.calendar-controls {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
}

select, button, input {
    padding: 12px 18px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s;
}

select {
    flex: 1;
    min-width: 200px;
    background-color: var(--white);
}

button {
    background-color: var(--farm-green);
    color: var(--white);
    border: none;
    cursor: pointer;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
}

button:hover {
    background-color: var(--water-blue);
    box-shadow: 0 4px 8px rgba(52, 152, 219, 0.3);
}

button.secondary {
    background-color: var(--sun-yellow);
    color: var(--dark-text);
}

button.secondary:hover {
    background-color: var(--harvest-gold);
}

.calendar-output {
    background-color: var(--white);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.month-card {
    margin-bottom: 15px;
    padding: 15px 20px;
    border-left: 4px solid var(--farm-green);
    background-color: #f9f9f9;
    border-radius: 8px;
    transition: transform 0.3s;
    display: flex;
    align-items: center;
    gap: 15px;
}

.month-card:hover {
    transform: translateX(5px);
}

.month-card i {
    font-size: 1.5rem;
    color: var(--sun-yellow);
}

/* Enhanced ROI Calculator */
.calculator {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
}

.calculator-input, .calculator-result {
    background-color: var(--white);
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.calculator-result {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.input-group {
    margin-bottom: 20px;
}

.input-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: var(--dark-text);
}

.input-group input {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
}

.result-value {
    font-size: 2rem;
    color: var(--farm-green);
    font-weight: 700;
    margin: 10px 0;
}

.result-detail {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    padding-bottom: 8px;
    border-bottom: 1px dashed #ddd;
}

/* Weather Widget */
.weather-widget {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    position: relative;
    overflow: hidden;
}

.weather-widget::before {
    content: "";
    position: absolute;
    top: -50px;
    right: -50px;
    width: 150px;
    height: 150px;
    background: rgba(255,255,255,0.1);
    border-radius: 50%;
}

.weather-icon {
    font-size: 3.5rem;
    margin: 15px 0;
    color: var(--sun-yellow);
}

.weather-temp {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 10px 0;
}

/* Government Schemes - Enhanced */
.schemes-container {
    margin-top: 30px;
}

.scheme-tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.scheme-tab {
    padding: 10px 20px;
    background: #eee;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 600;
}

.scheme-tab:hover, .scheme-tab.active {
    background: var(--farm-green);
    color: white;
}

.scheme-content {
    display: none;
}

.scheme-content.active {
    display: block;
    animation: fadeIn 0.5s;
}

.scheme-card {
    background: white;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 15px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.05);
    border-left: 4px solid var(--farm-green);
    transition: transform 0.3s;
}

.scheme-card:hover {
    transform: translateY(-5px);
}

.scheme-card h4 {
    color: var(--farm-green);
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.scheme-card h4 i {
    color: var(--sun-yellow);
}

.scheme-meta {
    display: flex;
    gap: 15px;
    margin: 10px 0;
    font-size: 0.9rem;
    color: #666;
}

.scheme-meta span {
    display: flex;
    align-items: center;
    gap: 5px;
}

.apply-btn {
    background: var(--farm-green);
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    font-size: 0.9rem;
    transition: all 0.3s;
    display: inline-flex;
    align-items: center;
    gap: 5px;
}

.apply-btn:hover {
    background: var(--water-blue);
}

/* Testimonials */
.testimonials {
    margin: 50px 0;
}

.testimonial-card {
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.05);
    margin: 20px 0;
    position: relative;
}

.testimonial-card::before {
    content: '"';
    font-size: 5rem;
    color: rgba(39, 174, 96, 0.1);
    position: absolute;
    top: 10px;
    left: 20px;
    line-height: 1;
}

.testimonial-author {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
}

.author-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--farm-green);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
}

/* Footer */
footer {
    background: linear-gradient(135deg, var(--dark-text), #000);
    color: var(--white);
    padding: 50px 0 20px;
    margin-top: 50px;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    margin-bottom: 30px;
}

.footer-column h3 {
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 10px;
}

.footer-column h3::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: var(--sun-yellow);
}

.footer-links {
    list-style: none;
}

.footer-links li {
    margin-bottom: 10px;
}

.footer-links a {
    color: #ddd;
    text-decoration: none;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 8px;
}

.footer-links a:hover {
    color: var(--sun-yellow);
    transform: translateX(5px);
}

.social-links {
    display: flex;
    gap: 15px;
    margin-top: 20px;
}

.social-links a {
    color: white;
    background: rgba(255,255,255,0.1);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
}

.social-links a:hover {
    background: var(--sun-yellow);
    color: var(--dark-text);
    transform: translateY(-3px);
}

.copyright {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,0.1);
    font-size: 0.9rem;
    color: #aaa;
}

/* Animations */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Responsive */
@media (max-width: 768px) {
    .calculator {
        grid-template-columns: 1fr;
    }
    
    .logo {
        font-size: 2rem;
    }
    
    .tagline {
        font-size: 1.1rem;
    }
    
    .feature-card {
        padding: 20px;
    }
}
