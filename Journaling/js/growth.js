function updateGrowth() {
    const plant = document.getElementById("plant");
    const count = getEntries().length;

    let emoji = "🌱";
    let text = "Just beginning — every reflection matters.";

    if (count >= 3) {
        emoji = "🌿";
        text = "You’re building consistency.";
    }
    if (count >= 7) {
        emoji = "🌸";
        text = "Your reflections are blooming.";
    }
    if (count >= 14) {
        emoji = "🌳";
        text = "Deep roots. Meaningful growth.";
    }

    plant.innerHTML = `
    <div>${emoji}</div>
    <p style="opacity:0.7">${text}</p>
  `;

    plant.animate(
        [{ transform: "scale(1)" }, { transform: "scale(1.15)" }, { transform: "scale(1)" }],
        { duration: 500 }
    );
}