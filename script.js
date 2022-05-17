//Statement
function makeBread(qty) { 

    const bread = '🍞'.repeat(qty);    //Parameter e när man deklarerar funktionen.
    return bread;
    
}


//Expression
const makeBeer = function(qty) {
    return '🍺';
}

const loaves = makeBread(7);    // Argument e när man kallar på funktionen.



//normally u append elements to the page.


const textElement = document.getElementById('text')
const optionsButtonsElement = docuement.getElementById('options-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id ===
        textNodeIndex) 
        textElement.innerText = textNode.text
        while(optionsButtonsElement.firstChild) {
            optionsButtonsElement.removeChild(optionsButtonsElement.firstChild)
        }

        textNode.options.forEach(options => {
            if (showOption(option)){

            }
        })
    }

    function showOption(option) {
        return true
    }

function selectOption(option) {

}

const textNodes = [
    {
        id: 1,
        text: 'You wake up in  your room...',
        options: [
            {
                text: 'Go outside',
                setState: { blueGoo: true },
                nextText: 2
            },
            {
                text: 'Brush teeth',
                nextText: 2
            }
        ]
    },
    {
        id: 2
    }
]

const element = document.getElementsByClassName("Option-1");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("text").innerHTML = "Hello World";
}


let myAdd: (x: Number, y: number) => number = 
   function(x: number, y: number): number { return x + y; };


// "All data funktion ska använda tar vi in som parametrar"

// Se exempel med Bob builder och antal parametrar som ska in...
// ? = Gör parameter frivillig.
// ...Rest Parameter lägger till resten av listan.
// typa parametrar, string & man kan typa return type.

// Använder en typ så behöver man inte typa när du kallar funktionen sen.
type fullnamefunc = (firstName: string, lastName: string) => string

function getFullName(firstName: string, lastName: string): string {
return firstName + " " + lastName
}

//Följande är en funktion.
const getFullNameV1 = (firstName: String, lastName: string) => { return firstName + " " + lastName}

const getFullNameV2 = fullNameFunc = (firstName, lastName) => { return firstName + " " + lastName}

getFullNameV1("Kalle", "Kula")

//Interface så behöver man inte typa.
interface Person {
    (firstname: String, lastName: string): string
}

const myPerson: Person = {
    firstName: "Kalle",
    lastName: "Larsson",
    getFullNameV2: (firstName, lastName) => { return firstName + " " + lastName} 
}

// Klasser & constructor, behöver matcha parametrar.

class Greeter {
    greeting: String;
    constructor(message: string) {

    }
}

// Klasser

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}


class Person {
    constructor(firstName:string, lastName: String, age: number) {
        this.firstName = firstName
        this.lastName = lastName
        this.SSN = SSN    
    }

firstName: string,
lastName: String,
this.SSN = SSN

getDateOfBirth: () => string = () => {
    return this.SSN.split("-")[0]
}

getAge: () => number = () => this.age
}

const newPerson = new Person('Victor', "Olsson", 30)

newPerson.

interface PersonClassData {
    firstname: string,
    lastname: string
}

const baseSalary = 30_000;
const overTime = 10;
const rate = 20;

function getWage(baseSalary, overTime, rate) {
  return baseSalary + (overTime * rate);
}

const employee = {
    baseSalary: 30_000,
    overTime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
};

employee.getWage();