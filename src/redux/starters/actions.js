export const ADD_STARTER = "starters/ADD_STARTER"

export const addStarter = (player) => {
  return{
    type: ADD_STARTER,
    player
  }
}