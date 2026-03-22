// Crop Data
const cropData = {
    wheat: {
        tasks: {
            "November": "Sowing",
            "December": "Irrigation",
            "March": "Harvest"
        }
    },
    rice: {
        tasks: {
            "June": "Sowing",
            "July": "Transplant",
            "October": "Harvest"
        }
    }
};

// Generate Calendar
function generateCalendar() {
    const crop = document.getElementById("crop-select").value;
    const output = document.getElementById("calendar-output");

    if (!crop) {
        output.innerHTML = "Select crop first";
        return;
    }

    let html = "<h4>Schedule:</h4>";

    for (let month in cropData[crop].tasks) {
        html += `<p><b>${month}:</b> ${cropData[crop].tasks[month]}</p>`;
    }

    output.innerHTML = html;
}

// ROI Calculator
function calculateROI() {
    const land = document.getElementById("land-area").value;
    const cost = document.getElementById("input-cost").value;
    const yieldVal = document.getElementById("expected-yield").value;
    const price = document.getElementById("market-price").value;

    const profit = (yieldVal * price * land) - (cost * land);

    document.getElementById("profit-result").innerText = "₹" + profit;
}