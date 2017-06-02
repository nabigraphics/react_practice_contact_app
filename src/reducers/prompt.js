import * as types from '../actions/ActionTypes';

const initialState = {
    prompt_title:"",
    prompt_visible:false,
    data:null
}

export default function (state = initialState, action){
  switch(action.type){
    case types.OPEN_GROUP_ADD_FROM:
    return{
      ...state,
      prompt_title:action.prompt_title,
      prompt_visible:action.prompt_visible,
      data:action.data
    }
    default :
      return state;
  }
}
