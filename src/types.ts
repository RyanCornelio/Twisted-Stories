/* interface Gamestep {
    question: string,
    answers: {
        left: {}, 
        right: {}
    }
} */


export interface Story {
    id: number,
    text: string,
    options: {
      
        left: {
        text: string,
        goTo: number
      }
        right: {
        text: string
        goTo: number
      }
      
    }
  } 