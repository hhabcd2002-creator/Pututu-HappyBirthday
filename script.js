// ၁။ မွေးနေ့ Countdown ရက်စွဲသတ်မှတ်ခြင်း (April 25)
const targetDate = new Date("April 25, 2026 00:00:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    // ရက်၊ နာရီ၊ မိနစ်၊ စက္ကန့် တွက်ချက်ခြင်း
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    // HTML ထဲက id="timer" နေရာမှာ စာသားသွားပြခြင်း
    const timerElement = document.getElementById("timer");
    
    if (timerElement) {
        if (diff > 0) {
            timerElement.innerHTML = `⏳ ${d}d ${h}h ${m}m ${s}s to go! ✨`;
        } else {
            // မွေးနေ့ရောက်သွားရင် ပြမယ့်စာသား
            timerElement.innerHTML = "🎉 Happy Birthday, My Love! 🎉";
            clearInterval(countdown); // Countdown ကို ရပ်လိုက်တာ
        }
    }
}, 1000);

// ၂။ Surprise Button လုပ်ဆောင်ချက် (Confetti နဲ့ Alert)
function celebrate() {
    // index.html ထဲမှာ Confetti Script ချိတ်ထားရင် ဒါက အလုပ်လုပ်ပါလိမ့်မယ်
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff69b4', '#ffb7b2', '#ffffff']
        });
    }
    
    // မွေးနေ့ရှင်ဆီ ပို့ချင်တဲ့ Message လေး
    alert("Happy Birthday to the most special person in my life! ❤️🎂");
}
