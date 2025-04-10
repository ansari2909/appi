// Typing Effect
const text = "My Sister – A True Gem 💎";
const typingText = document.querySelector(".typing-text");
let idx = 0;

function typeWriter() {
  if (idx < text.length) {
    typingText.textContent += text.charAt(idx);
    idx++;
    setTimeout(typeWriter, 100);
  }
}
window.onload = typeWriter;

// Compliment Generator
function giveCompliment() {
  const compliments = [
    "You're one of a kind 💖",
    "You make the world better just by being you!",
    "Your smile is magic 😊",
    "You're a work of art 🎨",
    "You light up every room you walk into ✨"
  ];
  const random = Math.floor(Math.random() * compliments.length);
  document.getElementById("complimentText").textContent = compliments[random];
}
