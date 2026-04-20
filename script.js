// 1. Countdown Timer (April 25)
const targetDate = new Date("April 25, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    if (diff > 0) {
        document.getElementById("timer").innerHTML = `⏳ ${d}d ${h}h ${m}m ${s}s to go! ✨`;
    } else {
        document.getElementById("timer").innerHTML = "🎉 Happy Birthday! 🎉";
    }
}, 1000);

// 2. Surprise Confetti
function celebrate() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
    alert("Happy Birthday, My Love! 🎂❤️");
}

// 3. Floating Hearts Generator
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// 0.5 စက္ကန့်တိုင်း နှလုံးသားတစ်ခု ထွက်မယ်
setInterval(createHeart, 500);
