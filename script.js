
// =====================================
// 1. ปุ่มรับกำลังใจ 💗
// =====================================

function showLove() {

  const messages = [
    "💗 วันนี้มิลเก่งมากแล้วนะ",
    "🌷เหนื่อยก็พักดื่มน้ำหวานด้วยนะค้าบ",
    "💜 เป็นกำลังใจให้เสมอนะครับ",
    "✨ ขอให้วันนี้เป็นวันที่ดีของมิลนะ",
    "💕 อดทนหน่อยน้าา คนเก่งฮึบ"
  ];

  let random = Math.floor(
    Math.random() * messages.length
  );

  const loveMessage =
    document.getElementById("loveMessage");

  loveMessage.textContent = messages[random];

  // หัวใจลอย 15 ตัว
  for (let i = 0; i < 15; i++) {

    let heart = document.createElement("span");

    // อีโมจิเดิมของคุณ
    const emojis = ["💜", "💗", "💜", "💖"];

    heart.textContent =
      emojis[Math.floor(Math.random() * emojis.length)];

    heart.className = "heart";

    heart.style.left =
      Math.random() * 100 + "vw";

    heart.style.animationDelay =
      Math.random() + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
}


// =====================================
// 2. เปิดจดหมายลับ 💌
// =====================================

function openSecret(letter) {

  if (!letter.open) return;

  // อีโมจิเดิมของคุณ
  const emojis = ["🍵", "🍰", "✨", "🧋"];

  // อีโมจิ 25 ตัว
  for (let i = 0; i < 25; i++) {

    const sparkle = document.createElement("span");

    sparkle.className = "heart letter-heart";

    sparkle.textContent =
      emojis[Math.floor(Math.random() * emojis.length)];

    sparkle.style.left =
      (5 + Math.random() * 90) + "vw";

    sparkle.style.animationDelay =
      Math.random() * 0.8 + "s";

    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 6500);
  }
}


// =====================================
// 3. ประกายดาวตามเมาส์ ✨
// =====================================

const mouseEmojis = [
  "✨", "💜", "💜", "💗", "✦"
];

let lastSparkle = 0;

document.addEventListener("pointermove", function(e) {

  const now = Date.now();

  if (now - lastSparkle < 70) return;

  lastSparkle = now;

  const sparkle = document.createElement("span");

  sparkle.className = "mouse-sparkle";

  sparkle.textContent = mouseEmojis[
    Math.floor(Math.random() * mouseEmojis.length)
  ];

  sparkle.style.left = e.clientX + "px";
  sparkle.style.top = e.clientY + "px";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1000);

});


// =====================================
// 4. Kuromi พูดทีละตัว 🎀
// =====================================

let typingTimer;
let speechIndex = 0;
function kuromiTalk() {

  const messages = [
    "💜 วันนี้ทำงานสู้ๆ นะมิล",
    "🍵 พักเติมชาเขียวบ้างนะ",
    "🎀 มิลเก่งมากเลย รู้ตัวไหม?",
    "🖤 เหนื่อยก็พักบ้างได้นะ kuromi เป็นห่วง",
    "✨ kuromi ขอให้วันนี้เป็นวันที่ดีของมิลนะ",
    "💗 kuromi เป็นกำลังใจให้เสมอ"
  ];

  const speech =
    document.getElementById("kuromiSpeech");

  const kuromi =
    document.querySelector(".cute-img");

  if (!speech || !kuromi) return;

  
const message = messages[speechIndex];

speechIndex = (speechIndex + 1) % messages.length;


  // หยุดข้อความที่กำลังพิมพ์ก่อนหน้า
  clearInterval(typingTimer);

  speech.textContent = "";

  // ทำให้ Kuromi เด้ง
  kuromi.classList.remove("kuromi-bounce");

  void kuromi.offsetWidth;

  kuromi.classList.add("kuromi-bounce");

  // แยกข้อความทีละตัว รองรับภาษาไทย
  const characters =
    typeof Intl.Segmenter === "function"
      ? Array.from(
          new Intl.Segmenter("th", {
            granularity: "grapheme"
          }).segment(message),
          item => item.segment
        )
      : Array.from(message);

  let index = 0;

  // แสดงข้อความทีละตัว
  typingTimer = setInterval(() => {

    speech.textContent += characters[index];

    index++;

    if (index >= characters.length) {
      clearInterval(typingTimer);
    }

  }, 65);
}


// =====================================
// 5. เด้งเสร็จแล้วกลับมาลอยต่อ 💜
// =====================================

const kuromiImage =
  document.querySelector(".cute-img");

if (kuromiImage) {

  kuromiImage.addEventListener(
    "animationend",
    function(e) {

      if (e.animationName === "kuromiBounce") {
        kuromiImage.classList.remove("kuromi-bounce");
      }

    }
  );
}
