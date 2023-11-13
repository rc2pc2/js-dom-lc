
const element = document.getElementById('user-paragraph');
console.log(element.className);

// ? element.className += 'padding-extreme-bottom';
element.className = element.className + ' padding-extreme-bottom';

// element.innerHTML += ' Gino va in montagna';
// element.innerHTML = element.innerHTML + '<h2>Intanto andro\' in montagna</h2>';

// ? prendo la ricetta e compro gli ingredienti
// ? faccio la torta
// ? la cucino
// ? la porto dai suoceri

// ? guardo come si crea un elemento del DOM
// ? lo creo
const newElement = document.createElement('h2');

// ? ne modifico le caratteristiche come voglio
newElement.className = 'items';
newElement.innerHTML = 'Contenuto testuale di prova';

// ? lo aggiungo al parent
element.appendChild(newElement);

// console.log(newElement);

const otherElement = document.querySelector('h2');

console.log(otherElement); // ? restituisce il primo h1 trovato nella pagina
// otherElement.className += 'gina';


// ? Cos'e' il +=???
// let somma = 33;
// somma = somma + 5;
// somma += 5;
