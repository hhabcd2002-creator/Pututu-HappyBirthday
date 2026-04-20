// 1. Password စစ်ဆေးခြင်း
function checkPassword() {
    const pass = document.getElementById("passwordInput").value;
    const lockScreen = document.getElementById("lockScreen");
    const mainContent = document.getElementById("mainContent");
    const errorMsg = document.getElementById("errorMsg");

    // Password သတ်မှတ်ချက်: 2542003
    if (pass === "2542003") {
        lockScreen.style.display = "none";
        mainContent.style.display = "block";
        // Unlock ပြီးတာနဲ့ စက္ကူဖတ်လေးတွေ ကြွေမယ်
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } else {
        errorMsg.style.display = "block";
    }
}

// 2. Countdown Timer
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
        timerObj.innerHTML = diff > 0 ? `⏳ ${d}d ${h}h ${m}m ${s}s to go! ✨` : "🎉 Happy Birthday! 🎉";
    }
}, 1000);

// 3. Music Control
function toggleMusic() {
    const song = document.getElementById("mySong");
    const btn = document.getElementById("playBtn");
    if (song.paused) { song.play(); btn.innerHTML = "သီချင်းပိတ်ရန် 🔇"; }
    else { song.pause(); btn.innerHTML = "သီချင်းနားထောင်ရန် 🎵"; }
}

// 4. Surprise Letter
function celebrate() {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    document.getElementById("loveLetterModal").style.display = "block";
}

function closeModal() {
    document.getElementById("loveLetterModal").style.display = "none";
}

// 5. Floating Hearts
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
