import {ADD_STARTER} from "./actions"

const defaultState = {
  players: [],
}

export const starterReducer = (state = defaultState, action) => {
  switch(action.type){
    case ADD_STARTER:
      return{
        ...state,
        players: [ action.player, ...state.players] 
      }
      default:
        return state
  }
}