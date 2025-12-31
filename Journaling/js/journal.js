function saveEntry() {
    const text = document.getElementById("entryText").value.trim();
    const mood = document.getElementById("mood").value;

    if (!text) return;

    const moodMap = {
        calm: 2,
        content: 1,
        neutral: 0,
        anxious: -1,
        sad: -2
    };

    const entry = {
        id: Date.now(),
        date: new Date().toISOString(),
        text,
        moodValue: moodMap[mood],
        sentiment: analyzeSentiment(text)
    };

    const entries = getEntries();
    entries.push(entry);
    saveEntries(entries);

    document.getElementById("entryText").value = "";

    renderEntries();
    renderChart();
    updateGrowth();
}

function renderEntries() {
    const list = document.getElementById("entriesList");
    list.innerHTML = "";

    const entries = getEntries().slice().reverse().slice(0, 5);

    entries.forEach(e => {
        const li = document.createElement("li");
        li.innerHTML = `
      <strong>${new Date(e.date).toLocaleDateString()}</strong><br>
      ${e.text}
    `;
        list.appendChild(li);
    });
}