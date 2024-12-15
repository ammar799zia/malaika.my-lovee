// JavaScript for Heart Burst Animation and Tab Navigation

document.addEventListener("DOMContentLoaded", () => {
    // Function to create the burst of hearts
    function burstHearts() {
        const container = document.body; // Target container
        const numHearts = 50; // Number of hearts
        for (let i = 0; i < numHearts; i++) {
            const heart = document.createElement('div');
            heart.className = 'burst-heart';

            // Randomize position and trajectory
            const dx = (Math.random() - 0.5) * 500; // X-axis movement
            const dy = (Math.random() - 0.5) * 500; // Y-axis movement
            heart.style.setProperty('--dx', `${dx}px`);
            heart.style.setProperty('--dy', `${dy}px`);

            // Set initial position near the center
            heart.style.left = `${window.innerWidth / 2}px`;
            heart.style.top = `${window.innerHeight / 2}px`;

            container.appendChild(heart);

            // Remove the heart after animation ends
            setTimeout(() => container.removeChild(heart), 3000);
        }
    }

    // Function to switch tabs
    function switchTab(event) {
        const targetTab = event.target.dataset.tab;

        // Hide all tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.style.display = 'none';
        });

        // Show the selected tab's content
        document.getElementById(targetTab).style.display = 'block';

        // Trigger heart burst animation
        burstHearts();
    }

    // Attach click event listeners to tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', switchTab);
    });

    // Show the first tab content by default
    document.getElementById('love-letter').style.display = 'block';
});
