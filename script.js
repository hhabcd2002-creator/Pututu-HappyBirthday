// 1. Password & Lock
function checkPassword() {
    const pass = document.getElementById("passwordInput").value;
    if (pass === "2542003") {
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        document.getElementById("mySong").play().catch(() => {});
        initSecretHeart();
        showRandomQuote();
    } else {
        document.getElementById("errorMsg").style.display = "block";
    }
}

// 2. Together Day & Birthday Timer
const annivDate = new Date("2025-07-14T00:00:00");
const bdayDate = new Date("April 25, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date();
    const diffDays = Math.floor((now - annivDate) / (1000 * 60 * 60 * 24));
    document.getElementById("anniversary-counter").innerHTML = `Together for: ${diffDays} Days 💙`;

    const diff = bdayDate - now.getTime();
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = diff > 0 ? `⏳ ${d}d ${h}h ${m}m ${s}s to go! ✨` : "🎉 Happy Birthday! 🎉";
}, 1000);

// 3. Motivation Quotes
const quotes = [
    "You are stronger than you think, my baby! 💪",
    "Don't give up, I'm always by your side. 💙",
    "Your smile makes my whole world shine. ✨",
    "Believe in yourself as much as I believe in you. 🌟"
];
function showRandomQuote() {
    document.getElementById("motivation-box").innerText = quotes[Math.floor(Math.random() * quotes.length)];
}

// 4. Scratch Card Logic
const coupons = ["Forehead Kiss 💋", "Neck Kiss 💋", "Lip Kiss 💋", "Hand Kiss 💋", "Cheek Kiss 💋"];
function showScratchCard() {
    document.getElementById("scratch-container").style.display = "block";
    document.getElementById("coupon-result").innerText = coupons[Math.floor(Math.random() * coupons.length)];
    const canvas = document.getElementById("scratchCanvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#C0C0C0"; ctx.fillRect(0, 0, 200, 100);
    
    let isDrawing = false;
    canvas.addEventListener("mousedown", () => isDrawing = true);
    canvas.addEventListener("mousemove", (e) => {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath(); ctx.arc(e.clientX - rect.left, e.clientY - rect.top, 15, 0, Math.PI * 2); ctx.fill();
    });
    canvas.addEventListener("mouseup", () => isDrawing = false);
}

// 5. Secret Yellow Heart
function initSecretHeart() {
    const heart = document.getElementById("secretHeart");
    heart.style.top = Math.random() * 80 + "vh";
    heart.style.left = Math.random() * 80 + "vw";
}
function showSecretMessage() {
    const messages = ["I love you more than words can say. 💛", "You're the best thing that ever happened to me. 💛"];
    showModal(`<h3>Secret Message 💛</h3><p>${messages[Math.floor(Math.random() * messages.length)]}</p>`);
}

// 6. File Upload to Drive (Conceptual for Frontend)
async function uploadFile(input) {
    const status = document.getElementById("uploadStatus");
    status.innerText = "သိမ်းဆည်းနေပါသည်... ⏳";
    // ဒီအပိုင်းမှာ Google Apps Script URL ကို ချိတ်ရပါမယ်
    setTimeout(() => { 
        status.innerText = "Drive ထဲသို့ အမှတ်တရ သိမ်းဆည်းပြီးပါပြီ! ✅"; 
        confetti();
    }, 2000);
}

// Helper Functions
function showModal(html) {
    document.getElementById("modal-body").innerHTML = html;
    document.getElementById("loveLetterModal").style.display = "block";
}
function closeModal() { document.getElementById("loveLetterModal").style.display = "none"; }
function celebrate() { confetti(); showModal("<h2>Happy Birthday! 🎂</h2><p>ပုတုတုရေ... ကိုကို မင်းကို အရမ်းချစ်တယ်။</p>"); }
function toggleMusic() { const s = document.getElementById("mySong"); if (s.paused) s.play(); else s.pause(); }

// Heart Rain
setInterval(() => {
    const h = document.createElement("div"); h.className = "heart"; h.innerHTML = "💙";
    h.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(h); setTimeout(() => h.remove(), 4000);
}, 500);
