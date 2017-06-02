import * as types from '../actions/ActionTypes';

const initialState = {
  add_form_clsname:'add_hiddenform',
  add_form_status:false
}

export default function (state = initialState, action){
  switch(action.type){
    case types.CHANGE_ADD_FORM:
      return {
        ...state,
        add_form_clsname:action.add_form_clsname,
        add_form_status:action.add_form_status
      }
    default :
      return state;
  }
}
