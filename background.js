/*background.js*/
const quotes = [
    'blah',
    'blerg',
    'foo',
    'bar'
];

const randomInd = Math.floor(Math.random() * quotes.length);

const randomQuote = quotes[randomInd];

console.log(randomInd, randomQuote);

document.querySelector('#quote').innerHTML = randomQuote;