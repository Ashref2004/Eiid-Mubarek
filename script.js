// Generating random positions for fireworks
window.onload = function() {
    const fireworks = document.querySelectorAll('.firework');
    fireworks.forEach(firework => {
        const randomTop = Math.random() * 100; // Random vertical position (0-100%)
        const randomLeft = Math.random() * 100; // Random horizontal position (0-100%)
        firework.style.top = randomTop + 'vh'; // Set random top position in vh
        firework.style.left = randomLeft + 'vw'; // Set random left position in vw
    });
};