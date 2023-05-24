/*abbiamo registro studenti, ogni studente ha le seguenti informazioni:
nome,età,sesso,html,css,js,comportamento, media, promosso.
lo studente è ppromosso se la media dei suoi voti è almeno 6 e la media voto che include il comportamente è almeno 7.
Una volta fatto il calcolo costruire nell'html la tabella con i risultati ed evidenziare in verde i promossi e in rosso i bocciati*/

/*
1)definire i dati
2)calcolare la media di ongi singolo studente e salvo il risultato in una variabile
3)definire i range di voti dei promossi e bocciati
4)Fare un controllo per capire se il singolo studente è promosso o bocciato
5)Assegno "SI" al promosso e "NO" al bocciato
6)costruire la tabella tramite js
7)assegnare i dati*/

let primoNumero;

console.log("Valore della variabile primoNumero", primoNumero);

/*cosa è un oggetto? una variabile complessa che può contenere più informazioni insieme*/

let studente1 = {
  nome: "Mario",
  eta: 25,
  sesso: "M",
  html: 7,
  css: 6.5,
  js: 8,
  comportamento: 7.5,
};
let studente2 = {
  nome: "Giulia",
  eta: 32,
  sesso: "F",
  html: 7,
  css: 6,
  js: 9,
  comportamento: 7,
};
{
  (chiave = "valore"), (chiave2 = "valore2");
}
//stampo solo il valore della chiave "nome" dell'oggetto "studente1"
console.log(studente1.nome);

// array

let studenti = [mario, giulia, federico];

// stampare primo elemento di un'array tramite gli indici, gli indici partono da 0, gli elementi di un array

console.log(studenti[0]);

//ultimo

console.log(studenti.length[-1]); //non sono sicuro

// array di oggetti

let studenti = [
  {
    nome: "Mario",
    eta: 25,
    sesso: "M",
    html: 7,
    css: 6.5,
    js: 8,
    comportamento: 7.5,
  },
  {
    nome: "Giulia",
    eta: 32,
    sesso: "F",
    html: 7,
    css: 6,
    js: 9,
    comportamento: 7,
  },
];

//oppure

let studenti = [studente, studente2];

//per stamapare da questo array di oggetti solo la chiave nome del primo elemento dell'array devo stampare:

console.log(studenti[0].nome);
