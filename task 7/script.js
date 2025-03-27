let animationInterval;
let position = 0;
let direction = 1; // 1 for right, -1 for left

function startAnimation() {
    stopAnimation(); // Prevent multiple intervals
    animationInterval = setInterval(() => {
        let image = document.getElementById("animatedImage");

        position += 5 * direction; // Move by 5px

        // Change direction when hitting boundaries
        if (position >= document.getElementById("container").clientWidth - 100 || position <= 0) {
            direction *= -1;
        }

        image.style.left = position + "px";
    }, 50); // Speed of animation
}

function stopAnimation() {
    clearInterval(animationInterval);
}
