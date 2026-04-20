// 1. Countdown Timer
const targetDate = new Date("April 25, 2026 00:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
    const timerObj = document.getElementById("timer");
    if (timerObj) {
        if (diff > 0) {
            timerObj.innerHTML = `⏳ ${d}d ${h}h ${m}m ${s}s to go! ✨`;
        } else {
            timerObj.innerHTML = "🎉 Happy Birthday, My Love! 🎉";
        }
    }
}, 1000);

// 2. Music Toggle
function toggleMusic() {
    const song = document.getElementById("mySong");
    const btn = document.getElementById("playBtn");
    if (song.paused) {
        song.play();
        btn.innerHTML = "သီချင်းပိတ်ရန် 🔇";
    } else {
        song.pause();
        btn.innerHTML = "သီချင်းနားထောင်ရန် 🎵";
    }
}

// 3. Surprise & Love Letter
function celebrate() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2e86c1', '#85c1e9', '#ffffff']
    });
    // Show Modal
    document.getElementById("loveLetterModal").style.display = "block";
}

function closeModal() {
    document.getElementById("loveLetterModal").style.display = "none";
}

// 4. Floating Hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💙";
    heart.style.left = Math.random() * 100 + "vw";
    const duration = Math.random() * 2 + 3;
    heart.style.animationDuration = duration + "s";
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, duration * 1000);
}
setInterval(createHeart, 450);

// Modal အပြင်ဘက်ကို နှိပ်ရင် ပိတ်အောင်လုပ်ခြင်း
window.onclick = function(event) {
    const modal = document.getElementById("loveLetterModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
