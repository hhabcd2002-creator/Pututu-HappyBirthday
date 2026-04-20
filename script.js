function showSurprise() {
    document.getElementById('message').classList.toggle('hidden');
    alert("Happy Birthday to the most special person! 🎉");
}

// Countdown Target (April 25, 2026)
const targetDate = new Date("April 25, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    // အချိန်တွက်ချက်မှုများ
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    // Website ပေါ်မှာ ပြမယ့်စာသား
    if (diff > 0) {
        document.getElementById("timer").innerHTML = `${d}d ${h}h ${m}m ${s}s to go! ✨`;
    } else {
        document.getElementById("timer").innerHTML = "Happy Birthday! 🎉";
    }
}, 1000);
const targetDate = new Date("April 25, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = `${d}d ${h}h ${m}m ${s}s to go! ✨`;
}, 1000);
