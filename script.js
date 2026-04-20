// 1. Countdown Timer (April 25)
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
            timerObj.innerHTML = "🎉 Happy Birthday, My Dearest! 🎉";
        }
    }
}, 1000);

// 2. သီချင်း Toggle လုပ်ဆောင်ချက်
function toggleMusic() {
    const song = document.getElementById("mySong");
    const btn = document.getElementById("playBtn");
    
    if (song.paused) {
        song.play();
        btn.innerHTML = "သီချင်းပိတ်ရန် 🔇";
        btn.style.background = "#fadbd8"; // ပိတ်ချင်ရင် အရောင်ပြောင်းပြမယ်
    } else {
        song.pause();
        btn.innerHTML = "သီချင်းနားထောင်ရန် 🎵";
        btn.style.background = "#d6eaf8";
    }
}

// 3. Surprise Button (Confetti)
function celebrate() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2e86c1', '#85c1e9', '#ffffff'] // အပြာရောင် Confetti လေးတွေ
    });
    alert("Happy Birthday, My Love! 🎂💙 Stay happy always.");
}

// 4. Floating Hearts Generator (အပြာရောင်နှလုံးသားလေးတွေ)
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💙"; // အပြာရောင်နှလုံးသား
    heart.style.left = Math.random() * 100 + "vw";
    const duration = Math.random() * 2 + 3;
    heart.style.animationDuration = duration + "s";
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, duration * 1000);
}
setInterval(createHeart, 450);
