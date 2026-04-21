// 1. Password Verification (2542003)
function checkPassword() {
    const pass = document.getElementById("passwordInput").value;
    if (pass === "2542003") {
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        
        // Auto-play music (browser block ဖြစ်နိုင်လို့ catch ဖမ်းထားတာပါ)
        const song = document.getElementById("mySong");
        song.play().catch(() => console.log("Music play blocked"));
    } else {
        document.getElementById("errorMsg").style.display = "block";
    }
}

// 2. Together Day Counter & Birthday Timer
const startDate = new Date("2025-07-14T00:00:00");
const targetDate = new Date("April 25, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date();
    
    // Together for XX Days
    const diffDays = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
    const dayCounter = document.getElementById("anniversary-counter");
    if (dayCounter) dayCounter.innerHTML = `Together for: ${diffDays} Days 💙`;

    // Birthday Countdown
    const diff = targetDate - now.getTime();
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
    
    const timerObj = document.getElementById("timer");
    if (timerObj) {
        timerObj.innerHTML = diff > 0 ? `⏳ ${d}d ${h}h ${m}m ${s}s to go! ✨` : "🎉 Happy Birthday! 🎉";
    }
}, 1000);

// 3. Surfing Stitch Movement
const slider = document.getElementById('photoSlider');
const stitch = document.querySelector('.surfing-stitch');

if (slider && stitch) {
    slider.addEventListener('scroll', () => {
        const scrollWidth = slider.scrollWidth - slider.clientWidth;
        // Stitch ရွေ့မယ့် အကွာအဝေးကို တွက်တာပါ (85% အထိ)
        const scrollPercentage = (slider.scrollLeft / scrollWidth) * 85; 
        stitch.style.left = scrollPercentage + '%';
    });
}

// 4. Floating Hearts (နှလုံးသားလေးတွေ လွင့်တက်နေတာ)
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💙";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    const duration = Math.random() * 2 + 3;
    heart.style.animationDuration = duration + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), duration * 1000);
}
setInterval(createHeart, 500);

// 5. Utility Functions
function toggleMusic() {
    const song = document.getElementById("mySong");
    const btn = document.getElementById("playBtn");
    if (song.paused) { song.play(); btn.innerHTML = "သီချင်းပိတ်ရန် 🔇"; }
    else { song.pause(); btn.innerHTML = "သီချင်းနားထောင်ရန် 🎵"; }
}

function celebrate() {
    confetti({ particleCount: 200, spread: 80, origin: { y: 0.6 } });
    document.getElementById("loveLetterModal").style.display = "block";
}

function closeModal() {
    document.getElementById("loveLetterModal").style.display = "none";
}
