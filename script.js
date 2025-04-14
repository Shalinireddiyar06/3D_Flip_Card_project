const quotes = [
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
  "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
  "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
  "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
  "Dream big and dare to fail. – Norman Vaughan",
  "Act as if what you do makes a difference. It does. – William James",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett"
];
function generateRandomFact() {
    const quoteBox = document.getElementById('quote-box');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteBox.textContent = quotes[randomIndex];
}