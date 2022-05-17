import './styles/style.css'
import { Story } from './types';
import { questions } from './gameData';

var QuestionOne = document.getElementById('text');

// Skapa funktion för att starta spelet, få ut frågor och knappvalet...

// Element
const firstOption = document.querySelector('.Option-1');

const secondOption = document.querySelector('.Option-2')


/* const collection = document.getElementsByClassName(".Option-1");
{
  collection[1].value;
} */

/* function handleQuestion() {
  var changeText = document.getElementsByClassName('.Option-1');
  changeText;
} */



function handleClick(id: number) {
  // Skapa en loop på questions där de jämför id som tagits in med object id.
  // Använd objectet som du får att kalla på renderstep.
  for (let i = 0; i < questions.length; i++) {
    const journey = questions[i];
    if(journey.id == id){
      renderStep(journey)
      
    }
  }
  
  /* this.removeEventListener("click", handleClick); */
  console.log(id);
  
}


function renderStep(Gamestep: Story) {

  if(!Gamestep) {
    Gamestep = questions[0]
  }
  QuestionOne!.innerText = Gamestep.text;
  firstOption!.innerHTML = Gamestep.options.left.text;
  secondOption!.innerHTML = Gamestep.options.right.text
  firstOption?.addEventListener('click', () => {
    handleClick(Gamestep.options.left.goTo)
  });
  secondOption?.addEventListener('click', () => {
    handleClick(Gamestep.options.right.goTo)
  });
  /* ThirdOption?.addEventListener('click', () => {
    handleClick(Gamestep.options.right.goTo)
  }); */
}




// array med data, sätta värde på knapp med data.
// Vad händer här?


  
  // Gör en loop som itererar över arrayen... Find / foreach
  
  for (let i = 0; i < questions.length; i++) {
    const journey = questions[i];
    console.log(journey)

    //If satsen är global...
    if(journey.id == 1) {
      renderStep(journey)
    }
    console.log(journey);
    
    

  }




// 1. Få ut array index 1 på h1.

// Hur kör jag loopen.
// Hur vet jag att det e rätt?
// logik för vad som händer när 1 & 2 visar...
// Foreach, find, filter, findindex, map. <------ Kolla på dem :)
// event med id. Scenario, hitta nästa object att få ut i konsol.

/* class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}
 */



/* const textElement = document.getElementById('text')
const optionsButtonsElement = document.getElementById('options-buttons') */ 

// Variabler, loopar, funktioner & övning...
// Generic Types
//Interfaces 