const letters = {
  sedih: `
    <h2>Sayangku...</h2>
    <p>Kalau kamu lagi sedih, peluk virtual dulu dari aku 🤗</p>
    <p>Aku selalu di sini buat kamu. Kamu kuat, kamu hebat. Aku sayang kamu. 💖</p>
  `,
  senang: `
    <h2>Yeayy kamu senang!</h2>
    <p>Kalau kamu bahagia, aku jauh lebih bahagia 😄</p>
    <p>Rayakan setiap momen kecil. Kamu layak dapetin semuanya 💫</p>
  `,
  rindu: `
    <h2>Kamu kangen yaa?</h2>
    <p>Aku juga kangen banget sama kamu 😔</p>
    <p>Sabar yaa, nanti kita ketemu lagi. Peluk jauh dari sini 🤍</p>
  `,
  ulangtahun: `
    <h2>Selamat ulang tahun, cintaku! 🎉</h2>
    <p>Hari ini spesial banget karena kamu lahir 💝</p>
    <p>Terima kasih sudah ada, jadi diri kamu, dan bikin aku bahagia.</p>
  `,
  butuhsemangat: `
    <h2>Semangat sayangku!</h2>
    <p>Apapun yang kamu hadapi, kamu pasti bisa!</p>
    <p>Aku percaya banget sama kamu 💪✨</p>
  `,
  bingung: `
    <h2>Kalau kamu bingung...</h2>
    <p>Coba tarik napas pelan-pelan. Nggak apa-apa mikir pelan-pelan.</p>
    <p>Kamu nggak sendiri kok, aku di sini.</p>
  `,
  gabut: `
    <h2>Lagi gabut yaa?</h2>
    <p>Yuk nonton film lucu, atau dengerin lagu favorit kita 🎵</p>
    <p>Atau kamu bisa baca lagi surat-surat ini 😆</p>
  `
};

function openLetter(type) {
  const box = document.getElementById('letterBox');
  const content = document.getElementById('letterContent');
  content.innerHTML = letters[type];
  box.classList.remove('hidden');

  // 🎉 Confetti saat buka surat
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

function closeLetter() {
  document.getElementById('letterBox').classList.add('hidden');
}
