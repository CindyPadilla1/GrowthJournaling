let chart = null;

function renderChart() {
    const entries = getEntries();
    const canvas = document.getElementById("moodChart");
    if (!canvas) return;

    const labels = entries.map(e =>
        new Date(e.date).toLocaleDateString()
    );

    const data = entries.map(e => e.moodValue + e.sentiment);

    if (chart) chart.destroy();

    chart = new Chart(canvas, {
        type: "line",
        data: {
            labels,
            datasets: [{
                data,
                tension: 0.45,
                fill: true
            }]
        },
        options: {
            plugins: { legend: { display: false } },
            scales: { y: { display: false } }
        }
    });

    renderWeeklySummary(entries);
}

function renderWeeklySummary(entries) {
    const summary = document.getElementById("weeklySummary");
    if (!entries.length) return;

    const last7 = entries.slice(-7);
    const avg =
        last7.reduce((s, e) => s + e.moodValue + e.sentiment, 0) / last7.length;

    if (avg > 1) summary.textContent = "✨ This week felt light and hopeful.";
    else if (avg > 0) summary.textContent = "🌸 This week felt balanced.";
    else summary.textContent = "🌧 This week felt heavy — and that’s okay.";
}