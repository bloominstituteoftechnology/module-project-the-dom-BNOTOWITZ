function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  
const divs = document.querySelectorAll('section div');
divs.forEach(div => {
  div.classList.add('widget');
});

  // 👉 TASK 2 - Build a "Quote of the Day" widget
 
function getRandomIndex() {
  return Math.floor(Math.random() * 10);
}
function displayRandomQuote() {
  const index = getRandomIndex();
  // eslint-disable-next-line no-undef
  const randomQuote = quotes[index];
  const quoteContainer = document.querySelector('.quoteoftheday');
  quoteContainer.innerHTML = '';
  const quoteText = document.createElement('div');
  const quoteAuthor = document.createElement('div');
  quoteText.textContent = randomQuote.quote;
  if (randomQuote.date === null) {
    quoteAuthor.textContent = `${randomQuote.author} in an unknown date`;
  } else {
    quoteAuthor.textContent = `${randomQuote.author} in ${randomQuote.date}`;
  }
  quoteContainer.appendChild(quoteText);
  quoteContainer.appendChild(quoteAuthor);
}

displayRandomQuote();


  // 👉 TASK 3 - Build a "Corporate Speak" widget

  document.addEventListener('DOMContentLoaded', function() {
    const corporateSpeakWidget = document.querySelector('.corporatespeak');

    const adverbs = ['quickly', 'efficiently', 'strategically', 'proactively', 'consistently'];
    const nouns = ['company', 'strategy', 'innovation', 'team', 'solution'];
    const verbs = ['optimize', 'leverage', 'streamline', 'synergize', 'innovate'];

    const randomAdverbIndex = Math.floor(Math.random() * adverbs.length);
    const randomNounIndex = Math.floor(Math.random() * nouns.length);
    const randomVerbIndex = Math.floor(Math.random() * verbs.length);

    const randomAdverb = adverbs[randomAdverbIndex];
    const randomNoun = nouns[randomNounIndex];
    const randomVerb = verbs[randomVerbIndex];

    const sentence = `We need to ${randomVerb} our ${randomNoun} ${randomAdverb} in order to ${randomVerb} our ${randomNoun} ${randomAdverb}.`;

    const h3 = document.createElement('h3');
    h3.textContent = 'Corporate Speak';

    const p = document.createElement('p');
    p.innerHTML = sentence;

    corporateSpeakWidget.innerHTML = '';

    corporateSpeakWidget.appendChild(h3);
    corporateSpeakWidget.appendChild(p);
});



  // 👉 TASK 4 - Build a "Countdown" widget


  document.addEventListener('DOMContentLoaded', function() {
  
    const countdownWidget = document.querySelector('.countdown');

    const h3 = document.createElement('h3');
    h3.textContent = 'Countdown';

    const p = document.createElement('p');

    let count = 5;

    const countdownInterval = setInterval(() => {
        if (count > 0) {
            p.textContent = `T-minus ${count}...`;
            count--;
        } else {
            clearInterval(countdownInterval);
            p.textContent = 'Liftoff! 🚀';
        }
    }, 1000);

    countdownWidget.appendChild(h3);
    countdownWidget.appendChild(p);
});


  // 👉 TASK 5 - Build a "Friends" widget

const friendsWidget = document.querySelector('.friends');
const people = [
  { id: 1, name: 'John', birthYear: 1990, friends: [2, 3] },
  { id: 2, name: 'Alice', birthYear: 1992, friends: [1, 3] },
  { id: 3, name: 'Bob', birthYear: 1995, friends: [1, 2] }
];

const randomIndex = Math.floor(Math.random() * people.length);
const randomPerson = people[randomIndex];

const h3 = document.createElement('h3');
h3.textContent = 'Friends';

const p = document.createElement('p');

if (randomPerson.friends.length > 0) {
    const friendNames = randomPerson.friends.map(friendId => {
        const friend = people.find(person => person.id === friendId);
        return friend.name;
    });

    const friendNamesString = friendNames.join(', ').replace(/,(?!.*,)/gmi, ' and');
    p.textContent = `${randomPerson.name} was born in ${randomPerson.birthYear} and is friends with ${friendNamesString}.`;
} else {
    p.textContent = `${randomPerson.name} was born in ${randomPerson.birthYear} and has no friends.`;
}
friendsWidget.innerHTML = '';

friendsWidget.appendChild(h3);
friendsWidget.appendChild(p);



  // 👉 TASK 6 - Make it so user can tab through the widgets

const widgets = document.querySelectorAll('.widget');
widgets.forEach((widget, index) => {
    widget.setAttribute('tabindex', index + 1);
});


  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
