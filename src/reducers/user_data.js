import * as types from '../actions/ActionTypes';

const initialState = {
    name:'나비',
    email:'dhtm4454@gmail.com'
}

export default function (state = initialState, action){
  switch(action.type){
    case types.UPDATE_EMAIL:
      return {
        ...state,
        name:action.name,
        email:action.email
      }
    default :
      return state;
  }
}
