const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("touchstart", moveNo);
noBtn.addEventListener("mouseenter", moveNo);

function moveNo() {
    const x = Math.random() * 160 - 80;
    const y = Math.random() * 160 - 80;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function goYes() {
    window.location.href = "love.html";
}
