function analyzeSentiment(text) {
    const positive = ["happy", "calm", "relaxed", "proud", "safe"];
    const negative = ["sad", "anxious", "tired", "overwhelmed", "angry"];

    let score = 0;
    text.toLowerCase().split(/\s+/).forEach(word => {
        if (positive.includes(word)) score++;
        if (negative.includes(word)) score--;
    });

    return score;
}