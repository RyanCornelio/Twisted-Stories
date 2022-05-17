import { Story } from "./types"


export const questions: Story[] = [
    {
      id: 1,
    text: 'You wake up in your room...',
    options: {
      left:{
        text: 'Go outside',
        goTo: 2
      },
      right: {
        text: 'Brush your teeth',
        goTo: 3
      }
    }, 
      }, 
      {      
        id: 2,
        text: 'What will this day bring?',
        options: 
        {
          left: {
            text: 'Go to the park',
            goTo: 4
          }, right: {
            text: 'Go to the store',
            goTo: 5
          } 
        }, 
  }, {
    id: 3,
  text: 'Is this a lazy day or ambitious day?',
  options: {
    left:{
      text: 'Go for a jog...',
      goTo: 2
    },
    right: {
      text: 'Watch tv...',
      goTo: 3
    }
  }, 
    }, {
        id: 4,
      text: 'You see alot of happy people in the enjoying the good weather...',
      options: {
        left:{
          text: 'Buy a hotdog',
          goTo: 2
        },
        right: {
          text: 'Call a friend',
          goTo: 3
        }
      }, 
        },
  ]