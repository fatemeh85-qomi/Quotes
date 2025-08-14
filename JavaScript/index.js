
//دارک مود

const togglebtn = document.getElementById("toggle-mode");

togglebtn.textContent = "🌙 حالت شب";

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  togglebtn.textContent = "☀️ حالت روز";
}

togglebtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    togglebtn.textContent = "☀️ حالت روز";
  } else {
    localStorage.setItem("theme", "light");
    togglebtn.textContent = "🌙 حالت شب";
  }
});

const quotes = [
  {
    author: "(Mahatma Gandhi)",
    text: "Be the change you wish to see in the world",
  },
  {
    author: "(Steve Jobs)",
    text: "The only way to do great work is to love what you do",
  },
  {
    author: "(Theodore Roosevelt)",
    text: "Believe you can and you're halfway there",
  },
  {
    author: "(Oscar Wilde)",
    text: "Be yourself; everyone else is already taken",
  },
  {
    author: "(Wayne Gretzky)",
    text: "You miss 100% of the shots you don't take",
  },
  {
    author: "(Nelson Mandela)",
    text: "It always seems impossible until it's done",
  },
  { author: "(Walt Disney)", text: "If you can dream it, you can do it" },
  {
    author: "(Steve Jobs)",
    text: "The only way to do great work is to love what you do.",
  },
  {
    author: "(Lao Tzu)",
    text: "The journey of a thousand miles begins with a single step",
  },
  {
    author: "(Theodore Roosevelt)",
    text: "Believe you can and you're halfway there",
  },
  { author: "(Madara Uchiha)", text: "If you want peace prepare for war" },
  {
    author: "(Socrates)",
    text: "The only true wisdom is in knowing you know nothing",
  },
  {
    author: "(Aristotle)",
    text: "Knowing yourself is the beginning of all wisdom",
  },
  {
    author: "(Dalai Lama)",
    text: "The purpose of our lives is to be happy.",
  },
  { author: "(Stephen King)", text: "Get busy living or get busy dying" },
  {
    author: "(Jim Rohn)",
    text: "Happiness is not by chance, but by choice",
  },
  {
    author: "(Hafez)",
    text: "Stay close to anything that makes you glad you are alive",
  },
  {
    author: "(BrainyQuote)",
    text: "What you do today can improve all your tomorrows",
  },
  {
    author: "(BrainyQuote)",
    text: "Learn from yesterday, live for today, hope for tomorrow",
  },
  {
    author: "(Zhuangz)",
    text: "Life comes from the earth, and life returns to the earth",
  },
  {
    author: "(George Bernard)",
    text: "Life isn't about finding yourself. Life is about creating yourself",
  },
];

function showRandomQuotes() {
  const cards = document.getElementsByClassName("card-quote");
  for (let i = 0; i < cards.length; i++) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    cards[i].textContent = `${randomQuote.text} ${randomQuote.author}`;
  }
}

document
  .getElementById("quote-btn")
  .addEventListener("click", showRandomQuotes);

showRandomQuotes();

const searchButton = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");

function searching() {
  const cards = document.getElementsByClassName("card-quote");
  const query = searchInput.value.toLowerCase().trim();

  if (!query) {
    showRandomQuotes();
    return;
  }

  const filteredQuotes = quotes.filter((q) => {
    let text = (q.text || "").toLowerCase();
    let author = (q.author || "").toLowerCase();
    return text.includes(query) || author.includes(query);
  });

  for (let i = 0; i < cards.length; i++) {
    if (filteredQuotes[i]) {
      const fullText = `${filteredQuotes[i].text} ${filteredQuotes[i].author}`;

      const index = fullText.toLowerCase().indexOf(query);

      if (index !== -1) {
        const before = fullText.slice(0, index);
        const match = fullText.slice(index, index + query.length);
        const after = fullText.slice(index + query.length);

        cards[
          i
        ].innerHTML = `<p style="margin:0;">${before}<span style="color:red;">${match}</span>${after}</p>`;
      } else {
        cards[i].textContent = fullText;
      }
    }
  }
}

searchButton.addEventListener("click", searching);
