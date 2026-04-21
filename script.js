// 1. Password Verification
function checkPassword() {
    const pass = document.getElementById("passwordInput").value;
    if (pass === "2542003") {
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        // ၀င်လိုက်တာနဲ့ သီချင်းမတန်းပွင့်အောင် (ခလုပ်နှိပ်မှပွင့်အောင်) ဒီမှာ မဖွင့်ထားတော့ပါ
        showRandomQuote();
    } else {
        document.getElementById("errorMsg").style.display = "block";
    }
}

// 2. Anniversary & Birthday Timer
const annivDate = new Date("2025-07-14T00:00:00");
const bdayDate = new Date("April 25, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date();
    // Anniversary Day Counter
    const diffAnniv = Math.floor((now - annivDate) / (1000 * 60 * 60 * 24));
    document.getElementById("anniversary-counter").innerHTML = `Together for: ${diffAnniv} Days 💙`;

    // Birthday Countdown
    const diffBday = bdayDate - now.getTime();
    const d = Math.floor(diffBday / (1000 * 60 * 60 * 24));
    const h = Math.floor((diffBday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diffBday % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diffBday % (1000 * 60)) / 1000);
    
    const timerObj = document.getElementById("timer");
    if (timerObj) {
        timerObj.innerHTML = diffBday > 0 ? `⏳ ${d}d ${h}h ${m}m ${s}s to go! ✨` : "🎉 Happy Birthday! 🎉";
    }
}, 1000);

// 3. Random Motivation Quotes
const quotes = [
    "You are stronger than you think, my baby! 💪",
    "Don't give up, I'm always by your side. 💙",
    "Your smile makes my whole world shine. ✨",
    "Believe in yourself as much as I believe in you. 🌟",
    "Take a deep breath. You're doing great! ❤️"
];
function showRandomQuote() {
    document.getElementById("motivation-box").innerText = quotes[Math.floor(Math.random() * quotes.length)];
}

// 4. Scratch Card Logic
const coupons = ["Forehead Kiss 💋", "Neck Kiss 💋", "Lip Kiss 💋", "Hand Kiss 💋", "Cheek Kiss 💋", "Ear Kiss 💋"];
function showScratchCard() {
    document.getElementById("scratch-container").style.display = "block";
    document.getElementById("coupon-result").innerText = coupons[Math.floor(Math.random() * coupons.length)];
    const canvas = document.getElementById("scratchCanvas");
    const ctx = canvas.getContext("2d");
    
    // Create Silver Cover
    ctx.fillStyle = "#C0C0C0";
    ctx.fillRect(0, 0, 200, 100);
    
    let isDrawing = false;
    const scratch = (e) => {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX || e.touches[0].clientX) - rect.left;
        const y = (e.clientY || e.touches[0].clientY) - rect.top;
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, 15, 0, Math.PI * 2);
        ctx.fill();
    };

    canvas.addEventListener("mousedown", () => isDrawing = true);
    canvas.addEventListener("touchstart", () => isDrawing = true);
    canvas.addEventListener("mousemove", scratch);
    canvas.addEventListener("touchmove", scratch);
    canvas.addEventListener("mouseup", () => isDrawing = false);
    canvas.addEventListener("touchend", () => isDrawing = false);
}

// 5. Music Control
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

// 6. Drive Upload (Placeholder)
function uploadFile(input) {
    const status = document.getElementById("uploadStatus");
    status.innerText = "သိမ်းဆည်းနေပါသည်... ⏳";
    setTimeout(() => {
        status.innerText = "Drive ထဲသို့ အမှတ်တရ သိမ်းဆည်းပြီးပါပြီ! ✅";
        confetti({ particleCount: 50 });
    }, 2000);
}

// Helpers
function celebrate() {
    confetti({ particleCount: 200, spread: 80 });
    document.getElementById("modal-body").innerHTML = `
        <h2 style="font-family: 'Gochi Hand', cursive; color: #2e86c1;">Happy Birthday! 🎂</h2>
        <p>ပုတုတုရေ... ဒီနေ့မှာ ကျရောက်တဲ့ မွေးနေ့ကစပြီး အရမ်းပျော်ရွှင်ပါစေ။ ကိုကို မင်းကို အရမ်းချစ်တယ်။</p>
    `;
    document.getElementById("loveLetterModal").style.display = "block";
}
function closeModal() { document.getElementById("loveLetterModal").style.display = "none"; }

// Heart Rain
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💙";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 15 + 10 + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}, 500);
