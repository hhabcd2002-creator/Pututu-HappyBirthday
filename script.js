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

// 2. Surprise Confetti
function celebrate() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
    alert("Happy Birthday, My Love! 🎂❤️");
}

// 3. Floating Hearts Generator (သေချာ ပေါ်လာအောင် ခေါ်ယူခြင်း)
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart"; // class နာမည် ပေးတာ မှန်ဖို့ လိုတယ်
    heart.innerHTML = "❤️";
    
    // ပေါ်မယ့် နေရာကို ဘယ်ညာ အနှံ့ ထားမယ်
    heart.style.left = Math.random() * 100 + "vw";
    
    // အနှေးအမြန် မတူအောင် လုပ်မယ်
    const duration = Math.random() * 2 + 3;
    heart.style.animationDuration = duration + "s";
    
    document.body.appendChild(heart);

    // ပျောက်သွားရင် ဖျက်ပစ်မယ်
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// ၀.၄ စက္ကန့်တိုင်း နှလုံးသားတစ်ခု ထွက်မယ်
setInterval(createHeart, 400);
