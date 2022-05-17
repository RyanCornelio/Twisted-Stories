import { Story } from "./types"


export const questions: Story[] = [
    {
      id: 1,
    text: 'You wake up in your room...',
    options: {
      left:{
        text: 'Go outside...',
        goTo: 2
      },
      right: {
        text: 'Brush your teeth...',
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
            text: 'Go to the park...',
            goTo: 4
          }, right: {
            text: 'Go to the store...',
            goTo: 5
          } 
        }, 
  }, {
    id: 3,
  text: 'Is this a lazy day or not?',
  options: {
    left:{
      text: 'Go for a jog...',
      goTo: 6
    },
    right: {
      text: 'Watch tv...',
      goTo: 7
    }
  }, 
    }, {
        id: 4,
      text: 'You see alot of happy people ouside...',
      options: {
        left:{
          text: 'Buy a hotdog...',
          goTo: 5
        },
        right: {
          text: 'Call a friend...',
          goTo: 5
        }
      }, 
        }, {
          id: 5,
        text: 'You realize you are low on money...',
        options: {
          left:{
            text: 'Just buy a drink...',
            goTo: 6
          },
          right: {
            text: 'Go back home...',
            goTo: 1
          }
        }, 
          }, {
            id: 6,
          text: 'Fresh cold ice tea...',
          options: {
            left:{
              text: 'Go party...',
              goTo: 8
            },
            right: {
              text: 'Go back home...',
              goTo: 1
            }
          }, 
            }, {
              id: 7,
            text: 'Take a nap...',
            options: {
              left:{
                text: 'Nap more...',
                goTo: 10
              },
              right: {
                text: 'Eat...',
                goTo: 1
              }
            }, 
              }, {
                id: 10,
              text: 'OMG! You missed your meeting...',
              options: {
                left:{
                  text: 'Nap more...',
                  goTo: 10
                },
                right: {
                  text: 'Call them!',
                  goTo: 1
                }
              }, 
                }, {
                  id: 8,
                text: 'So you have a meeting today...',
                options: {
                  left:{
                    text: 'Relax & eat lunch...',
                    goTo: 10
                  },
                  right: {
                    text: 'Call them early...',
                    goTo: 1
                  }
                }, 
                  }, {
                    id: 9,
                  text: 'Very good job. You had a great day...',
                  options: {
                    left:{
                      text: 'Netflix & chill...',
                      goTo: 10
                    },
                    right: {
                      text: 'Cook dinner...',
                      goTo: 1
                    }
                  }, 
                    },
  ]