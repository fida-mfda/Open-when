const letters = {
  sad: `
    <h2>Hey, love.</h2>
    <p>I know you're feeling sad right now, and I wish I could just hold you close.</p>
    <p>Remember, it's okay to not be okay. You're strong, and I believe in you.</p>
    <p>I’m just a message away. I love you always. 💖</p>
  `,
  happy: `
    <h2>Yayy! You're Happy! 🎉</h2>
    <p>Seeing you happy is my favorite thing in the world.</p>
    <p>Celebrate every little moment, you deserve it all.</p>
    <p>Keep smiling, love. You shine the brightest when you’re happy! 😊</p>
  `,
  missing: `
    <h2>Missing me?</h2>
    <p>I miss you too, more than words can say.</p>
    <p>But remember, distance means so little when someone means so much.</p>
    <p>We'll be together soon. Until then, feel my hug from this page. 🤗</p>
  `,
  birthday: `
    <h2>Happy Birthday, My Love! 🎂</h2>
    <p>This day is extra special because you were born.</p>
    <p>Thank you for being you. Thank you for letting me love you.</p>
    <p>I hope this year brings you happiness, growth, and dreams coming true!</p>
    <p>I’m so proud of you. 💝</p>
  `
};

function openLetter(type) {
  const box = document.getElementById('letterBox');
  const content = document.getElementById('letterContent');
  content.innerHTML = letters[type];
  box.classList.remove('hidden');
}

function closeLetter() {
  document.getElementById('letterBox').classList.add('hidden');
}
