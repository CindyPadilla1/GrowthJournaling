function toggleTheme() {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
}

function applyMoodGradient() {
    if (document.body.classList.contains("dark")) return;

    const mood = document.getElementById("mood").value;
    const gradients = {
        calm: "linear-gradient(180deg, #fdf6f9, #eef2ff)",
        content: "linear-gradient(180deg, #fff6e5, #fde2ff)",
        neutral: "linear-gradient(180deg, #f0f0f5, #e6e6f0)",
        anxious: "linear-gradient(180deg, #fce4ec, #f8bbd0)",
        sad: "linear-gradient(180deg, #e3f2fd, #bbdefb)"
    };

    document.body.style.background = gradients[mood];
}