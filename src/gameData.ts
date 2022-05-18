import { Story } from "./types"




export const questions: Story[] = [
  {
    id: 0,
  text: 'Do you want to play a game?...',
  options: {
    left: {
      text: 'Sure...',
      goTo: 1,
      hidden: false,
    },
    right: {
      hidden: false,
      text: 'No thank you...',
      goTo: 11
    }
  }, 
    }, 
  
    {
      id: 1,
    text: 'You wake up in your room...',
    options: {
      left:{
        hidden: false,
        text: 'Go outside...',
        goTo: 2
      },
      right: {
        hidden: false,
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
            hidden: false,
            text: 'Go to the park...',
            goTo: 4
          }, right: {
            hidden: false,
            text: 'Go to the store...',
            goTo: 5
          } 
        }, 
  }, {
    id: 3,
  text: 'Is this a lazy day or not?',
  options: {
    left:{
      hidden: false,
      text: 'Go for a jog...',
      goTo: 6
    },
    right: {
      hidden: false,
      text: 'Watch tv...',
      goTo: 7
    }
  }, 
    }, {
        id: 4,
      text: 'You see alot of happy people ouside...',
      options: {
        left:{
          hidden: false,
          text: 'Buy a hotdog...',
          goTo: 5
        },
        right: {
          hidden: false,
          text: 'Call a friend...',
          goTo: 5
        }
      }, 
        }, {
          id: 5,
        text: 'You realize you are low on money...',
        options: {
          left:{
            hidden: false,
            text: 'Just buy a drink...',
            goTo: 6
          },
          right: {
            hidden: false,
            text: 'Go back home...',
            goTo: 1
          }
        }, 
          }, {
            id: 6,
          text: 'Fresh cold ice tea...',
          options: {
            left:{
              hidden: false,
              text: 'Go party...',
              goTo: 8
            },
            right: {
              hidden: false,
              text: 'Go back home...',
              goTo: 1
            }
          }, 
            }, {
              id: 7,
            text: 'Take a nap...',
            options: {
              left:{
                hidden: false,
                text: 'Nap more...',
                goTo: 10
              },
              right: {
                hidden: false,
                text: 'Eat...',
                goTo: 11
              }
            }, 
              }, {
                id: 10,
              text: 'OMG! You missed your meeting...',
              options: {
                left:{
                  hidden: false,
                  text: 'Nap more...',
                  goTo: 10
                },
                right: {
                  hidden: false,
                  text: 'Call them!',
                  goTo: 1
                }
              }, 
                }, {
                  id: 8,
                text: 'So you have a meeting today...',
                options: {
                  left:{
                    hidden: false,
                    text: 'Relax & eat lunch...',
                    goTo: 10
                  },
                  right: {
                    hidden: false,
                    text: 'Call them early...',
                    goTo: 1
                  }
                }, 
                  }, {
                    id: 9,
                  text: 'Very good job. You had a great day...',
                  options: {
                    left:{
                      hidden: false,
                      text: 'Netflix & chill...',
                      goTo: 10
                    },
                    right: {
                      hidden: false,
                      text: 'Cook dinner...',
                      goTo: 1
                    }
                  }, 
                    }, {
                      id: 11,
                    text: 'Thank you have a good day...',
                    options: {
                      left:{
                        hidden: true,
                        text: 'Thanks...',
                        goTo: 10
                      },
                      right: {
                        hidden: true,
                        text: 'Back to start...',
                        goTo: 1
                      }
                    }, 
                      },
  ]