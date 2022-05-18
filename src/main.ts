import './styles/style.css'
import { Story } from './types';
import { questions } from './gameData';

var QuestionOne = document.getElementById('text');


// Skapa funktion för att starta spelet, få ut frågor och knappvalet...

// Element
const firstOption = document.querySelector('.Option-1');
const secondOption = document.querySelector('.Option-2');
const thirdOption = document.querySelector('.Option-3');



// Skapa en loop på questions där de jämför id som tagits in med object id.
// Använd objectet som du får att kalla på renderstep.
// Skriv igen och logga, vad är målet?
// trigga funktion med consol log.

function getId(id: number) {
  for (let i = 0; i < questions.length; i++) {
    const journey = questions[i];
    if(journey.id == id){
      renderStep(journey)
    }
    
  }
}

function renderStep(Gamestep: Story) {

  if(!Gamestep) {
    Gamestep = questions[0]
  }
  QuestionOne!.innerText = Gamestep.text;
  firstOption!.innerHTML = Gamestep.options.left.text;
  secondOption!.innerHTML = Gamestep.options.right.text;
/*   thirdOption!.innerHTML = Gamestep.options.right.text; */
  firstOption?.addEventListener('click', () => {
    getId(Gamestep.options.left.goTo)
  });
  secondOption?.addEventListener('click', () => {
    getId(Gamestep.options.right.goTo)
  });
 /*  thirdOption?.addEventListener('click', () => {
    getId(Gamestep.options.right.goTo)
  }); */
}

// array med data, sätta värde på knapp med data. Done.
// Vad händer här?
// Gör en loop som itererar över arrayen... Find / foreach. Done.
// Nya loopen
  for (let i = 0; i < questions.length; i++) {
    const journey = questions[i];
    console.log(journey)
    
    // If satsen är global...
    if(journey.id == 0) {
      renderStep(journey)
    }
  
    
  }


// 1. Få ut array index 1 på h1.
// Hur kör jag loopen.
// Hur vet jag att det e rätt?
// logik för vad som händer när 1 & 2 visar...
// Foreach, find, filter, findindex, map. <------ Kolla på dem :)
// event med id. Scenario, hitta nästa object att få ut i konsol.

// Variabler, loopar, funktioner & övning...
// Generic Types
//Interfaces 